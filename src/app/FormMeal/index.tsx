import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { addMeal, getMealById, updateMeal } from "../../storage/mealsStorage";
import { DietStatus } from "../../types/DietStatus";
import { getDateString, getTimeString } from "../../utils/dateFormatter";
import { validateMeal } from "../../utils/validation";
import {
    ButtonContainer,
    Container,
    Content,
    DateTimeContainer,
    DateTimeRow,
    DietButton,
    DietButtonText,
    DietSelectionContainer,
    ErrorText,
    FormSection,
    SectionLabel,
} from "./styles";

type FormMealScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"FormMeal"
>;

export function FormMeal({ navigation, route }: FormMealScreenProps) {
	const mealId = route.params?.mealId;
	const isEditing = !!mealId;

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState(getDateString(new Date()));
	const [time, setTime] = useState(getTimeString(new Date()));
	const [isDiet, setIsDiet] = useState<DietStatus>(DietStatus.WITHIN_DIET);
	const [errors, setErrors] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (isEditing) {
			loadMealData();
		}
	}, [mealId]);

	const loadMealData = async () => {
		if (!mealId) return;
		try {
			const meal = await getMealById(mealId);
			if (meal) {
				setName(meal.name);
				setDescription(meal.description);
				setDate(meal.date);
				setTime(meal.time);
				setIsDiet(meal.isDiet);
			}
		} catch (error) {
			console.error("Error loading meal:", error);
			Alert.alert("Erro", "Não foi possível carregar a refeição");
		}
	};

	const handleSaveMeal = async () => {
		const validation = validateMeal(name, description, date, time);
		if (!validation.valid) {
			setErrors(validation.errors);
			return;
		}

		setErrors([]);
		setLoading(true);

		try {
			const mealData = {
				name,
				description,
				date,
				time,
				isDiet,
			};

			if (isEditing && mealId) {
				await updateMeal(mealId, mealData);
				navigation.navigate("Details", { mealId });
			} else {
				const newMeal = await addMeal(mealData);
				navigation.navigate("Feedback", { isDiet });
			}
		} catch (error) {
			console.error("Error saving meal:", error);
			Alert.alert("Erro", "Não foi possível salvar a refeição");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container behavior="padding">
			<Content>
				<FormSection>
					<Input
						label="Nome da Refeição"
						placeholder="Ex: Almoço, Café da manhã"
						value={name}
						onChangeText={setName}
						editable={!loading}
					/>
				</FormSection>

				<FormSection>
					<Input
						label="Descrição"
						placeholder="Descreva a refeição"
						value={description}
						onChangeText={setDescription}
						multiline
						numberOfLines={4}
						editable={!loading}
					/>
				</FormSection>

				<FormSection>
					<DateTimeRow>
						<DateTimeContainer>
							<Input
								label="Data (YYYY-MM-DD)"
								placeholder="2024-12-31"
								value={date}
								onChangeText={setDate}
								editable={!loading}
							/>
						</DateTimeContainer>
						<DateTimeContainer>
							<Input
								label="Hora (HH:mm)"
								placeholder="14:30"
								value={time}
								onChangeText={setTime}
								editable={!loading}
							/>
						</DateTimeContainer>
					</DateTimeRow>
				</FormSection>

				<FormSection>
					<SectionLabel>Status da Refeição</SectionLabel>
					<DietSelectionContainer>
						<DietButton
							isSelected={isDiet === DietStatus.WITHIN_DIET}
							variant="within"
							onPress={() => setIsDiet(DietStatus.WITHIN_DIET)}
							disabled={loading}
						>
							<DietButtonText
								isSelected={isDiet === DietStatus.WITHIN_DIET}
								variant="within"
							>
								Dentro da Dieta
							</DietButtonText>
						</DietButton>
						<DietButton
							isSelected={isDiet === DietStatus.OUTSIDE_DIET}
							variant="outside"
							onPress={() => setIsDiet(DietStatus.OUTSIDE_DIET)}
							disabled={loading}
						>
							<DietButtonText
								isSelected={isDiet === DietStatus.OUTSIDE_DIET}
								variant="outside"
							>
								Fora da Dieta
							</DietButtonText>
						</DietButton>
					</DietSelectionContainer>
				</FormSection>

				{errors.length > 0 && (
					<ErrorText>{errors.join("\n")}</ErrorText>
				)}

				<ButtonContainer>
					<Button
						title={
							isEditing
								? "Atualizar Refeição"
								: "Cadastrar Refeição"
						}
						onPress={handleSaveMeal}
						disabled={loading}
					/>
					<Button
						title="Cancelar"
						variant="secondary"
						onPress={() => navigation.goBack()}
						disabled={loading}
					/>
				</ButtonContainer>
			</Content>
		</Container>
	);
}
