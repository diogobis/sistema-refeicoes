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

export const Title = styled.Text`
	font-size: ${theme.fontSize.xl}px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.textPrimary};
	margin-bottom: ${theme.spacing.lg}px;
	text-align: center;
`;

export const StatsContainer = styled.View`
	margin-bottom: ${theme.spacing.xl}px;
`;

export const SummaryContainer = styled.View`
	background-color: ${theme.colors.gray100};
	border-radius: ${theme.borderRadius.md}px;
	padding: ${theme.spacing.lg}px;
	margin-bottom: ${theme.spacing.xl}px;
	align-items: center;
`;

export const SummaryLabel = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.sm}px;
`;

export const SummaryValue = styled.Text`
	font-size: 32px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.primary};
`;

export const DetailRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${theme.spacing.md}px 0;
	border-bottom-width: 1px;
	border-bottom-color: ${theme.colors.gray100};
`;

export const DetailLabel = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
`;

export const DetailValue = styled.Text`
	font-size: ${theme.fontSize.md}px;
	font-weight: ${theme.fontWeight.semibold};
	color: ${theme.colors.textPrimary};
`;

export const ButtonContainer = styled.View`
	margin-top: ${theme.spacing.lg}px;
	padding-bottom: ${theme.spacing.lg}px;
`;

export const EmptyText = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	text-align: center;
	padding: ${theme.spacing.lg}px;
`;
