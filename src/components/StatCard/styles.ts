import styled from "styled-components/native";
import { theme } from "../../constants/theme";

interface StatCardContainerProps {
	variant?: "within" | "outside";
}

export const StatCardContainer = styled.View<StatCardContainerProps>`
	background-color: ${(props) =>
		props.variant === "within"
			? theme.colors.dietGreenLight
			: theme.colors.notDietRedLight};
	border-radius: ${theme.borderRadius.md}px;
	padding: ${theme.spacing.lg}px;
	margin-horizontal: ${theme.spacing.md}px;
	margin-vertical: ${theme.spacing.md}px;
	align-items: center;
`;

export const StatCardPercentage = styled.Text<StatCardContainerProps>`
	font-size: 32px;
	font-weight: ${theme.fontWeight.bold};
	color: ${(props) =>
		props.variant === "within"
			? theme.colors.dietGreen
			: theme.colors.notDietRed};
`;

export const StatCardLabel = styled.Text<StatCardContainerProps>`
	font-size: ${theme.fontSize.sm}px;
	color: ${(props) =>
		props.variant === "within"
			? theme.colors.dietGreen
			: theme.colors.notDietRed};
	margin-top: ${theme.spacing.sm}px;
	font-weight: ${theme.fontWeight.medium};
`;
