import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

interface MealCardContainerProps {
	isDiet: boolean;
}

export const MealCardContainer = styled(
	TouchableOpacity,
)<MealCardContainerProps>`
	background-color: ${theme.colors.white};
	border-left-width: 4px;
	border-left-color: ${(props) =>
		props.isDiet ? theme.colors.dietGreen : theme.colors.notDietRed};
	border-radius: ${theme.borderRadius.md}px;
	padding: ${theme.spacing.md}px;
	margin-vertical: ${theme.spacing.sm}px;
	margin-horizontal: ${theme.spacing.md}px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const MealCardContent = styled.View`
	flex: 1;
`;

export const MealCardName = styled.Text`
	font-size: ${theme.fontSize.md}px;
	font-weight: ${theme.fontWeight.semibold};
	color: ${theme.colors.textPrimary};
`;

export const MealCardDescription = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	color: ${theme.colors.textSecondary};
	margin-top: ${theme.spacing.xs}px;
`;

export const MealCardMeta = styled.Text`
	font-size: ${theme.fontSize.xs}px;
	color: ${theme.colors.textSecondary};
	margin-top: ${theme.spacing.xs}px;
`;

export const MealCardActions = styled.View`
	flex-direction: row;
	gap: ${theme.spacing.sm}px;
	margin-left: ${theme.spacing.md}px;
`;
