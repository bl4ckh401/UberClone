import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id : "123",
        title : "Get Ride",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LY4Ym8O_KKFohZCQgArWCQHaHa%26pid%3DApi&f=1",
        screen : "MapScreen" ,
    },
    {
        id : "234",
        title : "Order Food",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.maWy4ajUlfLUu2HJb3O4XgHaHa%26pid%3DApi&f=1",
        screen : "MapScreen" ,
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
  return (
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return(
                <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`h-64 w-44 rounded-2xl mt-16 items-center bg-gray-200 m-2 flex content-center`}>
                    <View>
                        <Image source={{uri : item.image}} style={{ 
                        width:120,
                        height:120,
                        resizeMode:'contain' 
                        }} />
                        <Text style={tw`font-bold mt-4 text-lg`}>{item.title}</Text>
                        <Icon style={tw`bg-black`} name='arrowright' type='antdesign'  reverse />
                    </View>
                </TouchableOpacity>    
            )
        }
        }        
         />
  )
}

export default NavOptions

const styles = StyleSheet.create({
  button:{
    justifyContent:'flex-start',
    alignItems:'center',
    height:200,
    resizeMode:'contain',
    borderRadius:20,

}
})