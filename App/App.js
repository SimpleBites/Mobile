import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import AppNavigator from "./utils/navigation/AppNavigator"

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, // Ensure the container takes up the full height
		backgroundColor: "#fff",
	},
})
