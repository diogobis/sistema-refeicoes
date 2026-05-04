import { TextInput } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const InputContainer = styled.View`
	margin-vertical: ${theme.spacing.md}px;
`;

export const InputLabel = styled.Text`
	font-size: ${theme.fontSize.sm}px;
	color: ${theme.colors.textSecondary};
	margin-bottom: ${theme.spacing.xs}px;
	font-weight: ${theme.fontWeight.medium};
`;

export const InputField = styled(TextInput)`
	border: 1px solid ${theme.colors.gray300};
	border-radius: ${theme.borderRadius.md}px;
	padding-horizontal: ${theme.spacing.md}px;
	padding-vertical: ${theme.spacing.md}px;
	font-size: ${theme.fontSize.md}px;
	color: ${theme.colors.textPrimary};
`;

export const InputError = styled.Text`
	color: ${theme.colors.notDietRed};
	font-size: ${theme.fontSize.xs}px;
	margin-top: ${theme.spacing.xs}px;
	font-weight: ${theme.fontWeight.medium};
`;
