import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AlertCircle, CheckCircle2 } from "lucide-react-native";
import React from "react";
import { Button } from "../../components/Button";
import { theme } from "../../constants/theme";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { DietStatus } from "../../types/DietStatus";
import {
    ButtonContainer,
    Container,
    Content,
    Message,
    StatusIcon,
    Title,
} from "./styles";

type FeedbackScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"Feedback"
>;

export function Feedback({ navigation, route }: FeedbackScreenProps) {
	const { isDiet } = route.params;
	const isWithinDiet = isDiet === DietStatus.WITHIN_DIET;

	const handleBackHome = () => {
		navigation.navigate("Home");
	};

	return (
		<Container>
			<Content>
				<StatusIcon isDiet={isWithinDiet}>
					{isWithinDiet ? (
						<CheckCircle2
							size={60}
							color={theme.colors.dietGreen}
							strokeWidth={1.5}
						/>
					) : (
						<AlertCircle
							size={60}
							color={theme.colors.notDietRed}
							strokeWidth={1.5}
						/>
					)}
				</StatusIcon>

				<Title isDiet={isWithinDiet}>
					{isWithinDiet ? "Parabéns!" : "Opa, não vai dar!"}
				</Title>

				<Message>
					{isWithinDiet
						? "Sua refeição está de acordo com a sua dieta!"
						: "Você saiu da sua dieta desta vez, mas continue se esforçando!"}
				</Message>

				<ButtonContainer>
					<Button title="Voltar ao Início" onPress={handleBackHome} />
				</ButtonContainer>
			</Content>
		</Container>
	);
}
