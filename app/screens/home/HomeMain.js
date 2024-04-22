import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { GradientCard } from "../../utils/components/GradientCard"
import ProfileInfo from "../../utils/components/profile/ProfileInfo"
import Title from "../../utils/components/Title"
import RecipeGallery from "../../utils/components/recipes/RecipeGallery"
import { useNavigation } from "@react-navigation/native" // Temp

const HomeMain = () => {
	// TEMPORARY
	const colorName = "green"
	const navigation = useNavigation()

	const handleNavigateToAccountMain = () => {
		navigation.navigate("Account")
	}

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContent}>
			{/* Kinda forgot why I wrapped all of this in two containers :P */}
			<View style={styles.container}>
				<View style={styles.componentContainer}>
					{/* Profile overview card */}
					<Title mainText="Overview" subText="DETAILS" width={"90%"} />
					<GradientCard
						width={"90%"}
						height={180}
						color={colorName}
						borderRadius={5}
						onPress={handleNavigateToAccountMain}
					>
						<ProfileInfo
							pictureWidth={80}
							pictureHeight={80}
							name="test"
							nameFontSize={18}
							title="Adept Chef"
							titleFontSize={14}
							statsEnabled={true}
							statsMode={{ mode: "overview", color: colorName }}
							padding={true}
						/>
					</GradientCard>
				</View>
				{/* Recipe displays */}
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
