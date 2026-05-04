import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTitle } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	variant?: "primary" | "secondary" | "danger";
}

export function Button({ title, variant = "primary", ...rest }: ButtonProps) {
	return (
		<ButtonContainer variant={variant} {...rest}>
			<ButtonTitle variant={variant}>{title}</ButtonTitle>
		</ButtonContainer>
	);
}
