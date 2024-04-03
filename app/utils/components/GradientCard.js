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
}) => {
	const colorVariants = colors[color] || colors["blue"]

	return (
		<LinearGradient
			colors={colorVariants.gradient}
			start={{ x: 0, y: 0.5 }}
			end={{ x: 0.8, y: 0.5 }}
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
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
})

export default GradientCard
