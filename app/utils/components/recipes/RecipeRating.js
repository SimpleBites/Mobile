import React from "react"
import { View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const RecipeRating = ({ stars }) => {
	const roundedStars = Math.round(stars * 2) / 2
	const renderStars = () => {
		const starArray = []
		const fullStars = Math.floor(roundedStars)
		const hasHalfStar = roundedStars % 1 !== 0

		for (let i = 0; i < fullStars; i++) {
			starArray.push(<Ionicons key={i} name="star" size={18} color="yellow" />)
		}

		if (hasHalfStar) {
			starArray.push(
				<Ionicons
					key="half"
					name="star-half-outline"
					size={18}
					color="yellow"
				/>
			)
		}

		for (let i = starArray.length; i < 5; i++) {
			starArray.push(
				<Ionicons key={i} name="star-outline" size={18} color="lightgray" />
			)
		}

		return starArray
	}

	return <View style={styles.container}>{renderStars()}</View>
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
})

export default RecipeRating
