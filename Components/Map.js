import { StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps'
import tw from "tailwind-react-native-classnames"
import { useDispatch, useSelector } from 'react-redux'
import {selectDestination, selectOrigin, setTravelTimeInformation} from "../slices/navSlice.js"
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from "@env"



const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const dispatch = useDispatch()
  const mapRef = useRef()

  useEffect(() => {
    if(!origin || !destination){
      return
    }
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding : {top:50, right:50, left:50, bottom:50}
    })
  }, [origin, destination])

    useEffect(() => {
        
        const getTravelTime = async() => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
                    units=imperial&origins=${origin.description}&destinations=${destination.description}
                    &key=GOOGLE_API_KEY`)
                    .then((response) => response.json())
                    .then(data => {
                      dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
                    })
        }

    }, [])
  

  return (
      <MapView
      mapType='mutedStandard'
      style={tw`flex-1`}
      ref={mapRef}
      initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      }}
  >
    { origin?.location && (
        <Marker 
          coordinate={{ 
              latitude: origin.location.lat,
              longitude: origin.location.lng,
          }}
          title='Origin'
          description={origin.description}
          identifier='origin'
    />
    )}

    {origin && destination &&(
    <MapViewDirections 
    apikey='GOOGLE_API_KEY'
    origin={origin.description}
    destination={destination.description}
    strokeColor='black'
    strokeWidth={3}
    />
  )}
  { destination?.location && (
        <Marker 
          coordinate={{ 
              latitude: destination.location.lat,
              longitude: destination.location.lng,
          }}
          title='Origin'
          description={destination.description}
          identifier='origin'
    />
    )}
  </MapView>
  
  )
}

export {Map}

const styles = StyleSheet.create({})