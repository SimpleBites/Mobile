import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import RecipeCard from "../../utils/components/recipes/RecipeCard"

const RecipesMain = () => {
	return (
		<ScrollView contentContainerStyle={styles.scrollViewContent}>
			<View style={styles.container}>
				<View style={styles.componentContainer}>
					<RecipeCard></RecipeCard>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollViewContent: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
		marginTop: 25,
		alignItems: "center",
	},
	componentContainer: {
		marginBottom: 25,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default RecipesMain
