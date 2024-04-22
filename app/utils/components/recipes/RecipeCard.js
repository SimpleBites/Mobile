import React from "react"
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	Touchable,
	Pressable,
} from "react-native"
import GradientCard from "../GradientCard"
import { images } from "../../constants/Images"
import { Ionicons } from "@expo/vector-icons"
import RecipeRating from "./RecipeRating"
import { useNavigation } from "@react-navigation/native"

const RecipeCard = ({ recipe }) => {
	const navigation = useNavigation()

	const handlePress = (recipe) => {
		navigation.navigate("SingleRecipe", { recipe })
	}

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.recipeContainer}
				onPress={() => handlePress(recipe)}
			>
				<GradientCard
					width={"90%"}
					height={80}
					borderRadius={5}
					color={"red"}
					direction={"right-to-left"}
					borderRadiusSides={"top"}
					zIndex={1}
				>
					<View style={styles.topInfoContainer}>
						<View style={styles.titleContainer}>
							<Text style={styles.recipeTitle}>{recipe.title}</Text>
						</View>
					</View>
				</GradientCard>
				<GradientCard
					width={"90%"}
					height={70}
					borderRadius={5}
					color={"lightred"}
					direction={"right-to-left"}
					borderRadiusSides={"bottom"}
				>
					<View style={styles.bottomInfoContainer}>
						<View style={styles.bottomInfoLeftContainer}>
							<RecipeRating stars={recipe.average_score} />
						</View>
						<View style={styles.bottomInfoRightContainer}>
							<View style={styles.gridRowLeft}>
								<View style={styles.gridTopItemContainer}>
									<Ionicons name="bookmark-outline" size={22} color="white" />
									<Text style={styles.gridItem}>OneTag, TwoTag</Text>
								</View>
								<View style={styles.gridItemContainer}>
									<Ionicons name="person-outline" size={22} color="white" />
									<Text style={styles.gridItem}>IsahPassman</Text>
								</View>
							</View>
							<View style={styles.gridRowRight}>
								<View style={styles.gridTopItemContainer}>
									<Ionicons name="time-outline" size={22} color="white" />
									<Text style={styles.gridItem}>15-30 min</Text>
								</View>
								<View style={styles.gridItemContainer}>
									<Ionicons name="checkbox-outline" size={22} color="white" />
									<Text style={styles.gridItem}>12 steps</Text>
								</View>
							</View>
						</View>
					</View>
				</GradientCard>
				<View style={styles.imageContainer}>
					<View style={styles.imageShadow}>
						<Image
							source={images.placeholderImage}
							style={styles.image}
						></Image>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	recipeContainer: {
		width: "100%",
		height: "100%",
		alignItems: "center",
	},
	titleContainer: {
		flex: 1,
		width: "65%",
		alignItems: "left",
		justifyContent: "center",
		borderRadius: 5,
		padding: 10,
	},
	gridTopItemContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 8,
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
		width: "90%",
		position: "absolute",
		zIndex: 2,
	},
	imageShadow: {
		width: "35%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderTopLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	image: {
		width: "100%",
		height: 115,
		borderTopLeftRadius: 5,
		borderBottomRightRadius: 5,
	},

	topInfoContainer: {
		flex: 1,
		alignItems: "flex-end",
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
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "flex-end",
		gap: 3,
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
		justifyContent: "center",
		marginLeft: 5,
	},
	gridRowRight: {
		width: "40%",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	gridItem: {
		color: "white",
		fontWeight: "bold",
		fontSize: 10,
	},

	recipeRating: {
		color: "white",
	},
})

export default RecipeCard
