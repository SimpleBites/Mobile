import React, { useState } from "react"
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Pressable,
} from "react-native"
import { colors } from "../../utils/constants/Colors"
import RecipeOverview from "../../utils/components/recipes/single/RecipePageOverview"
import RecipeIngredients from "../../utils/components/recipes/single/RecipePageIngredients"
import RecipeSteps from "../../utils/components/recipes/single/RecipePageSteps"

const SingleRecipe = ({ route }) => {
	const { recipe } = route.params
	const [activeButton, setActiveButton] = useState("button1")

	const handlePress = (button) => {
		setActiveButton(button)
		console.log(button)
	}

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContent}>
			<View style={styles.container}>
				<View style={styles.componentContainer}>
					{/* Switch between the 3 screens on recipe */}
					<View style={styles.buttonContainer}>
						<Pressable
							onPress={() => handlePress("button1")}
							style={
								activeButton === "button1"
									? styles.activeButton
									: styles.inactiveButton
							}
						>
							<Text
								style={
									activeButton === "button1"
										? styles.activeButtonText
										: styles.inactiveButtonText
								}
							>
								Overview
							</Text>
						</Pressable>
						<Pressable
							onPress={() => handlePress("button2")}
							style={
								activeButton === "button2"
									? styles.activeButton
									: styles.inactiveButton
							}
						>
							<Text
								style={
									activeButton === "button2"
										? styles.activeButtonText
										: styles.inactiveButtonText
								}
							>
								Ingredients
							</Text>
						</Pressable>
						<Pressable
							onPress={() => handlePress("button3")}
							style={
								activeButton === "button3"
									? styles.activeButton
									: styles.inactiveButton
							}
						>
							<Text
								style={
									activeButton === "button3"
										? styles.activeButtonText
										: styles.inactiveButtonText
								}
							>
								Steps
							</Text>
						</Pressable>
					</View>
				</View>
				{activeButton === "button2" ? (
					<RecipeIngredients recipe={recipe} />
				) : activeButton === "button3" ? (
					<RecipeSteps recipe={recipe} />
				) : (
					<RecipeOverview recipe={recipe} />
				)}
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
	activeButton: {
		backgroundColor: colors.blue.gradient[0],
		borderRadius: 5,
		width: "30%",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	inactiveButton: {
		width: "30%",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	activeButtonText: {
		color: "white",
	},
	inactiveButtonText: {
		color: "black",
	},
	buttonContainer: {
		borderWidth: 1,
		borderColor: "#00000020",
		flexDirection: "row",
		width: "85%",
		justifyContent: "center",
		paddingVertical: 10,
		backgroundColor: "#EDEDED",
		borderRadius: 5,
		elevation: 5,
	},
})

export default SingleRecipe
