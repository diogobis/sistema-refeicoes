import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

interface ButtonContainerProps {
	variant?: "primary" | "secondary" | "danger";
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
	background-color: ${(props) => {
		switch (props.variant) {
			case "secondary":
				return theme.colors.gray300;
			case "danger":
				return theme.colors.notDietRed;
			default:
				return theme.colors.primary;
		}
	}};
	height: 48px;
	border-radius: ${theme.borderRadius.md}px;
	align-items: center;
	justify-content: center;
	margin-vertical: ${theme.spacing.sm}px;
`;

export const ButtonTitle = styled.Text<ButtonContainerProps>`
	color: ${(props) => {
		if (props.variant === "secondary") {
			return theme.colors.textPrimary;
		}
		return theme.colors.white;
	}};
	font-size: ${theme.fontSize.md}px;
	font-weight: ${theme.fontWeight.semibold};
`;
