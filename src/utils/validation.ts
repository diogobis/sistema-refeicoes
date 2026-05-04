export const validateMealName = (name: string): boolean => {
	return name.trim().length > 0;
};

export const validateMealDescription = (description: string): boolean => {
	return description.trim().length > 0;
};

export const validateTime = (time: string): boolean => {
	// Format: HH:mm
	const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
	return timeRegex.test(time);
};

export const validateDate = (date: string): boolean => {
	// Format: YYYY-MM-DD
	const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	if (!dateRegex.test(date)) return false;

	const dateObj = new Date(date + "T00:00:00");
	return !isNaN(dateObj.getTime());
};

export const validateMeal = (
	name: string,
	description: string,
	date: string,
	time: string,
): { valid: boolean; errors: string[] } => {
	const errors: string[] = [];

	if (!validateMealName(name)) {
		errors.push("Nome da refeição é obrigatório");
	}

	if (!validateMealDescription(description)) {
		errors.push("Descrição é obrigatória");
	}

	if (!validateDate(date)) {
		errors.push("Data inválida");
	}

	if (!validateTime(time)) {
		errors.push("Hora inválida (use formato HH:mm)");
	}

	return {
		valid: errors.length === 0,
		errors,
	};
};
