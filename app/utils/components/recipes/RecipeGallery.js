import React from "react"
import { View, StyleSheet, Image } from "react-native"
import { recipes } from "../../constants/DummyData"

const RecipeGallery = ({ width, mode }) => {
	const renderRecipes = () => {
		if (mode === "scroll") {
			const scrollRecipes = recipes.slice(0, 3)
			return (
				<View style={[styles.rowContainer, { width }]}>
					{scrollRecipes.map((recipe, index) => (
						<View key={index} style={styles.recipeContainer}>
							<Image source={recipe.image} style={styles.image} />
						</View>
					))}
				</View>
			)
		} else if (mode === "grid") {
			const gridRecipes = recipes.slice(0, 6)
			return (
				<View style={[styles.gridContainer, { width }]}>
					{gridRecipes.map((recipe, index) => (
						<View key={index} style={styles.gridRecipeContainer}>
							<Image source={recipe.image} style={styles.image} />
						</View>
					))}
				</View>
			)
		} else {
			return null
		}
	}

	return <View>{renderRecipes()}</View>
}

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	image: {
		height: 100,
		width: 100,
		borderRadius: 10,
	},
	gridContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	gridRecipeContainer: {
		marginBottom: 10,
	},
})

export default RecipeGallery
