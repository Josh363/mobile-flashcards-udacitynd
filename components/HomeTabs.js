import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { pink, lightPurp } from './utils/colors'

const Tab = createBottomTabNavigator()

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Deck List"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon
          if (route.name === 'Deck List') {
            icon = <FontAwesome name="home" size={size} color={color} />
          } else if (route.name === 'Home') {
            icon = (
              <MaterialCommunityIcons name="cards" size={size} color={color} />
            )
          }
          return icon
        },
      })}
      tabBarOptions={{
        activeTintColor: pink,
        style: {
          height: 80,
          backgroundColor: lightPurp,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      }}
    >
      <Tab.Screen name="Deck List" component={DeckList} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  )
}
