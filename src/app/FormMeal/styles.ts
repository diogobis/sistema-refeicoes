import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled(KeyboardAvoidingView)`
	flex: 1;
	background-color: ${theme.colors.surface};
`;

export const Content = styled.ScrollView`
	flex: 1;
	padding: ${theme.spacing.lg}px;
`;

export const Card = styled.View`
	background-color: ${theme.colors.surfaceElevated};
	border-radius: ${theme.borderRadius.xxl}px;
	padding: ${theme.spacing.lg}px;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.08;
	shadow-radius: 18px;
	elevation: 4;
`;

export const FormSection = styled.View`
	margin-bottom: ${theme.spacing.lg}px;
`;

export const SectionLabel = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	font-weight: ${theme.fontWeight.semibold};
	color: ${theme.colors.textMuted};
	margin-bottom: ${theme.spacing.md}px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
`;

export const DateTimeRow = styled.View`
	flex-direction: row;
	gap: ${theme.spacing.md}px;
`;

export const DateTimeContainer = styled.View`
	flex: 1;
`;

export const DietSelectionContainer = styled.View`
	flex-direction: row;
	gap: ${theme.spacing.md}px;
	margin-bottom: ${theme.spacing.lg}px;
`;

export const DietButton = styled.TouchableOpacity<{
	isSelected: boolean;
	variant: "within" | "outside";
}>`
	flex: 1;
	padding: ${theme.spacing.md}px;
	border-radius: ${theme.borderRadius.md}px;
	background-color: ${(props) => {
		if (!props.isSelected) {
			return theme.colors.gray100;
		}
		return props.variant === "within"
			? theme.colors.dietGreenLight
			: theme.colors.notDietRedLight;
	}};
	border-width: ${(props) => (props.isSelected ? 2 : 1)}px;
	border-color: ${(props) =>
		props.variant === "within"
			? theme.colors.dietGreen
			: theme.colors.notDietRed};
	align-items: center;
	justify-content: center;
	min-height: 54px;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.06;
	shadow-radius: 16px;
	elevation: 3;
`;

export const DietButtonText = styled.Text<{
	isSelected: boolean;
	variant: "within" | "outside";
}>`
	color: ${(props) => {
		if (!props.isSelected) {
			return theme.colors.textSecondary;
		}
		return props.variant === "within"
			? theme.colors.dietGreen
			: theme.colors.notDietRed;
	}};
	font-weight: ${(props) =>
		props.isSelected ? theme.fontWeight.bold : theme.fontWeight.medium};
	font-size: ${theme.fontSize.md}px;
	text-align: center;
`;

export const ButtonContainer = styled.View`
	margin-top: ${theme.spacing.xl}px;
	gap: ${theme.spacing.md}px;
	padding-bottom: ${theme.spacing.lg}px;
`;

export const ErrorText = styled.Text`
	color: ${theme.colors.notDietRed};
	font-size: ${theme.fontSize.sm}px;
	margin-top: ${theme.spacing.md}px;
	text-align: center;
	font-weight: ${theme.fontWeight.medium};
`;
