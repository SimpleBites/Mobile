import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons" // Import Ionicons from expo/vector-icons

const RecipeIngredient = ({ width, ingredientName }) => {
	const [checked, setChecked] = useState(false)

	const toggleCheckbox = () => {
		setChecked(!checked)
	}

	return (
		<Pressable onPress={toggleCheckbox}>
			<View style={[styles.container, { width }]}>
				<Text style={styles.ingredientText}>{ingredientName}</Text>
				{checked ? (
					<Ionicons name="checkbox-outline" size={28} color="gray" />
				) : (
					<Ionicons name="square-outline" size={28} color="gray" />
				)}
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: "#CCCCCC",
	},
	ingredientText: {
		fontSize: 16,
	},
})

export default RecipeIngredient
