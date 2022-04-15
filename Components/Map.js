import { StyleSheet } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import tw from "tailwind-react-native-classnames"
import { useSelector } from 'react-redux'
import {selectDestination, selectOrigin} from "../slices/navSlice.js"


const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  return (
      <MapView
      mapType='mutedStandard'
      style={tw`flex-1`}
        initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        }}
  />
  )
}

export {Map}

const styles = StyleSheet.create({})