import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { deleteMeal, getMealById } from "../../storage/mealsStorage";
import { DietStatus } from "../../types/DietStatus";
import { Meal } from "../../types/Meal";
import { formatDateTime } from "../../utils/dateFormatter";
import {
    ActionButton,
    ButtonsContainer,
    Container,
    Content,
    DetailDescription,
    DetailLabel,
    DetailRow,
    DetailValue,
    StatusBadge,
    StatusText,
} from "./styles";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export function Details({ navigation, route }: DetailsScreenProps) {
	const { mealId } = route.params;
	const [meal, setMeal] = useState<Meal | null>(null);
	const [loading, setLoading] = useState(true);
	const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

	useEffect(() => {
		loadMeal();
	}, [mealId]);

	const loadMeal = async () => {
		try {
			setLoading(true);
			const loadedMeal = await getMealById(mealId);
			setMeal(loadedMeal);
		} catch (error) {
			console.error("Error loading meal:", error);
			Alert.alert("Erro", "Não foi possível carregar a refeição");
		} finally {
			setLoading(false);
		}
	};

	const handleDeleteMeal = async () => {
		if (meal) {
			try {
				await deleteMeal(meal.id);
				setDeleteDialogVisible(false);
				navigation.goBack();
			} catch (error) {
				console.error("Error deleting meal:", error);
				Alert.alert("Erro", "Não foi possível deletar a refeição");
			}
		}
	};

	if (loading || !meal) {
		return (
			<Container>
				<Content>
					<DetailValue>Carregando...</DetailValue>
				</Content>
			</Container>
		);
	}

	const isDiet = meal.isDiet === DietStatus.WITHIN_DIET;

	return (
		<Container>
			<Content>
				<StatusBadge isDiet={isDiet}>
					<StatusText isDiet={isDiet}>
						{isDiet ? "Dentro da Dieta" : "Fora da Dieta"}
					</StatusText>
				</StatusBadge>

				<DetailRow>
					<DetailLabel>Nome</DetailLabel>
					<DetailValue>{meal.name}</DetailValue>
				</DetailRow>

				<DetailRow>
					<DetailLabel>Descrição</DetailLabel>
					<DetailDescription>{meal.description}</DetailDescription>
				</DetailRow>

				<DetailRow>
					<DetailLabel>Data e Hora</DetailLabel>
					<DetailValue>
						{formatDateTime(meal.date, meal.time)}
					</DetailValue>
				</DetailRow>

				<ButtonsContainer>
					<ActionButton>
						<Button
							title="Editar"
							onPress={() =>
								navigation.navigate("FormMeal", {
									mealId: meal.id,
								})
							}
						/>
					</ActionButton>
					<ActionButton>
						<Button
							title="Deletar"
							variant="danger"
							onPress={() => setDeleteDialogVisible(true)}
						/>
					</ActionButton>
				</ButtonsContainer>
			</Content>

			<ConfirmDialog
				visible={deleteDialogVisible}
				title="Deletar Refeição"
				message="Tem certeza que deseja deletar esta refeição?"
				confirmText="Deletar"
				cancelText="Cancelar"
				isDangerous={true}
				onConfirm={handleDeleteMeal}
				onCancel={() => setDeleteDialogVisible(false)}
			/>
		</Container>
	);
}
