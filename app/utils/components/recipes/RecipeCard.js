import React from "react"
import { View, StyleSheet, Text, ScrollView, Image } from "react-native"
import GradientCard from "../GradientCard"
import { images } from "../../constants/Images"
import { Ionicons, FontAwesome } from "@expo/vector-icons"

const RecipeCard = () => {
	return (
		<View style={styles.container}>
			<GradientCard
				width={"90%"}
				height={80}
				borderRadius={5}
				color={"lightblue"}
				direction={"right-to-left"}
				borderRadiusSides={"top"}
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
				height={80}
				borderRadius={5}
				color={"blue"}
				direction={"right-to-left"}
				borderRadiusSides={"bottom"}
			>
				<View style={styles.bottomInfoContainer}>
					<View style={styles.bottomInfoLeftContainer}>
						<Text style={styles.recipeRating}>FIVE STAR</Text>
					</View>
					<View style={styles.bottomInfoRightContainer}>
						<View style={styles.gridRowLeft}>
							<View style={styles.gridTopItemContainer}>
								<Ionicons name="bookmark-outline" size={22} color="white" />
								<Text style={styles.gridItem}>OneTag, TwoTag</Text>
							</View>
							<View style={styles.gridItemContainer}>
								<Ionicons name="person-outline" size={22} color="white" />
								<Text style={styles.gridItem}>isahpassman</Text>
							</View>
						</View>
						<View style={styles.gridRowRight}>
							<View style={styles.gridTopItemContainer}>
								<Ionicons name="time-outline" size={22} color="white" />
								<Text style={styles.gridItem}>15-30 min</Text>
							</View>
							<View style={styles.gridItemContainer}>
								<Ionicons name="restaurant-outline" size={22} color="white" />
								<Text style={styles.gridItem}>12 steps</Text>
							</View>
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
	gridTopItemContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 14,
	},
	gridItemContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flex: 1,
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
		height: 115,
		borderTopLeftRadius: 5,
		borderBottomRightRadius: 5,
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
		height: "75%",
		width: "35%",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	bottomInfoRightContainer: {
		width: "65%",
		flexDirection: "row",
		justifyContent: "center",
	},
	gridRowLeft: {
		width: "60%",
		flexDirection: "column",
		alignItems: "flex-start",
		padding: 10,
	},
	gridRowRight: {
		width: "40%",
		flexDirection: "column",
		alignItems: "flex-start",
		padding: 10,
	},
	gridItem: {
		color: "white",
		fontSize: 12,
	},

	recipeRating: {
		color: "white",
	},
})

export default RecipeCard
