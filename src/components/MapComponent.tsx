import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';


const location: LatLng = {
  lat: 37.78825,
  lng: -122.4324,
};


export default function MapScreen() {
  return (

      <LeafletView
        mapMarkers={[
          {
            position: location,
            icon: '📍',
            size: [32, 32],
          },
        ]}
        mapCenterPosition={location}
        zoom={13}
      />

  );
}

const styles = StyleSheet.create({

 
});