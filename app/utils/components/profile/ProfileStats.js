import React from "react"
import { View, Text, StyleSheet } from "react-native"
import ProgressBar from "../ProgressBar"

// Updated to accept a color prop
const ProfileStats = ({ mode, color, statsEnabled }) => {
	if (!statsEnabled) {
		return null
	}

	if (mode === "overview") {
		return (
			<View style={styles.statsContainer}>
				<View style={styles.statItem}>
					<Text style={styles.statLabel}>RECIPES MADE</Text>
					<Text style={styles.statValue}>15</Text>
				</View>
				<View style={styles.statItem}>
					<Text style={styles.statLabel}>INGREDIENTS USED</Text>
					<Text style={styles.statValue}>50</Text>
				</View>
				<View style={styles.statItem}>
					<Text style={styles.statLabel}>LIKES RECEIVED</Text>
					<Text style={styles.statValue}>100</Text>
				</View>
			</View>
		)
	} else if (mode === "recipes") {
		const recipesMade = 105 // Your dynamic value for recipes made
		const goal = 200 // Your dynamic value for the goal

		return (
			<View style={styles.statsContainerRecipe}>
				<View style={styles.statsLabelContainer}>
					<Text style={styles.statLabel}>RECIPES MADE</Text>
					<Text style={styles.statLabel}>GOAL</Text>
				</View>
				<ProgressBar color={color} currentValue={recipesMade} maxValue={goal} />
				<View style={styles.statsLabelContainer}>
					<Text style={styles.statValue}>{recipesMade}</Text>
					<Text style={styles.statValue}>{goal}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	statsContainerRecipe: {
		flexDirection: "column",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	statsLabelContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	statItem: {
		alignItems: "center",
	},
	statLabel: {
		color: "#fff",
		fontSize: 13,
	},
	statValue: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
	},
})

export default ProfileStats
