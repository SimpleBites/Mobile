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
	borderRadiusSides = "all", // Default to applying border radius to all sides
	zIndex = 0, // Default zIndex
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

	const borderRadiusStyle = (() => {
		const sides = borderRadiusSides.split(",").map((side) => side.trim())
		const style = {}

		if (sides.includes("all")) {
			style.borderRadius = borderRadius
		} else {
			if (sides.includes("top")) {
				style.borderTopLeftRadius = borderRadius
				style.borderTopRightRadius = borderRadius
			}
			if (sides.includes("bottom")) {
				style.borderBottomLeftRadius = borderRadius
				style.borderBottomRightRadius = borderRadius
			}
			if (sides.includes("left")) {
				style.borderTopLeftRadius = borderRadius
				style.borderBottomLeftRadius = borderRadius
			}
			if (sides.includes("right")) {
				style.borderTopRightRadius = borderRadius
				style.borderBottomRightRadius = borderRadius
			}
		}

		return style
	})()

	return (
		<LinearGradient
			colors={colorVariants.gradient}
			start={gradientStartEnd.start}
			end={gradientStartEnd.end}
			style={[
				styles.gradientCard,
				borderRadiusStyle,
				{ width, height, zIndex },
			]}
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
