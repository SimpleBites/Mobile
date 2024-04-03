import React from "react"
import { View, ScrollView, StyleSheet, Text, Image } from "react-native"
import { recipes } from "../../constants/DummyData"

const RecipeGallery = ({ width, mode }) => {
	const renderRecipes = () => {
		if (mode === "scroll") {
			return (
				<ScrollView horizontal contentContainerStyle={styles.container}>
					{recipes.map((recipe, index) => (
						<View
							key={index}
							style={[
								styles.recipeContainer,
								index !== 0 && styles.recipeMargin,
							]}
						>
							<Image source={recipe.image} style={styles.image} />
						</View>
					))}
				</ScrollView>
			)
		} else if (mode === "grid") {
			const gridRecipes = recipes.slice(0, 6) // Display only 6 recipes
			return (
				<View style={styles.gridContainer}>
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

	return <View style={{ width }}>{renderRecipes()}</View>
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	recipeContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	recipeMargin: {
		marginLeft: 10,
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
