import { DietStatus } from "../types/DietStatus";
import { Meal } from "../types/Meal";

export interface MealStats {
	totalMeals: number;
	mealsWithinDiet: number;
	mealsOutsideDiet: number;
	percentageWithinDiet: number;
	percentageOutsideDiet: number;
}

export const calculateMealStats = (meals: Meal[]): MealStats => {
	if (meals.length === 0) {
		return {
			totalMeals: 0,
			mealsWithinDiet: 0,
			mealsOutsideDiet: 0,
			percentageWithinDiet: 0,
			percentageOutsideDiet: 0,
		};
	}

	const mealsWithinDiet = meals.filter(
		(meal) => meal.isDiet === DietStatus.WITHIN_DIET,
	).length;
	const mealsOutsideDiet = meals.filter(
		(meal) => meal.isDiet === DietStatus.OUTSIDE_DIET,
	).length;
	const totalMeals = meals.length;

	const percentageWithinDiet = (mealsWithinDiet / totalMeals) * 100;
	const percentageOutsideDiet = (mealsOutsideDiet / totalMeals) * 100;

	return {
		totalMeals,
		mealsWithinDiet,
		mealsOutsideDiet,
		percentageWithinDiet: Number(percentageWithinDiet.toFixed(2)),
		percentageOutsideDiet: Number(percentageOutsideDiet.toFixed(2)),
	};
};
