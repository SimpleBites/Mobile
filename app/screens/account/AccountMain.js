import React from "react"
import { View, Text, StyleSheet } from "react-native"

const AccountMain = () => {
	return (
		<View style={styles.container}>
			<Text>Account Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
})

export default AccountMain
