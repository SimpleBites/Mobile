import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { GradientCard } from "../../utils/components/GradientCard"
import ProfileInfo from "../../utils/components/profile/ProfileInfo"
import Title from "../../utils/components/Title"
import RecipeGallery from "../../utils/components/recipes/RecipeGallery"

const HomeMain = () => {
	const colorName = "green"

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContent}>
			<View style={styles.container}>
				<View style={styles.componentContainer}>
					<Title mainText="Overview" subText="DETAILS" width={"90%"} />
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
				<View style={styles.componentContainer}>
					<Title mainText="Recently Viewed" subText="MORE" width={"90%"} />
					<RecipeGallery width={"90%"} mode={"scroll"} />
				</View>
				<View style={styles.componentContainer}>
					<Title mainText="For you" subText="MORE" width={"90%"} />
					<RecipeGallery width={"90%"} mode={"grid"} />
				</View>
				<View style={styles.componentContainer}>
					<Title mainText="Seasonal recipes" subText="MORE" width={"90%"} />
					<RecipeGallery width={"90%"} mode={"scroll"} />
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollViewContent: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
		marginTop: 25,
		alignItems: "center",
	},
	componentContainer: {
		marginBottom: 25,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default HomeMain
