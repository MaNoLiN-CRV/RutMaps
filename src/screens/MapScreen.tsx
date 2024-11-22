import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapComponent from '../components/MapComponent';
import useStore from '../hooks/Store';
export default function MapScreen() {
    const {location , setLocation , setZoom} = useStore();
    return (
        <View>
           <MapComponent {...location} />
        </View>
    )
}

const styles = StyleSheet.create({})