import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavOptions from '../Components/navOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_API_KEY} from "@env"
import { useDispatch } from 'react-redux'
import {setOrigin, setDestination} from "../slices/navSlice.js"


const Homepage = () => {
  const dispatch = useDispatch();
  return(
    <SafeAreaView style={styles.home}>
      <View >
        <GooglePlacesAutocomplete 
        styles={{ 
          container:{
            flex : 0,
          },
          textInput : {
            fontSize : 18,
          },
         }}
        placeholder='Where From?'
        query = {
          {
            key : GOOGLE_API_KEY,
            language : "en"
          }
        }
        minLength={2}
        onPress={(data, details=null) => {
          dispatch(setOrigin({
            location : details.geometry.location,
            description : data.description,

          }));
          dispatch(setDestination(null))
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        enablePoweredByContainer={false}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  home : {
    flex:1,
    width:"100%",
    alignItems:'center',
    marginTop:60
  },
})