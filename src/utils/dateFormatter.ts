export const formatDate = (dateString: string): string => {
	// Input format: YYYY-MM-DD
	try {
		const date = new Date(dateString + "T00:00:00");
		return date.toLocaleDateString("pt-BR", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} catch {
		return dateString;
	}
};

export const formatTime = (timeString: string): string => {
	// Input format: HH:mm
	return timeString;
};

export const formatDateTime = (date: string, time: string): string => {
	return `${formatDate(date)} às ${formatTime(time)}`;
};

export const getDateString = (date: Date): string => {
	// Returns format: YYYY-MM-DD
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

export const getTimeString = (date: Date): string => {
	// Returns format: HH:mm
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	return `${hours}:${minutes}`;
};

export const groupMealsByDate = (
	meals: Array<{ date: string; [key: string]: any }>,
): Record<string, any[]> => {
	return meals.reduce(
		(acc, meal) => {
			const dateKey = meal.date;
			if (!acc[dateKey]) {
				acc[dateKey] = [];
			}
			acc[dateKey].push(meal);
			return acc;
		},
		{} as Record<string, any[]>,
	);
};
