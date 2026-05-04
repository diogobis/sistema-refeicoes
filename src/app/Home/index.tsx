import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Plus } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Button } from "../../components/Button";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { MealCard } from "../../components/MealCard";
import { theme } from "../../constants/theme";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { deleteMeal, getMeals } from "../../storage/mealsStorage";
import { DietStatus } from "../../types/DietStatus";
import { Meal } from "../../types/Meal";
import { formatDate, groupMealsByDate } from "../../utils/dateFormatter";
import {
    Container,
    EmptyContainer,
    EmptyText,
    FAB,
    Header,
    HeaderTitle,
    Hero,
    HeroEyebrow,
    HeroStatCard,
    HeroStatLabel,
    HeroStatsRow,
    HeroStatValue,
    HeroSubtitle,
    HeroTitle,
    ListContainer,
    SectionHeaderContainer,
    SectionHeaderText,
    StatsButtonContainer,
} from "./styles";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function Home({ navigation }: HomeScreenProps) {
	const [meals, setMeals] = useState<Meal[]>([]);
	const [loading, setLoading] = useState(true);
	const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
	const [selectedMealId, setSelectedMealId] = useState<string | null>(null);

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			loadMeals();
		});
		return unsubscribe;
	}, [navigation]);

	useEffect(() => {
		loadMeals();
	}, []);

	const loadMeals = async () => {
		try {
			setLoading(true);
			const loadedMeals = await getMeals();
			const sorted = loadedMeals.sort(
				(a, b) =>
					new Date(b.date).getTime() - new Date(a.date).getTime(),
			);
			setMeals(sorted);
		} catch (error) {
			console.error("Error loading meals:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDeleteMeal = async () => {
		if (!selectedMealId) {
			return;
		}

		try {
			await deleteMeal(selectedMealId);
			await loadMeals();
			setDeleteDialogVisible(false);
			setSelectedMealId(null);
		} catch (error) {
			console.error("Error deleting meal:", error);
		}
	};

	const groupedMeals = groupMealsByDate(meals);
	const sections = Object.entries(groupedMeals)
		.map(([date, items]) => ({
			title: formatDate(date),
			data: items,
		}))
		.sort((a, b) => {
			const dateA = new Date(
				meals.find((meal) => groupedMeals[a.title].includes(meal))
					?.date || "",
			);
			const dateB = new Date(
				meals.find((meal) => groupedMeals[b.title].includes(meal))
					?.date || "",
			);
			return dateB.getTime() - dateA.getTime();
		});

	const totalMeals = meals.length;
	const mealsWithinDiet = meals.filter(
		(meal) => meal.isDiet === DietStatus.WITHIN_DIET,
	).length;
	const mealsOutsideDiet = totalMeals - mealsWithinDiet;

	return (
		<Container>
			<Hero>
				<HeroEyebrow>Controle diário da dieta</HeroEyebrow>
				<HeroTitle>Registre e acompanhe suas refeições</HeroTitle>
				<HeroSubtitle>
					Cadastre refeições, avalie sua dieta e veja seu progresso em
					um único lugar.
				</HeroSubtitle>
				<HeroStatsRow>
					<HeroStatCard>
						<HeroStatValue>{totalMeals}</HeroStatValue>
						<HeroStatLabel>Total</HeroStatLabel>
					</HeroStatCard>
					<HeroStatCard>
						<HeroStatValue>{mealsWithinDiet}</HeroStatValue>
						<HeroStatLabel>Dentro</HeroStatLabel>
					</HeroStatCard>
					<HeroStatCard>
						<HeroStatValue>{mealsOutsideDiet}</HeroStatValue>
						<HeroStatLabel>Fora</HeroStatLabel>
					</HeroStatCard>
				</HeroStatsRow>
			</Hero>

			<Header>
				<HeaderTitle>
					{loading ? "Carregando..." : "Refeições cadastradas"}
				</HeaderTitle>
			</Header>

			<ListContainer>
				{meals.length === 0 ? (
					<EmptyContainer>
						<EmptyText>
							Nenhuma refeição cadastrada ainda.{"\n"}Toque no +
							para adicionar uma!
						</EmptyText>
					</EmptyContainer>
				) : (
					<SectionList
						sections={sections}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<MealCard
								meal={item}
								onPress={() =>
									navigation.navigate("Details", {
										mealId: item.id,
									})
								}
								onEdit={() =>
									navigation.navigate("FormMeal", {
										mealId: item.id,
									})
								}
								onDelete={() => {
									setSelectedMealId(item.id);
									setDeleteDialogVisible(true);
								}}
							/>
						)}
						renderSectionHeader={({ section: { title } }) => (
							<SectionHeaderContainer>
								<SectionHeaderText>{title}</SectionHeaderText>
							</SectionHeaderContainer>
						)}
					/>
				)}
			</ListContainer>

			<StatsButtonContainer>
				<Button
					title="Ver Estatísticas"
					onPress={() => navigation.navigate("Statistics")}
				/>
			</StatsButtonContainer>

			<FAB onPress={() => navigation.navigate("FormMeal")}>
				<Plus size={24} color={theme.colors.white} />
			</FAB>

			<ConfirmDialog
				visible={deleteDialogVisible}
				title="Deletar Refeição"
				message="Tem certeza que deseja deletar esta refeição?"
				confirmText="Deletar"
				cancelText="Cancelar"
				isDangerous={true}
				onConfirm={handleDeleteMeal}
				onCancel={() => {
					setDeleteDialogVisible(false);
					setSelectedMealId(null);
				}}
			/>
		</Container>
	);
}
