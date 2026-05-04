import { View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const DialOverlay = styled(View)`
	flex: 1;
	background-color: rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
`;

export const DialogContainer = styled.View`
	background-color: ${theme.colors.surfaceElevated};
	border-radius: ${theme.borderRadius.xl}px;
	padding: ${theme.spacing.xl}px;
	width: 84%;
	align-items: center;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.1;
	shadow-radius: 18px;
	elevation: 5;
`;

export const DialogTitle = styled.Text`
	font-size: ${theme.fontSize.lg}px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.textPrimary};
	margin-bottom: ${theme.spacing.md}px;
	text-align: center;
	line-height: 24px;
`;

export const DialogMessage = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.lg}px;
	text-align: center;
	line-height: 22px;
`;

export const DialogButtonsContainer = styled.View`
	flex-direction: row;
	gap: ${theme.spacing.md}px;
	width: 100%;
`;

export const DialogButton = styled.TouchableOpacity<{
	variant?: "primary" | "danger";
}>`
	flex: 1;
	padding: ${theme.spacing.md}px;
	background-color: ${(props) =>
		props.variant === "danger"
			? theme.colors.notDietRed
			: theme.colors.primary};
	border-radius: ${theme.borderRadius.lg}px;
	align-items: center;
`;

export const DialogButtonText = styled.Text`
	color: ${theme.colors.white};
	font-weight: ${theme.fontWeight.semibold};
	font-size: ${theme.fontSize.md}px;
`;
