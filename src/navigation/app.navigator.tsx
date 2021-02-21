import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "screens"

const Stack = createStackNavigator()

export function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
