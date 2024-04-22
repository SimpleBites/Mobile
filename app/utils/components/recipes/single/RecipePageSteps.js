import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import Title from "../../Title"
import GradientCard from "../../GradientCard"
import { Ionicons } from "@expo/vector-icons"
import RecipeStep from "./RecipeStep"

const RecipeSteps = ({ recipe }) => {
	const [checked, setChecked] = useState(false)

	const toggleCheckbox = () => {
		setChecked(!checked)
	}

	return (
		<View style={styles.container}>
			<View style={styles.componentContainer}>
				<View style={styles.titleContainer}>
					<Title mainText="Steps for:" width={"90%"} />
					<Text style={styles.recipeTitle}>{recipe.title}</Text>
				</View>
			</View>
			<View style={styles.componentContainer}>
				<Title mainText="Current step" width={"90%"} />
				<GradientCard
					color={"lightgreen"}
					borderRadius={5}
					borderRadiusSides={"top"}
					zIndex={2}
				>
					<View style={styles.currentStepContainer}>
						<Text style={styles.stepText}>
							Step <Text style={styles.stepNumber}>2</Text>
							<Text style={styles.totalSteps}>/9</Text>
						</Text>
						<Text style={styles.stepDescription}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</Text>
					</View>
				</GradientCard>
				<View style={styles.checkBoxContainer}>
					<GradientCard
						width={"90%"}
						height={60}
						color={"lightgreen"}
						borderRadius={5}
						borderRadiusSides={"bottom"}
					>
						<View style={styles.completeContainer}>
							<Pressable onPress={toggleCheckbox}>
								<View style={[styles.complete]}>
									<Text style={styles.completeText}>
										Mark this step as complete
									</Text>
									{checked ? (
										<Ionicons name="checkbox-outline" size={38} color="white" />
									) : (
										<Ionicons name="square-outline" size={38} color="white" />
									)}
								</View>
							</Pressable>
						</View>
					</GradientCard>
				</View>
			</View>
			<View style={styles.componentContainer}>
				<Title mainText="All steps" width={"90%"} />
				<RecipeStep
					stepNumber={1}
					stepDescription={
						"uhabasdbadbadhjabdshsvdvhashvdsjhavdhasvdhasvdhasvdhasvjdvsadvadvjhagdiusdfhiusdgfuagsiudiuashdi"
					}
					width={"90%"}
				></RecipeStep>
				<RecipeStep
					stepNumber={2}
					stepDescription={
						"uhabasdbadbadhjabdshsvdvhashvdsjhavdhasvdhasvdhasvdhasvjdvsadvadvjhagdiusdfhiusdgfuagsiudiuashdi"
					}
					width={"90%"}
				></RecipeStep>
				<RecipeStep
					stepNumber={3}
					stepDescription={
						"uhabasdbadbadhjabdshsvdvhashvdsjhavdhasvdhasvdhasvdhasvjdvsadvadvjhagdiusdfhiusdgfuagsiudiuashdi"
					}
					width={"90%"}
				></RecipeStep>
				<RecipeStep
					stepNumber={4}
					stepDescription={
						"uhabasdbadbadhjabdshsvdvhashvdsjhavdhasvdhasvdhasvdhasvjdvsadvadvjhagdiusdfhiusdgfuagsiudiuashdi"
					}
					width={"90%"}
				></RecipeStep>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	complete: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
	},
	completeText: {
		fontSize: 20,
		color: "white",
		fontWeight: "500",
	},
	completeContainer: {
		flex: 1,
		justifyContent: "center",
	},
	checkBoxContainer: {
		width: "100%",
		alignItems: "center",
		marginTop: -1,
	},
	stepDescription: {
		color: "white",
	},
	currentStepContainer: {
		width: "90%",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 10,
		zIndex: 2,
	},
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

	stepText: {
		fontSize: 20,
		marginBottom: 5,
		fontWeight: "500",
		color: "#FFFFFF",
	},
	stepNumber: {},
	totalSteps: {
		color: "#00000070",
		fontWeight: "bold",
	},
})

export default RecipeSteps
