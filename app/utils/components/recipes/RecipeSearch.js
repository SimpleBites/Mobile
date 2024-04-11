import React from "react"
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const SearchBar = ({ placeholder = "Search..." }) => {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder={placeholder} />
			<TouchableOpacity style={styles.iconContainer}>
				<Ionicons name="search-outline" size={20} color="#AAAAAA" />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#ECECEC",
		borderColor: "#00000010",
		borderWidth: 1,
		borderRadius: 25,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 1,
		marginBottom: 15,
	},
	input: {
		flex: 1,
		padding: 10,
		paddingLeft: 20,
		fontSize: 16,
		color: "#AAAAAA",
	},
	iconContainer: {
		paddingRight: 10,
	},
})

export default SearchBar
