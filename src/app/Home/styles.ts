import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${theme.colors.surface};
`;

export const Hero = styled.View`
	background-color: ${theme.colors.primary};
	padding: ${theme.spacing.xl}px ${theme.spacing.lg}px ${theme.spacing.xl}px;
	border-bottom-left-radius: ${theme.borderRadius.xxl}px;
	border-bottom-right-radius: ${theme.borderRadius.xxl}px;
`;

export const HeroEyebrow = styled.Text`
	color: ${theme.colors.primaryForeground};
	font-size: ${theme.fontSize.sm}px;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: ${theme.spacing.sm}px;
`;

export const HeroTitle = styled.Text`
	font-size: 30px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.primaryForeground};
	line-height: 36px;
	max-width: 250px;
`;

export const HeroSubtitle = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.primaryForeground};
	opacity: 0.88;
	margin-top: ${theme.spacing.sm}px;
	line-height: 22px;
`;

export const HeroStatsRow = styled.View`
	flex-direction: row;
	gap: ${theme.spacing.md}px;
	margin-top: ${theme.spacing.xl}px;
`;

export const HeroStatCard = styled.View`
	flex: 1;
	background-color: rgba(255, 255, 255, 0.12);
	border-width: 1px;
	border-color: rgba(255, 255, 255, 0.16);
	border-radius: ${theme.borderRadius.lg}px;
	padding: ${theme.spacing.md}px;
`;

export const HeroStatValue = styled.Text`
	color: ${theme.colors.primaryForeground};
	font-size: 24px;
	font-weight: ${theme.fontWeight.bold};
`;

export const HeroStatLabel = styled.Text`
	color: ${theme.colors.primaryForeground};
	opacity: 0.82;
	font-size: ${theme.fontSize.xs}px;
	margin-top: 2px;
	text-transform: uppercase;
	letter-spacing: 0.6px;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${theme.spacing.lg}px ${theme.spacing.lg}px 0;
`;

export const HeaderTitle = styled.Text`
	font-size: ${theme.fontSize.xl}px;
	font-weight: ${theme.fontWeight.bold};
	color: ${theme.colors.textPrimary};
`;

export const ListContainer = styled.View`
	flex: 1;
`;

export const EmptyContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: ${theme.spacing.lg}px;
`;

export const EmptyText = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	text-align: center;
`;

export const SectionHeaderContainer = styled.View`
	background-color: transparent;
	padding: ${theme.spacing.md}px ${theme.spacing.lg}px ${theme.spacing.xs}px;
	margin-top: ${theme.spacing.md}px;
`;

export const SectionHeaderText = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	font-weight: ${theme.fontWeight.semibold};
	color: ${theme.colors.textMuted};
	text-transform: uppercase;
	letter-spacing: 0.8px;
`;

export const FAB = styled.TouchableOpacity`
	position: absolute;
	bottom: ${theme.spacing.lg}px;
	right: ${theme.spacing.lg}px;
	width: 56px;
	height: 56px;
	border-radius: 28px;
	background-color: ${theme.colors.primary};
	justify-content: center;
	align-items: center;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.08;
	shadow-radius: 18px;
	elevation: 4;
`;

export const StatsButtonContainer = styled.View`
	padding: 0 ${theme.spacing.lg}px ${theme.spacing.md}px;
`;
