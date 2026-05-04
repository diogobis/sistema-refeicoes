import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../types/Meal";

const MEALS_STORAGE_KEY = "@sistem-refeicoes:meals";

export const getMeals = async (): Promise<Meal[]> => {
	try {
		const stored = await AsyncStorage.getItem(MEALS_STORAGE_KEY);
		if (stored) {
			return JSON.parse(stored);
		}
		return [];
	} catch (error) {
		console.error("MEALS_GET: Error fetching meals -", error);
		return [];
	}
};

export const getMealById = async (id: string): Promise<Meal | null> => {
	try {
		const meals = await getMeals();
		return meals.find((meal) => meal.id === id) || null;
	} catch (error) {
		console.error("MEAL_GET_BY_ID: Error fetching meal -", error);
		return null;
	}
};

export const addMeal = async (
	meal: Omit<Meal, "id" | "createdAt">,
): Promise<Meal> => {
	try {
		const meals = await getMeals();
		const newMeal: Meal = {
			...meal,
			id: Math.random().toString().substring(2),
			createdAt: new Date().toISOString(),
		};
		const updatedMeals = [...meals, newMeal];
		await AsyncStorage.setItem(
			MEALS_STORAGE_KEY,
			JSON.stringify(updatedMeals),
		);
		return newMeal;
	} catch (error) {
		console.error("MEAL_ADD: Error adding meal -", error);
		throw error;
	}
};

export const updateMeal = async (
	id: string,
	updatedData: Partial<Meal>,
): Promise<Meal | null> => {
	try {
		const meals = await getMeals();
		const mealIndex = meals.findIndex((meal) => meal.id === id);
		if (mealIndex === -1) {
			console.error("MEAL_UPDATE: Meal not found");
			return null;
		}
		const updatedMeal = { ...meals[mealIndex], ...updatedData, id };
		const updatedMeals = [...meals];
		updatedMeals[mealIndex] = updatedMeal;
		await AsyncStorage.setItem(
			MEALS_STORAGE_KEY,
			JSON.stringify(updatedMeals),
		);
		return updatedMeal;
	} catch (error) {
		console.error("MEAL_UPDATE: Error updating meal -", error);
		throw error;
	}
};

export const deleteMeal = async (id: string): Promise<boolean> => {
	try {
		const meals = await getMeals();
		const filteredMeals = meals.filter((meal) => meal.id !== id);
		await AsyncStorage.setItem(
			MEALS_STORAGE_KEY,
			JSON.stringify(filteredMeals),
		);
		return true;
	} catch (error) {
		console.error("MEAL_DELETE: Error deleting meal -", error);
		throw error;
	}
};

export const clearAllMeals = async (): Promise<void> => {
	try {
		await AsyncStorage.removeItem(MEALS_STORAGE_KEY);
	} catch (error) {
		console.error("MEALS_CLEAR: Error clearing meals -", error);
		throw error;
	}
};
