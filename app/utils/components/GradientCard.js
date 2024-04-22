import React, { useMemo } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "../constants/Colors"
import { StyleSheet, TouchableWithoutFeedback } from "react-native"

/**
 * A custom gradient card component.
 * @date 4/11/2024 - 2:26:39 PM
 *
 * @module GradientCard
 * @param {number} width - The width of the card.
 * @param {number} height - The height of the card.
 * @param {string} color - The color variant of the gradient.
 * @param {string} [direction="left-to-right"] - The direction of the gradient (either "left-to-right" or "right-to-left").
 * @param {number} borderRadius - The border radius of the card.
 * @param {string} [borderRadiusSides="all"] - The sides to apply border radius to (comma-separated values: "all", "top", "bottom", "left", "right").
 * @param {number} [zIndex=0] - The z-index of the card.
 * @param {Function} [onPress] - The onPress event handler.
 * @param {React.ReactNode} children - The content of the card.
 *
 * @returns {React.ReactNode} A pressable gradient card component.
 */

export const GradientCard = ({
	width,
	height,
	color,
	direction = "left-to-right",
	borderRadius,
	borderRadiusSides = "all",
	zIndex = 0,
	onPress,
	children,
}) => {
	const colorVariants = useMemo(() => {
		const defaultColor = colors["blue"]
		return colors[color] || defaultColor
	}, [color])

	const gradientStartEnd = useMemo(() => {
		return direction === "right-to-left"
			? { start: { x: 0.8, y: 0.5 }, end: { x: 0, y: 0.5 } }
			: { start: { x: 0, y: 0.5 }, end: { x: 0.8, y: 0.5 } }
	}, [direction])

	const borderRadiusStyle = useMemo(() => {
		const sides = borderRadiusSides.split(",").map((side) => side.trim())
		return borderRadiusSides === "all"
			? { borderRadius }
			: {
					borderTopLeftRadius: sides.includes("top") ? borderRadius : 0,
					borderTopRightRadius: sides.includes("top") ? borderRadius : 0,
					borderBottomLeftRadius: sides.includes("bottom") ? borderRadius : 0,
					borderBottomRightRadius: sides.includes("bottom") ? borderRadius : 0,
			  }
	}, [borderRadius, borderRadiusSides])

	return (
		<TouchableWithoutFeedback onPress={onPress}>
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
		</TouchableWithoutFeedback>
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
