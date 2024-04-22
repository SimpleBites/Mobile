import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import ProfileStats from "./ProfileStats"
import { images } from "../../constants/Images"

/**
 * Displays user profile information including a picture, name, title, and optional statistics.
 * @date 4/11/2024 - 2:26:39 PM
 *
 * @module ProfileInfo
 * @param {number} props.pictureWidth - The width of the profile picture.
 * @param {number} props.pictureHeight - The height of the profile picture.
 * @param {string} props.name - The name of the user.
 * @param {number} props.nameFontSize - The font size of the name text.
 * @param {string} props.title - The title of the user.
 * @param {number} props.titleFontSize - The font size of the title text.
 * @param {boolean} props.statsEnabled - Flag to enable/disable statistics display.
 * @param {Object} props.statsMode - Object containing the mode and color for the statistics display.
 * @param {string} [props.statsMode.mode] - Mode of the statistics display.
 * @param {string} [props.statsMode.color] - Color of the statistics text.
 *
 * @returns {React.ReactNode} A view component displaying the user's profile information.
 */
const ProfileInfo = ({
	pictureWidth,
	pictureHeight,
	name,
	nameFontSize,
	title,
	titleFontSize,
	statsEnabled,
	statsMode,
	padding,
}) => {
	const mode = statsMode?.mode
	const color = statsMode?.color

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.innerContainer,
					padding ? styles.innerContainerWithPadding : null,
				]}
			>
				<View style={styles.imageBorder}>
					<Image
						source={images.placeholderImage}
						style={[
							styles.image,
							{ width: pictureWidth, height: pictureHeight },
						]}
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={[styles.accountName, { fontSize: nameFontSize }]}>
						{name}
					</Text>
					<Text style={[styles.accountTitle, { fontSize: titleFontSize }]}>
						{title}
					</Text>
				</View>
			</View>
			<View style={padding ? styles.stats : null}>
				<ProfileStats mode={mode} color={color} statsEnabled={statsEnabled} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	stats: {
		marginTop: 15,
	},
	container: {},
	innerContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	innerContainerWithPadding: {
		paddingTop: 20,
		paddingLeft: 20,
	},
	image: {
		borderRadius: 50,
	},
	imageBorder: {
		borderRadius: 50,
		borderWidth: 3,
		borderColor: "rgba(255, 255, 255, 0.5)",
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
