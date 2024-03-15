import React from "react"
import { LinearGradient } from "expo-linear-gradient"

export const GradientCard = ({
	width,
	height,
	borderRadius,
	type,
	children,
}) => {
	// Define gradient colors based on the type prop
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
		<LinearGradient
			colors={colors}
			start={{ x: 0, y: 0.5 }}
			end={{ x: 0.8, y: 0.5 }}
			style={{ width, height, borderRadius }}
		>
			{children}
		</LinearGradient>
	)
}
