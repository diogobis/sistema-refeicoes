import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${theme.colors.white};
	justify-content: center;
	align-items: center;
	padding: ${theme.spacing.xl}px;
`;

export const Content = styled.View`
	align-items: center;
`;

export const StatusIcon = styled.View<{ isDiet: boolean }>`
	width: 120px;
	height: 120px;
	border-radius: 60px;
	background-color: ${(props) =>
		props.isDiet
			? theme.colors.dietGreenLight
			: theme.colors.notDietRedLight};
	justify-content: center;
	align-items: center;
	margin-bottom: ${theme.spacing.xl}px;
`;

export const Title = styled.Text<{ isDiet: boolean }>`
	font-size: 24px;
	font-weight: ${theme.fontWeight.bold};
	color: ${(props) =>
		props.isDiet ? theme.colors.dietGreen : theme.colors.notDietRed};
	margin-bottom: ${theme.spacing.md}px;
	text-align: center;
`;

export const Message = styled.Text`
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.xl}px;
	text-align: center;
	line-height: 24px;
`;

export const ButtonContainer = styled.View`
	width: 100%;
`;
