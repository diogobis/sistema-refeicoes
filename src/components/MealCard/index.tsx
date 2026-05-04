import { Edit2, Trash2 } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "../../constants/theme";
import { DietStatus } from "../../types/DietStatus";
import { Meal } from "../../types/Meal";
import {
    MealCardActions,
    MealCardContainer,
    MealCardContent,
    MealCardDescription,
    MealCardMeta,
    MealCardName,
} from "./styles";

interface MealCardProps {
	meal: Meal;
	onPress: () => void;
	onEdit: () => void;
	onDelete: () => void;
}

export function MealCard({ meal, onPress, onEdit, onDelete }: MealCardProps) {
	const isDiet = meal.isDiet === DietStatus.WITHIN_DIET;

	return (
		<MealCardContainer isDiet={isDiet} onPress={onPress}>
			<MealCardContent>
				<MealCardName>{meal.name}</MealCardName>
				<MealCardDescription numberOfLines={2}>
					{meal.description}
				</MealCardDescription>
				<MealCardMeta>{meal.time}</MealCardMeta>
			</MealCardContent>
			<MealCardActions>
				<TouchableOpacity onPress={onEdit}>
					<Edit2 size={18} color={theme.colors.primary} />
				</TouchableOpacity>
				<TouchableOpacity onPress={onDelete}>
					<Trash2 size={18} color={theme.colors.notDietRed} />
				</TouchableOpacity>
			</MealCardActions>
		</MealCardContainer>
	);
}
