import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${theme.colors.white};
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${theme.spacing.lg}px;
	border-bottom-width: 1px;
	border-bottom-color: ${theme.colors.gray100};
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
	background-color: ${theme.colors.gray100};
	padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
	margin-top: ${theme.spacing.md}px;
`;

export const SectionHeaderText = styled.Text`
	font-size: ${theme.fontSize.md}px;
	font-weight: ${theme.fontWeight.semibold};
	color: ${theme.colors.textSecondary};
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
	shadow-color: #000;
	shadow-offset: 0px 2px;
	shadow-opacity: 0.25;
	shadow-radius: 3.84px;
	elevation: 5;
`;

export const StatsButtonContainer = styled.View`
	padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
`;
