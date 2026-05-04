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
	background-color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.lg}px;
	padding: ${theme.spacing.lg}px;
	width: 80%;
	align-items: center;
`;

export const DialogTitle = styled.Text`
	font-size: ${theme.fontSize.lg}px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.textPrimary};
	margin-bottom: ${theme.spacing.md}px;
	text-align: center;
`;

export const DialogMessage = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.lg}px;
	text-align: center;
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
	border-radius: ${theme.borderRadius.md}px;
	align-items: center;
`;

export const DialogButtonText = styled.Text`
	color: ${theme.colors.white};
	font-weight: ${theme.fontWeight.semibold};
	font-size: ${theme.fontSize.md}px;
`;
