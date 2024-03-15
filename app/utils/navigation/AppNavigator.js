import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import getTabBarIcon from "./TabBarIcon"

import HomeMain from "../../screens/home/HomeMain"
import AccountMain from "../../screens/account/AccountMain"
import RecipesMain from "../../screens/recipes/RecipesMain"
import SettingsMain from "../../screens/settings/SettingsMain"

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

const AppNavigator = () => {
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

export default AppNavigator
