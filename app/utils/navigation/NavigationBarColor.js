import React, { useEffect } from "react"
import * as NavigationBar from "expo-navigation-bar"

const NavigationBarColor = ({ color }) => {
	useEffect(() => {
		NavigationBar.setBackgroundColorAsync(color)
	}, [color])

	return null
}

export default NavigationBarColor
