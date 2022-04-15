import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_API_KEY } from "@env";
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const NavigationCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text style={tw`text-xl text-center px-4 py-3`}>GOOD MORNING PAVIN</Text>
      <View>
          <GooglePlacesAutocomplete 
            placeholder='Where to'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            enablePoweredByContainer={false}
            styles={toInputBoxStyles}
            query={{ 
                key: GOOGLE_API_KEY,
                language : "en"
             }}
             onPress = {(data, details=null)=>{
                 dispatch(setDestination({
                    location : details.geometry.location,
                    description : data.description,}
                 ))
                 navigation.navigate('RideOptions')
             }}
             fetchDetails={true}
             returnKeyType={"search"}
             minLength={2}
          />
      </View>
      
    </SafeAreaView>
  )
}

export default NavigationCard

const toInputBoxStyles = StyleSheet.create({
    container :{
        backgroundColor:"white",
        flex: 0,
    },
    textInput : {
        fontSize : 18,
        borderRadius: 0
    },
    
})