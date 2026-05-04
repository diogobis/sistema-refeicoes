import React from "react";
import { TextInputProps } from "react-native";
import { InputContainer, InputError, InputField, InputLabel } from "./styles";

interface CustomInputProps extends TextInputProps {
	label?: string;
	error?: string;
}

export function Input({ label, error, ...rest }: CustomInputProps) {
	return (
		<InputContainer>
			{label && <InputLabel>{label}</InputLabel>}
			<InputField placeholderTextColor="#CCCCCC" {...rest} />
			{error && <InputError>{error}</InputError>}
		</InputContainer>
	);
}
