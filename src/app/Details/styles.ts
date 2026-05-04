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

export const HeaderCard = styled.View`
	background-color: ${theme.colors.primary};
	padding: ${theme.spacing.xl}px;
	border-radius: ${theme.borderRadius.xxl}px;
	margin-bottom: ${theme.spacing.xl}px;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.08;
	shadow-radius: 18px;
	elevation: 4;
`;

export const HeaderTitle = styled.Text`
	font-size: 13px;
	font-weight: ${theme.fontWeight.semibold};
	color: ${theme.colors.primaryForeground};
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: ${theme.spacing.sm}px;
`;

export const HeaderName = styled.Text`
	font-size: 28px;
	line-height: 34px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.primaryForeground};
`;

export const HeaderMeta = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.primaryForeground};
	opacity: 0.9;
	margin-top: ${theme.spacing.sm}px;
`;

export const DetailRow = styled.View`
	margin-bottom: ${theme.spacing.md}px;
	background-color: ${theme.colors.surfaceElevated};
	border-radius: ${theme.borderRadius.xl}px;
	padding: ${theme.spacing.lg}px;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.06;
	shadow-radius: 18px;
	elevation: 3;
`;

export const DetailLabel = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.sm}px;
	font-weight: ${theme.fontWeight.medium};
	text-transform: uppercase;
	letter-spacing: 0.8px;
`;

export const DetailValue = styled.Text`
	font-size: ${theme.fontSize.lg}px;
	color: ${theme.colors.textPrimary};
	font-weight: ${theme.fontWeight.semibold};
	line-height: 24px;
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
	border-radius: ${theme.borderRadius.xl}px;
	padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
	align-items: center;
	margin-bottom: ${theme.spacing.lg}px;
	border-width: 1px;
	border-color: ${(props) =>
		props.isDiet
			? theme.colors.dietGreenSoft
			: theme.colors.notDietRedSoft};
`;

export const StatusText = styled.Text<{ isDiet: boolean }>`
	color: ${(props) =>
		props.isDiet ? theme.colors.dietGreen : theme.colors.notDietRed};
	font-weight: ${theme.fontWeight.bold};
	font-size: ${theme.fontSize.md}px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
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
