import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import RecipeCard from "../../utils/components/recipes/RecipeCard"
import Title from "../../utils/components/Title"
import GradientCard from "../../utils/components/GradientCard"
import ProfileInfo from "../../utils/components/profile/ProfileInfo"
import RecipeGallery from "../../utils/components/recipes/RecipeGallery"
import SearchBar from "../../utils/components/recipes/RecipeSearch"
import { recipes } from "../../utils/constants/DummyData"
import { useNavigation } from "@react-navigation/native"

const RecipesMain = () => {
	// TEMPORARY
	const navigation = useNavigation()

	const handleNavigateToAccountMain = () => {
		navigation.navigate("Account")
	}

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContent}>
			<View style={styles.container}>
				<View style={styles.componentContainer}>
					{/* Profile overview card AND ALSO SEARCH BAR (why???) */}
					<SearchBar placeholder="Search recipes..." />
					<Title mainText="Overview" subText="DETAILS" width={"90%"} />
					<GradientCard
						width={"90%"}
						height={180}
						borderRadius={5}
						color={"blue"}
						onPress={handleNavigateToAccountMain}
					>
						<ProfileInfo
							pictureWidth={80}
							pictureHeight={80}
							name="test"
							title="Adept Chef"
							nameFontSize={18}
							titleFontSize={14}
							statsEnabled={true}
							statsMode={{ mode: "recipes", color: "blue" }}
							padding={true}
						/>
					</GradientCard>
				</View>
				{/* Bunch of recipe components, hardcoded cause no api :D */}
				<View style={styles.componentContainer}>
					<Title mainText="Recipe of the day" subText="DETAILS" width={"90%"} />
					<RecipeCard recipe={recipes[0]} />
				</View>
				<View style={styles.componentContainer}>
					<Title mainText="Recently Viewed" subText="MORE" width={"90%"} />
					<RecipeGallery width={"90%"} mode={"scroll"} />
				</View>
				<View style={styles.componentContainer}>
					<Title mainText="Trending" subText="MORE" width={"90%"} />
					<RecipeGallery width={"90%"} mode={"grid"} />
				</View>
				<View style={styles.componentContainer}>
					<Title mainText="Seasonal recipes" subText="MORE" width={"90%"} />
					<RecipeGallery width={"90%"} mode={"scroll"} />
				</View>
				<View style={styles.componentContainer}>
					<Title
						mainText="Try something new!"
						subText="DETAILS"
						width={"90%"}
					/>
					<RecipeCard recipe={recipes[1]} />
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
		marginBottom: 15,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default RecipesMain
