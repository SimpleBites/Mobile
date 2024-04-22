import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import getTabBarIcon from "./TabBarIcon"

import HomeMain from "../../screens/home/HomeMain"
import AccountMain from "../../screens/account/AccountMain"
import RecipesMain from "../../screens/recipes/RecipesMain"
import SettingsMain from "../../screens/settings/SettingsMain"
import SingleRecipe from "../../screens/recipes/SingleRecipe"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const headerOptions = {
	headerStyle: {
		backgroundColor: "#304A76",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.8,
		shadowRadius: 6,
		elevation: 8,
	},
	headerTintColor: "white",
}

const MainTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
				tabBarActiveTintColor: "#D9D9D9",
				tabBarInactiveTintColor: "#FFFFFF",
				tabBarStyle: {
					backgroundColor: "#304A76",
					height: 60,
				},
				tabBarHideOnKeyboard: true,
			})}
		>
			<Tab.Screen name="Home" component={HomeMain} options={headerOptions} />
			<Tab.Screen
				name="Recipes"
				component={RecipesMain}
				options={headerOptions}
			/>
			<Tab.Screen
				name="Account"
				component={AccountMain}
				options={headerOptions}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsMain}
				options={headerOptions}
			/>
		</Tab.Navigator>
	)
}

const AppNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: headerOptions.headerStyle,
				headerTintColor: headerOptions.headerTintColor,
			}}
		>
			<Stack.Screen
				name="MainTabs"
				component={MainTabs}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SingleRecipe"
				component={SingleRecipe}
				options={{
					title: "Recipe Details",
				}}
			/>
		</Stack.Navigator>
	)
}

export default AppNavigator
