import React from "react"
import { View, StyleSheet } from "react-native"
import { GradientCard } from "../../utils/components/GradientCard"
import ProfileInfo from "../../utils/components/ProfileInfo"

const HomeMain = () => {
	return (
		<View style={styles.container}>
			<View style={styles.gradientContainer}>
				<GradientCard
					width={"90%"}
					height={180}
					borderRadius={5}
					type="light blue"
				>
					<ProfileInfo
						pictureWidth={80}
						pictureHeight={80}
						name="TGCoolMan"
						title="Novice Chef"
						nameFontSize={18}
						titleFontSize={14}
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
	gradient: {
		justifyContent: "center",
		alignItems: "center",
	},
})

export default HomeMain
