import React from "react";
import { Modal } from "react-native";
import {
    DialOverlay,
    DialogButton,
    DialogButtonText,
    DialogButtonsContainer,
    DialogContainer,
    DialogMessage,
    DialogTitle,
} from "./styles";

interface ConfirmDialogProps {
	visible: boolean;
	title: string;
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
	confirmText?: string;
	cancelText?: string;
	isDangerous?: boolean;
}

export function ConfirmDialog({
	visible,
	title,
	message,
	onConfirm,
	onCancel,
	confirmText = "Confirmar",
	cancelText = "Cancelar",
	isDangerous = false,
}: ConfirmDialogProps) {
	return (
		<Modal visible={visible} transparent animationType="fade">
			<DialOverlay>
				<DialogContainer>
					<DialogTitle>{title}</DialogTitle>
					<DialogMessage>{message}</DialogMessage>
					<DialogButtonsContainer>
						<DialogButton onPress={onCancel}>
							<DialogButtonText>{cancelText}</DialogButtonText>
						</DialogButton>
						<DialogButton
							variant={isDangerous ? "danger" : "primary"}
							onPress={onConfirm}
						>
							<DialogButtonText>{confirmText}</DialogButtonText>
						</DialogButton>
					</DialogButtonsContainer>
				</DialogContainer>
			</DialOverlay>
		</Modal>
	);
}
