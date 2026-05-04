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
import { Meal } from "../../types/Meal";
import { formatDate, groupMealsByDate } from "../../utils/dateFormatter";
import {
    Container,
    EmptyContainer,
    EmptyText,
    FAB,
    Header,
    HeaderTitle,
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
			// Sort by date descending
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
		if (selectedMealId) {
			try {
				await deleteMeal(selectedMealId);
				await loadMeals();
				setDeleteDialogVisible(false);
				setSelectedMealId(null);
			} catch (error) {
				console.error("Error deleting meal:", error);
			}
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
				meals.find((m) => groupedMeals[a.title].includes(m))?.date ||
					"",
			);
			const dateB = new Date(
				meals.find((m) => groupedMeals[b.title].includes(m))?.date ||
					"",
			);
			return dateB.getTime() - dateA.getTime();
		});

	return (
		<Container>
			<Header>
				<HeaderTitle>Minhas Refeições</HeaderTitle>
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
