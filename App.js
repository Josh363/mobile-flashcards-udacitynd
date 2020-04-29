import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import Constants from 'expo-constants'
import { setLocalNotification } from './utils/helpers'
import { lightPurp } from './utils/colors'

const store = createStore(reducer, applyMiddleware(thunk, logger))

const FlashStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Stack = createStackNavigator()

export const App = () => {
  useEffect(() => {
    setLocalNotification()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <FlashStatusBar backgroundColor={lightPurp} barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="Add Card" component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Quiz Results" component={QuizResults} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

//test commit
