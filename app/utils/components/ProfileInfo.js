import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { images } from "../constants/Images"

const ProfileInfo = ({
	pictureWidth,
	pictureHeight,
	name,
	title,
	nameFontSize,
	titleFontSize,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Image
					source={images.placeholderImage}
					style={[styles.image, { width: pictureWidth, height: pictureHeight }]}
				/>
				<View style={styles.textContainer}>
					<Text style={[styles.accountName, { fontSize: nameFontSize }]}>
						{name}
					</Text>
					<Text style={[styles.accountTitle, { fontSize: titleFontSize }]}>
						{title}
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
	},
	image: {
		borderRadius: 40,
	},
	textContainer: {
		marginLeft: 10,
	},
	accountName: {
		fontWeight: "bold",
		color: "#fff",
	},
	accountTitle: {
		color: "#fff",
	},
})

export default ProfileInfo
