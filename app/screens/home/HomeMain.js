// HomeMain.js

import React from "react"
import { View, StyleSheet } from "react-native"
import { GradientCard } from "../../utils/components/GradientCard"
import ProfileInfo from "../../utils/components/profile/ProfileInfo"

const HomeMain = () => {
	const colorName = "darkblue"

	return (
		<View style={styles.container}>
			<View style={styles.gradientContainer}>
				<GradientCard
					width={"90%"}
					height={180}
					borderRadius={5}
					color={colorName}
				>
					<ProfileInfo
						pictureWidth={80}
						pictureHeight={80}
						name="Isahpassman"
						title="Adept Chef"
						nameFontSize={18}
						titleFontSize={14}
						statsEnabled={true}
						statsMode={{ mode: "recipes", color: colorName }}
					/>
				</GradientCard>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	gradientContainer: {
		marginTop: 50,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default HomeMain
