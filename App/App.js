import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./utils/navigation/AppNavigator"
import NavigationBarColor from "./utils/navigation/NavigationBarColor"

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationBarColor color="#304A76" />
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
})
