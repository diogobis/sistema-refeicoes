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
	border-radius: ${theme.borderRadius.xl}px;
	padding: ${theme.spacing.xl}px;
	margin-horizontal: ${theme.spacing.md}px;
	margin-vertical: ${theme.spacing.sm}px;
	align-items: center;
	border-width: 1px;
	border-color: ${(props) =>
		props.variant === "within"
			? theme.colors.dietGreenSoft
			: theme.colors.notDietRedSoft};
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.06;
	shadow-radius: 18px;
	elevation: 3;
`;

export const StatCardPercentage = styled.Text<StatCardContainerProps>`
	font-size: 32px;
	font-weight: ${theme.fontWeight.bold};
	color: ${(props) =>
		props.variant === "within"
			? theme.colors.dietGreen
			: theme.colors.notDietRed};
	line-height: 38px;
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
