import React from "react"
import { Text, View, StyleSheet } from "react-native"

const Title = ({ mainText, subText, width }) => {
	return (
		<View style={[styles.container, { width }]}>
			<Text style={styles.mainText}>{mainText}</Text>
			<Text style={styles.subText}>{subText}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	mainText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "#333",
	},
	subText: {
		fontSize: 10,
		fontWeight: "bold",
		color: "#7FC7D9",
	},
})

export default Title
