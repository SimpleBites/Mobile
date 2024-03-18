import React from "react"
import { View, StyleSheet } from "react-native"

const ProgressBar = ({ type, currentValue, maxValue }) => {
	// Calculate the percentage of progress
	const progress = (currentValue / maxValue) * 100

	// Define colors based on type
	let colors
	switch (type) {
		case "lightBlue":
			colors = ["#7FC7D9", "#5578B3"]
			break
		case "pink":
			colors = ["#F78181", "#F5A9BC"]
			break
		case "green":
			colors = ["#6B8E23", "#556B2F"]
			break
		case "purple":
			colors = ["#9370DB", "#663399"]
			break
		case "orange":
			colors = ["#FFA07A", "#FF6347"]
			break
		case "teal":
			colors = ["#40E0D0", "#20B2AA"]
			break
		case "yellow":
			colors = ["#FFFF00", "#FFD700"]
			break
		case "red":
			colors = ["#FF0000", "#CD5C5C"]
			break
		case "blue":
			colors = ["#ADD8E6", "#87CEFA"]
			break
		case "black":
			colors = ["#000000", "#000000"]
			break
		default:
			colors = ["#7FC7D9", "#5578B3"] // Default to lightBlue
	}

	return (
		<View style={[styles.container, { backgroundColor: colors[0] }]}>
			<View
				style={[
					styles.progressBar,
					{ backgroundColor: colors[1], width: `${progress}%` },
				]}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 15, // Increased height for better visibility
		borderRadius: 3,
	},
	progressBar: {
		height: "100%",
		borderRadius: 5,
	},
})

export default ProgressBar
