import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeMain from "../../screens/home/HomeMain"
import AccountMain from "../../screens/account/AccountMain"
import RecipesMain from "../../screens/recipes/RecipesMain"
import SettingsMain from "../../screens/settings/SettingsMain"

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#007AFF",
				tabBarInactiveTintColor: "#FFFFFF",
				tabBarStyle: {
					backgroundColor: "#304A76",
					height: 60,
				},
			}}
		>
			<Tab.Screen name="Home" component={HomeMain} />
			<Tab.Screen name="Account" component={AccountMain} />
			<Tab.Screen name="Recipes" component={RecipesMain} />
			<Tab.Screen name="Settings" component={SettingsMain} />
		</Tab.Navigator>
	)
}

export default AppNavigator
