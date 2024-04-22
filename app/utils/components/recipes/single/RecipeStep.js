import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import GradientCard from "../../GradientCard"
import { Ionicons } from "@expo/vector-icons"

const RecipeStep = ({ stepNumber, stepDescription, width }) => {
	const [opened, setOpened] = useState(false)
	const [checked, setChecked] = useState(false)

	const toggleStep = () => {
		setOpened(!opened)
	}

	const toggleCheckbox = () => {
		setChecked(!checked)
	}

	return (
		<View style={{ width }}>
			<Pressable onPress={toggleStep} style={styles.componentContainer}>
				<View style={styles.container}>
					<Text style={[styles.stepNumber, checked && styles.strikethrough]}>
						Step {stepNumber}
					</Text>
					{opened ? (
						<Ionicons name="chevron-up-outline" size={28} color="gray" />
					) : (
						<Ionicons name="chevron-down-outline" size={28} color="gray" />
					)}
				</View>
			</Pressable>
			{opened && (
				<View>
					<View
						style={[styles.additionalInfoContainer, { alignSelf: "center" }]}
					>
						<Text>{stepDescription}</Text>
					</View>
					<View style={styles.checkBoxContainer}>
						<GradientCard
							width={"95%"}
							height={50}
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
											<Ionicons
												name="checkbox-outline"
												size={30}
												color="white"
											/>
										) : (
											<Ionicons name="square-outline" size={30} color="white" />
										)}
									</View>
								</Pressable>
							</View>
						</GradientCard>
					</View>
				</View>
			)}
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
		fontSize: 16,
		color: "white",
		fontWeight: "500",
	},
	completeContainer: {
		flex: 1,
		justifyContent: "center",
	},
	checkBoxContainer: {
		alignItems: "center",
		marginBottom: 10,
	},
	componentContainer: {
		marginTop: 10,
	},
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: "#CCCCCC",
		marginBottom: 5,
	},
	stepNumber: {
		fontSize: 16,
	},
	strikethrough: {
		textDecorationLine: "line-through",
		color: "#00000090",
	},
	additionalInfoContainer: {
		backgroundColor: "white",
		width: "95%",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 10,
		marginTop: 5,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		elevation: 5,
	},
	stepDescription: {
		fontSize: 16,
	},
})

export default RecipeStep
