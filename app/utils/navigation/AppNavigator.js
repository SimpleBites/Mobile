import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeMain from "../../screens/home/HomeMain"
import AccountMain from "../../screens/account/AccountMain"
import RecipesMain from "../../screens/recipes/RecipesMain"
import SettingsMain from "../../screens/settings/SettingsMain"

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeMain} />
			<Tab.Screen name="Account" component={AccountMain} />
			<Tab.Screen name="Recipes" component={RecipesMain} />
			<Tab.Screen name="Settings" component={SettingsMain} />
		</Tab.Navigator>
	)
}

export default AppNavigator
