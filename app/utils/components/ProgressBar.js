// ProgressBar.js

import React from "react"
import { View, StyleSheet } from "react-native"
import { colors } from "../constants/Colors"

const ProgressBar = ({ color, currentValue, maxValue }) => {
	const progress = (currentValue / maxValue) * 100
	const colorVariants = colors[color] || colors["pink"] // Default to pink if color is not found

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: colorVariants.progressbar[1] },
			]}
		>
			<View
				style={[
					styles.progressBar,
					{
						backgroundColor: colorVariants.progressbar[0],
						width: `${progress}%`,
					},
				]}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 10,
		borderRadius: 3,
	},
	progressBar: {
		height: "100%",
		borderRadius: 3,
	},
})

export default ProgressBar
