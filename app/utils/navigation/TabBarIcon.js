import React from "react"
import { Image } from "react-native"
import { icons } from "../constants/Images"
import { sizes } from "../constants/Sizes"

const getTabBarIcon = (route, focused) => {
	const { icon, activeIcon } = icons.find((item) => item.name === route.name)
	const iconSource = focused ? activeIcon : icon
	return (
		<Image
			source={iconSource}
			style={{ width: sizes.iconSmall, height: sizes.iconSmall }}
		/>
	)
}

export default getTabBarIcon
