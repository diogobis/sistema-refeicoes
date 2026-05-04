import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Details } from "../app/Details";
import { Feedback } from "../app/Feedback";
import { FormMeal } from "../app/FormMeal";
import { Home } from "../app/Home";
import { Statistics } from "../app/Statistics";
import { DietStatus } from "../types/DietStatus";

export type RootStackParamList = {
	Home: undefined;
	Details: { mealId: string };
	FormMeal: { mealId?: string } | undefined;
	Feedback: { isDiet: DietStatus };
	Statistics: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: true,
					headerBackTitle: "Voltar",
				}}
			>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: "Minhas Refeições",
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="Details"
					component={Details}
					options={{
						title: "Detalhes da Refeição",
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="FormMeal"
					component={FormMeal}
					options={({ route }) => ({
						title: route.params?.mealId
							? "Editar Refeição"
							: "Nova Refeição",
						headerShown: true,
					})}
				/>
				<Stack.Screen
					name="Feedback"
					component={Feedback}
					options={{
						title: "",
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Statistics"
					component={Statistics}
					options={{
						title: "Estatísticas",
						headerShown: true,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
