import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Title from "../../Title"
import RecipeIngredient from "./RecipeIngredient"

const RecipeIngredients = ({ recipe }) => {
	return (
		<View style={styles.container}>
			<View style={styles.componentContainer}>
				<View style={styles.titleContainer}>
					<Title mainText="Ingredients for:" width={"90%"} />
					<Text style={styles.recipeTitle}>{recipe.title}</Text>
				</View>
				<View style={styles.ingredientsContainer}>
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
					<RecipeIngredient width={"90%"} ingredientName={"Milk"} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	componentContainer: {
		marginBottom: 25,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	titleContainer: {
		marginTop: 10,
	},
	recipeTitle: {
		marginTop: 5,
		fontSize: 18,
		color: "black",
	},
	ingredientsContainer: {
		width: "100%",
		marginTop: 30,
		flexDirection: "column",
		gap: 20,
		alignItems: "center",
	},
})

export default RecipeIngredients
