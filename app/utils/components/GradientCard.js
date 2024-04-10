import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "../constants/Colors"
import { StyleSheet } from "react-native"

export const GradientCard = ({
	width,
	height,
	borderRadius,
	color,
	children,
	direction = "left-to-right", // Default direction
}) => {
	const colorVariants = colors[color] || colors["blue"]

	const gradientStartEnd = {
		start: { x: 0, y: 0.5 },
		end: { x: 0.8, y: 0.5 },
	}

	if (direction === "right-to-left") {
		gradientStartEnd.start = { x: 0.8, y: 0.5 }
		gradientStartEnd.end = { x: 0, y: 0.5 }
	}

	return (
		<LinearGradient
			colors={colorVariants.gradient}
			start={gradientStartEnd.start}
			end={gradientStartEnd.end}
			style={[styles.gradientCard, { width, height, borderRadius }]}
		>
			{children}
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	gradientCard: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
})

export default GradientCard
