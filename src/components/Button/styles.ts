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
				return theme.colors.gray100;
			case "danger":
				return theme.colors.notDietRed;
			default:
				return theme.colors.primary;
		}
	}};
	height: 52px;
	border-radius: ${theme.borderRadius.lg}px;
	align-items: center;
	justify-content: center;
	margin-vertical: ${theme.spacing.sm}px;
	padding-horizontal: ${theme.spacing.lg}px;
	shadow-color: #1e2430;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.08;
	shadow-radius: 18px;
	elevation: 4;
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
	letter-spacing: 0.2px;
`;
