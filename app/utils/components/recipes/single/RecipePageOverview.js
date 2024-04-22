import React from "react"
import { View, Text, StyleSheet } from "react-native"
import GradientCard from "../../GradientCard"
import ProfileInfo from "../../profile/ProfileInfo"
import { Ionicons } from "@expo/vector-icons"
import RecipeThumbnail from "./RecipeThumbnail"
import Title from "../../Title"

const RecipeOverview = ({ recipe }) => {
	return (
		<View style={styles.container}>
			<View style={styles.componentContainer}>
				<View style={styles.componentContainer}>
					<RecipeThumbnail recipe={recipe} />
				</View>
				<View style={styles.componentContainer}>
					<Title mainText="Overview" width={"85%"} />
					<View style={styles.overviewContainer}>
						<Text>{recipe.description}</Text>
					</View>
					<GradientCard
						height={80}
						width={"85%"}
						borderRadius={5}
						borderRadiusSides={"bottom"}
					>
						<View style={styles.authorInfoContainer}>
							<View style={styles.authorInfo}>
								<ProfileInfo
									pictureWidth={50}
									pictureHeight={50}
									name="ISAHPASSMAN"
									nameFontSize={16}
									title="Adept Chef"
									titleFontSize={14}
								/>
							</View>
							<View style={styles.recipeInfo}>
								<View style={styles.gridItemContainer}>
									<Ionicons name="time-outline" size={22} color="white" />
									<Text style={styles.gridItem}>15-30 min</Text>
								</View>
								<View style={styles.gridItemContainer}>
									<Ionicons name="checkbox-outline" size={22} color="white" />
									<Text style={styles.gridItem}>12 steps</Text>
								</View>
							</View>
						</View>
					</GradientCard>
				</View>
				{/* UNFINISHED
				<View style={styles.componentContainer}>
					<Title mainText="Comments" width={"85%"} />
					<GradientCard
						height={80}
						width={"85%"}
						borderRadius={5}
						borderRadiusSides={"bottom"}
					/>
				</View>
	*/}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	recipeInfo: {
		width: "35%",
		justifyContent: "center",
		flexDirection: "column",
		gap: 10,
	},
	authorInfo: {
		width: "65%",
		justifyContent: "center",
		paddingLeft: 10,
	},
	authorInfoContainer: {
		flex: 1,
		flexDirection: "row",
	},
	overviewContainer: {
		backgroundColor: "white",
		width: "85%",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 10,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: "#00000020",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		elevation: 5,
		zIndex: 2,
	},
	gridItemContainer: {
		flexDirection: "row",
		alignItems: "center",
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
	cardContent: {
		alignItems: "center",
		height: "100%",
	},
	titleContainer: {
		height: "60%",
		width: "100%",
		justifyContent: "center",
	},
	descriptionContainer: {
		height: "30%",
		width: "90%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	numbersContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 15,
		alignItems: "center",
	},
	title: {
		fontSize: 18,

		color: "white",
		marginLeft: 10,
	},
	description: {
		fontSize: 14,
		color: "white",
		textAlign: "center",
	},
	number: {
		fontSize: 16,

		color: "white",
	},
	gridItem: {
		marginLeft: 5,
		color: "white",
	},
})

export default RecipeOverview
