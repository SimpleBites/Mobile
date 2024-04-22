import React from "react"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { recipes } from "../../constants/DummyData"

const RecipeGallery = ({ width, mode }) => {
	const navigation = useNavigation()

	const handlePress = (recipe) => {
		navigation.navigate("SingleRecipe", { recipe })
	}

	const renderRecipes = () => {
		const selectedRecipes =
			mode === "scroll"
				? recipes.slice(0, 3)
				: mode === "grid"
				? recipes.slice(0, 6)
				: []

		return (
			<View
				style={[
					mode === "scroll" ? styles.rowContainer : styles.gridContainer,
					{ width },
				]}
			>
				{selectedRecipes.map((recipe, index) => (
					<TouchableOpacity
						key={index}
						style={
							mode === "scroll"
								? styles.recipeContainer
								: styles.gridRecipeContainer
						}
						onPress={() => handlePress(recipe)}
						activeOpacity={0.7}
					>
						<Image source={recipe.image} style={styles.image} />
					</TouchableOpacity>
				))}
			</View>
		)
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
	recipeContainer: {
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.2)",
	},
	gridContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginBottom: -10,
	},

	gridRecipeContainer: {
		borderRadius: 10,
		marginBottom: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.2)",
	},
})

export default RecipeGallery
