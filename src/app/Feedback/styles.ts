import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${theme.colors.surface};
	justify-content: center;
	align-items: center;
	padding: ${theme.spacing.xl}px;
`;

export const Content = styled.View`
	align-items: center;
	background-color: ${theme.colors.surfaceElevated};
	padding: ${theme.spacing.xl}px;
	border-radius: ${theme.borderRadius.xxl}px;
	width: 100%;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.08;
	shadow-radius: 18px;
	elevation: 4;
`;

export const StatusIcon = styled.View<{ isDiet: boolean }>`
	width: 124px;
	height: 124px;
	border-radius: 62px;
	background-color: ${(props) =>
		props.isDiet
			? theme.colors.dietGreenLight
			: theme.colors.notDietRedLight};
	justify-content: center;
	align-items: center;
	margin-bottom: ${theme.spacing.xl}px;
	border-width: 1px;
	border-color: ${(props) =>
		props.isDiet
			? theme.colors.dietGreenSoft
			: theme.colors.notDietRedSoft};
`;

export const Title = styled.Text<{ isDiet: boolean }>`
	font-size: 24px;
	font-weight: ${theme.fontWeight.bold};
	color: ${(props) =>
		props.isDiet ? theme.colors.dietGreen : theme.colors.notDietRed};
	margin-bottom: ${theme.spacing.md}px;
	text-align: center;
	line-height: 30px;
`;

export const Message = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.xl}px;
	text-align: center;
	line-height: 24px;
	max-width: 280px;
`;

export const ButtonContainer = styled.View`
	width: 100%;
`;
