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
    Subtitle,
    SummaryContainer,
    Title,
    TopCard,
    TopCardLabel,
    TopCardText,
    TopCardValue,
} from "./styles";

type StatisticsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"Statistics"
>;

export function Statistics({ navigation }: StatisticsScreenProps) {
	const [meals, setMeals] = useState<Meal[]>([]);

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
			const loadedMeals = await getMeals();
			setMeals(loadedMeals);
		} catch (error) {
			console.error("Error loading meals:", error);
		}
	};

	const stats = calculateMealStats(meals);

	return (
		<Container>
			<Content>
				<Title>Suas Estatísticas</Title>
				<Subtitle>
					Acompanhe o progresso geral da dieta com base em todas as
					refeições registradas.
				</Subtitle>

				{meals.length === 0 ? (
					<EmptyText>
						Nenhuma refeição cadastrada ainda. Cadastre refeições
						para ver suas estatísticas!
					</EmptyText>
				) : (
					<>
						<TopCard>
							<TopCardLabel>Total de refeições</TopCardLabel>
							<TopCardValue>{stats.totalMeals}</TopCardValue>
							<TopCardText>
								Dados acumulados de todas as refeições salvas no
								dispositivo.
							</TopCardText>
						</TopCard>

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
								<DetailLabel>Dentro da Dieta: </DetailLabel>
								<DetailValue>
									{stats.mealsWithinDiet}
								</DetailValue>
							</DetailRow>
							<DetailRow style={{ borderBottomWidth: 0 }}>
								<DetailLabel>Fora da Dieta: </DetailLabel>
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
