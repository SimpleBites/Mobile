import React from "react"
import { View, StyleSheet, Text, ScrollView, Image } from "react-native"
import GradientCard from "../GradientCard"
import { images } from "../../constants/Images"

const RecipeCard = () => {
	return (
		<View style={styles.container}>
			<GradientCard
				width={"90%"}
				height={80}
				borderRadius={0}
				color={"lightred"}
				direction={"right-to-left"}
			>
				<View style={styles.topInfoContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.recipeTitle}>
							Hello guys this is my recipe !!!! I hope you like it :):):):):)
						</Text>
					</View>
				</View>
			</GradientCard>
			<GradientCard
				width={"90%"}
				height={100}
				borderRadius={0}
				color={"red"}
				direction={"right-to-left"}
			>
				<View style={styles.bottomInfoContainer}>
					<View style={styles.bottomInfoLeftContainer}>
						<Text style={styles.recipeRating}>FIVE STAR</Text>
					</View>
					<View style={styles.bottomInfoRightContainer}>
						<View style={styles.gridRow}>
							<Text style={styles.gridItem}>OneTag, TwoTag</Text>
							<Text style={styles.gridItem}>15-30 min</Text>
						</View>
						<View style={styles.gridRow}>
							<Text style={styles.gridItem}>ISAHPASSMAN</Text>
							<Text style={styles.gridItem}>12 steps</Text>
						</View>
					</View>
				</View>
			</GradientCard>
			<View style={styles.imageContainer}>
				<Image source={images.placeholderImage} style={styles.image}></Image>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 25,
		alignItems: "center",
		width: "100%",
		borderRadius: 5,
	},
	imageContainer: {
		borderRadius: 5,
		width: "90%",
		position: "absolute",
	},
	image: {
		width: "35%",
		height: 120,
	},

	topInfoContainer: {
		flex: 1,
		alignItems: "flex-end",
	},
	titleContainer: {
		flex: 1,
		width: "65%",
		alignItems: "left",
		justifyContent: "center",
		borderRadius: 5,
		padding: 10,
	},
	recipeTitle: {
		fontSize: 13,
		fontWeight: "bold",
		color: "white",
	},
	bottomInfoContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	bottomInfoLeftContainer: {
		height: "80%",
		width: "35%",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	bottomInfoRightContainer: {
		width: "65%",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	gridRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
	},
	gridItem: {
		color: "white",
		fontSize: 12,
	},
	recipeRating: {
		color: "white",
		padding: 10,
	},
})

export default RecipeCard
