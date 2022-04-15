import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Code Street, Ongata Rongai"
    },
    {
        id:"456",
        icon:"briefcase",
        location:"Work",
        destination:"React Way, Nairobi Kenya"
    },
]


const NavFavourites = () => {
  return (
      <FlatList 
      data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={()=>{
            return(
            <View style={[tw`bg-black`, {height:0.5}]}/>
            )
        }}
        renderItem={({item: {location, icon, destination}}) => {
            return(
                <TouchableOpacity style={tw`flex-row  items-center p-5`}>
                        <Icon style={tw`mr-4 rounded-full p-3 bg-black`}
                         name={icon}
                        type='ionicon' 
                        size={18}
                        color="white" 
                        />
                        <View>
                            <Text style={tw`font-bold text-lg`}>{location}</Text>
                            <Text style={tw`text-gray-500`}>{destination}</Text>
                        </View>
                </TouchableOpacity>
            )
            }
        }
      
      />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})