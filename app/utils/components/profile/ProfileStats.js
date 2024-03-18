import React from "react"
import { View, Text, StyleSheet } from "react-native"
import ProgressBar from "../ProgressBar"

const ProfileStats = ({ mode, statsEnabled }) => {
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
		// Hard-coded values for demonstration
		const recipesMade = 15
		const goal = 20

		return (
			<View style={styles.statsContainerRecipe}>
				<View style={styles.statsLabelContainer}>
					<Text style={styles.statLabel}>RECIPES MADE</Text>
					<Text style={styles.statLabel}>GOAL</Text>
				</View>
				<ProgressBar type={"blue"} currentValue={recipesMade} maxValue={goal} />
				<View style={styles.statsLabelContainer}>
					<Text style={styles.statValue}>15</Text>
					<Text style={styles.statValue}>20</Text>
				</View>
			</View>
		)
	} else {
		return null
	}
}

const styles = StyleSheet.create({
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
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
		fontSize: 12,
	},
	statValue: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
})

export default ProfileStats
