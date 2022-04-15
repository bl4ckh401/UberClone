import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import {Map} from '../Components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NavigationCard from '../Components/NavigationCard'
import RideOptions from '../Components/RideOptions'




const MapScreen = () => {
  const Stack = createStackNavigator()
  return (
      <View>
        <View style={tw`h-1/2`}>
          <Map />
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
              <Stack.Screen 
                name='NavigationCard'
                component={NavigationCard}
                options={
                  {
                    headerShown:false
                  }
              }
              />
              <Stack.Screen 
                name='RideOptions'
                component={RideOptions}
                options={
                  {
                    headerShown:false
                  }
              }
              />
            </Stack.Navigator>
        </View>
      </View>    
  )
}

export default MapScreen

const styles = StyleSheet.create({
    maps : {
        flex:1,
    }
})