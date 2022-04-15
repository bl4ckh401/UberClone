import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
    {
        id:"123",
        title:"Uber ChapChap",
        multiplier:"1",
        image:"https://links.papareact.com/3pn"
    },
    {
        id:"456",
        title:"Uber",
        multiplier:"1.25",
        image:"https://links.papareact.com/5w8"
    },
    {
        id:"789",
        title:"Uber Lux",
        multiplier:"1.75",
        image:"https://links.papareact.com/7pf"
    },

]


const RideOptions = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const SURGE_CHARGE_RATE = 1.5

    
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View style={tw`items-center`}>
            <TouchableOpacity 
            onPress={() => {
                navigation.navigate('NavigationCard')
            }}
            style={tw`absolute left-5 p-3 rounded-full`}>
                <Icon name='chevron-left' type='fontawesome' />
            </TouchableOpacity>
            <Text style={tw`text-xl text-center px-4 py-3`}>Select Ride - {travelTimeInformation?.distance.text}</Text>
        </View>
        <FlatList 
            data={data} 
            keyExtractor={(item) => item.id} 
            renderItem={({item: {image,id,  title, multiplier}, item}) => {
            return(
                <TouchableOpacity style={tw`flex flex-row items-center justify-evenly ${id === selected?.id && "bg-gray-200"}`}
                onPress={() => {
                    setSelected(item)
                    console.log(selected)}}>
                    <Image source={{ uri : image }} style={{ width: 100, height: 100, resizeMode:"contain" }} />
                    <View>
                        <Text>{title}</Text>
                        <Text>{travelTimeInformation?.duration.text}</Text>
                    </View>
                    <Text>
                        {new Intl.NumberFormat('en-gb',{
                            style:"currency",
                            currency:"KES"
                           })
                           .format(
                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) /100

                           )}
                    </Text>
                </TouchableOpacity>
            )
        }} />
        <View>
            <TouchableOpacity style={tw`flex flex-row bg-black items-center justify-between w-24 px-4 py-3 ${!selected  && "bg-gray-200"}`}>
                <Text>Choose {selected?.title }</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptions

const styles = StyleSheet.create({})