import { DietStatus } from "./DietStatus";

export interface Meal {
	id: string;
	name: string;
	description: string;
	date: string; // Format: YYYY-MM-DD
	time: string; // Format: HH:mm
	isDiet: DietStatus;
	createdAt: string; // ISO string
}
