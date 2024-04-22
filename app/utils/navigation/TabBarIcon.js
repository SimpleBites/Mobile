import React from "react"
import { sizes } from "../constants/Sizes"

import { Ionicons } from "@expo/vector-icons"

const getTabBarIcon = (route, focused) => {
	const routeName = route.name
	let iconName

	if (routeName === "Home") {
		iconName = focused ? "home" : "home-outline"
	} else if (routeName === "Recipes") {
		iconName = focused ? "restaurant" : "restaurant-outline"
	} else if (routeName === "Account") {
		iconName = focused ? "person" : "person-outline"
	} else if (routeName === "Settings") {
		iconName = focused ? "settings" : "settings-outline"
	}

	return (
		<Ionicons
			name={iconName}
			size={sizes.iconSmall}
			color={focused ? "#EDEDED" : "#FFFFFF"}
		/>
	)
}

export default getTabBarIcon
