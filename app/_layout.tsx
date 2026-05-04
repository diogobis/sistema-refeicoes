import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";

import { RootNavigator } from "../src/navigation/RootNavigator";

export default function RootLayout() {
	return (
		<>
			<RootNavigator />
			<StatusBar style="auto" />
		</>
	);
}
