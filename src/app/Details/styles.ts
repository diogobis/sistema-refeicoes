import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${theme.colors.white};
`;

export const Content = styled.ScrollView`
	flex: 1;
	padding: ${theme.spacing.lg}px;
`;

export const DetailRow = styled.View`
	margin-bottom: ${theme.spacing.lg}px;
`;

export const DetailLabel = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.sm}px;
	font-weight: ${theme.fontWeight.medium};
`;

export const DetailValue = styled.Text`
	font-size: ${theme.fontSize.lg}px;
	color: ${theme.colors.textPrimary};
	font-weight: ${theme.fontWeight.semibold};
`;

export const DetailDescription = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textPrimary};
	line-height: 24px;
`;

export const StatusBadge = styled.View<{ isDiet: boolean }>`
	background-color: ${(props) =>
		props.isDiet
			? theme.colors.dietGreenLight
			: theme.colors.notDietRedLight};
	border-radius: ${theme.borderRadius.md}px;
	padding: ${theme.spacing.md}px;
	align-items: center;
	margin-bottom: ${theme.spacing.lg}px;
`;

export const StatusText = styled.Text<{ isDiet: boolean }>`
	color: ${(props) =>
		props.isDiet ? theme.colors.dietGreen : theme.colors.notDietRed};
	font-weight: ${theme.fontWeight.bold};
	font-size: ${theme.fontSize.md}px;
`;

export const ButtonsContainer = styled.View`
	flex-direction: row;
	gap: ${theme.spacing.md}px;
	margin-top: ${theme.spacing.xl}px;
	padding-bottom: ${theme.spacing.lg}px;
`;

export const ActionButton = styled.View`
	flex: 1;
`;
