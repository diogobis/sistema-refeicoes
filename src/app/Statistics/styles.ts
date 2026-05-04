import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${theme.colors.surface};
`;

export const Content = styled.ScrollView`
	flex: 1;
	padding: ${theme.spacing.lg}px;
`;

export const Title = styled.Text`
	font-size: 28px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.textPrimary};
	margin-bottom: ${theme.spacing.sm}px;
	line-height: 34px;
`;

export const Subtitle = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.xl}px;
	line-height: 22px;
`;

export const TopCard = styled.View`
	background-color: ${theme.colors.primary};
	padding: ${theme.spacing.xl}px;
	border-radius: ${theme.borderRadius.xxl}px;
	margin-bottom: ${theme.spacing.lg}px;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.08;
	shadow-radius: 18px;
	elevation: 4;
`;

export const TopCardLabel = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${theme.colors.primaryForeground};
	margin-bottom: ${theme.spacing.xs}px;
`;

export const TopCardValue = styled.Text`
	font-size: 40px;
	line-height: 44px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.primaryForeground};
`;

export const TopCardText = styled.Text`
	margin-top: ${theme.spacing.sm}px;
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.primaryForeground};
	opacity: 0.9;
	line-height: 22px;
`;

export const StatsContainer = styled.View`
	margin-bottom: ${theme.spacing.xl}px;
	gap: ${theme.spacing.sm}px;
`;

export const SummaryContainer = styled.View`
	background-color: ${theme.colors.surfaceElevated};
	border-radius: ${theme.borderRadius.xl}px;
	padding: ${theme.spacing.lg}px;
	margin-bottom: ${theme.spacing.lg}px;
	align-items: center;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.06;
	shadow-radius: 18px;
	elevation: 3;
`;

export const SummaryLabel = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.sm}px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
`;

export const SummaryValue = styled.Text`
	font-size: 32px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.primary};
	line-height: 38px;
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
	line-height: 22px;
`;
