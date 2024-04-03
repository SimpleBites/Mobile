import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import ProfileStats from "./ProfileStats"
import { images } from "../../constants/Images"

const ProfileInfo = ({
	pictureWidth,
	pictureHeight,
	name,
	title,
	nameFontSize,
	titleFontSize,
	statsEnabled,
	statsMode,
}) => {
	const mode = statsMode?.mode
	const color = statsMode?.color

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
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
			<ProfileStats mode={mode} color={color} statsEnabled={statsEnabled} />
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
		paddingLeft: 20,
		paddingTop: 20,
		paddingBottom: 15,
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
