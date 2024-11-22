import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Location from '../entities/Location';
/**
 * 
 * @param param0 Current Location
 * @returns MapComponent
 */
const MapComponent = ({ latitude, longitude, zoom: { latitudeDelta, longitudeDelta } }: Location) => {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
