import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import GradientCard from "../../GradientCard"
import { Ionicons } from "@expo/vector-icons"
import RecipeRating from "../RecipeRating"

const RecipeThumbnail = ({ recipe }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={recipe.image} />
			</View>
			<GradientCard
				height={80}
				width={"90%"}
				borderRadius={5}
				borderRadiusSides={"bottom"}
			>
				<View style={styles.cardContent}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>{recipe.title}</Text>
					</View>
					<View style={styles.descriptionContainer}>
						<View style={styles.gridItemContainer}>
							<Ionicons name="bookmark-outline" size={22} color="white" />
							<Text style={styles.gridItem}>OneTag</Text>
						</View>
						<View style={styles.numbersContainer}>
							<View style={styles.gridItemContainer}>
								<RecipeRating stars={recipe.average_score} />
							</View>
							<View style={styles.gridItemContainer}>
								<Ionicons name="chatbubble-outline" size={22} color="white" />
								<Text style={styles.gridItem}>4,029</Text>
							</View>
						</View>
					</View>
				</View>
			</GradientCard>
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
	imageContainer: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		width: "90%",
		height: 250,
		elevation: 5,
		marginBottom: -1,
		zIndex: 2,
	},
	image: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
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
	gridItem: {
		marginLeft: 5,
		color: "white",
	},
	gridItemContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
})

export default RecipeThumbnail
