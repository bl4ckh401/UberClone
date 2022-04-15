import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_API_KEY } from "@env";
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/themed'

const NavigationCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white`}>
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
      <NavFavourites />
      <View style={tw`flex-row bg-white justify-evenly border mt-auto py-2 border-t border-gray-100`}>
          <TouchableOpacity 
            style={tw`flex flex-row bg-black items-center justify-between w-24 px-4 py-3 rounded-full`}
            onPress={()=> navigation.navigate('RideOptions')}
            >
              <Icon name='car' type='font-awesome' color='white' size={16} />
              <Text style={tw`text-lg text-center px-2 text-white`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row bg-gray-200 items-center justify-between w-24 px-4 py-3 rounded-full`}>
              <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
              <Text style={tw`text-lg text-center px-2 text-black`}>Eats</Text>
          </TouchableOpacity>
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