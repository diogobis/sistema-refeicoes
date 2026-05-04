import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { StatCard } from "../../components/StatCard";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { getMeals } from "../../storage/mealsStorage";
import { Meal } from "../../types/Meal";
import { calculateMealStats } from "../../utils/calculateStats";
import {
    ButtonContainer,
    Container,
    Content,
    DetailLabel,
    DetailRow,
    DetailValue,
    EmptyText,
    StatsContainer,
    SummaryContainer,
    SummaryLabel,
    SummaryValue,
    Title,
} from "./styles";

type StatisticsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"Statistics"
>;

export function Statistics({ navigation }: StatisticsScreenProps) {
	const [meals, setMeals] = useState<Meal[]>([]);
	const [loading, setLoading] = useState(true);

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
			setMeals(loadedMeals);
		} catch (error) {
			console.error("Error loading meals:", error);
		} finally {
			setLoading(false);
		}
	};

	const stats = calculateMealStats(meals);

	return (
		<Container>
			<Content>
				<Title>Suas Estatísticas</Title>

				{meals.length === 0 ? (
					<EmptyText>
						Nenhuma refeição cadastrada ainda. Cadastre refeições
						para ver suas estatísticas!
					</EmptyText>
				) : (
					<>
						<SummaryContainer>
							<SummaryLabel>Total de Refeições</SummaryLabel>
							<SummaryValue>{stats.totalMeals}</SummaryValue>
						</SummaryContainer>

						<StatsContainer>
							<StatCard
								percentage={stats.percentageWithinDiet}
								label="Refeições dentro da dieta"
								variant="within"
							/>
							<StatCard
								percentage={stats.percentageOutsideDiet}
								label="Refeições fora da dieta"
								variant="outside"
							/>
						</StatsContainer>

						<SummaryContainer>
							<DetailRow>
								<DetailLabel>Dentro da Dieta:</DetailLabel>
								<DetailValue>
									{stats.mealsWithinDiet}
								</DetailValue>
							</DetailRow>
							<DetailRow style={{ borderBottomWidth: 0 }}>
								<DetailLabel>Fora da Dieta:</DetailLabel>
								<DetailValue>
									{stats.mealsOutsideDiet}
								</DetailValue>
							</DetailRow>
						</SummaryContainer>
					</>
				)}

				<ButtonContainer>
					<Button
						title="Voltar"
						onPress={() => navigation.goBack()}
					/>
				</ButtonContainer>
			</Content>
		</Container>
	);
}
