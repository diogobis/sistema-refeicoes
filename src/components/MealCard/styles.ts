import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

interface MealCardContainerProps {
	isDiet: boolean;
}

export const MealCardContainer = styled(
	TouchableOpacity,
)<MealCardContainerProps>`
	background-color: ${theme.colors.surfaceElevated};
	border-width: 1px;
	border-color: ${(props) =>
		props.isDiet
			? theme.colors.dietGreenLight
			: theme.colors.notDietRedLight};
	border-left-width: 6px;
	border-left-color: ${(props) =>
		props.isDiet ? theme.colors.dietGreen : theme.colors.notDietRed};
	border-radius: ${theme.borderRadius.xl}px;
	padding: ${theme.spacing.lg}px;
	margin-vertical: ${theme.spacing.sm}px;
	margin-horizontal: ${theme.spacing.md}px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.08;
	shadow-radius: 18px;
	elevation: 4;
`;

export const MealCardContent = styled.View`
	flex: 1;
`;

export const MealCardName = styled.Text`
	font-size: ${theme.fontSize.md}px;
	font-weight: ${theme.fontWeight.semibold};
	color: ${theme.colors.textPrimary};
	margin-bottom: ${theme.spacing.xs}px;
`;

export const MealCardDescription = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	color: ${theme.colors.textSecondary};
	margin-top: ${theme.spacing.xs}px;
`;

export const MealCardMeta = styled.Text`
	font-size: ${theme.fontSize.xs}px;
	color: ${theme.colors.textMuted};
	margin-top: ${theme.spacing.xs}px;
	text-transform: uppercase;
	letter-spacing: 0.6px;
`;

export const MealCardActions = styled.View`
	flex-direction: row;
	gap: ${theme.spacing.sm}px;
	margin-left: ${theme.spacing.md}px;
`;
