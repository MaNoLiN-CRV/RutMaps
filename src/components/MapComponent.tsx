import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import useStore from '../hooks/Store';

export default function MapComponent() {
  const { location, error, loading, startLocationTracking } = useStore();
  useEffect(() => {
    startLocationTracking();
  }, []);

  if (loading) {
    return(
      <Image 
        source={require('../../assets/loading.gif')}  
        style={styles.loading}
    />
    );
  }
 
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
        zoom={location.zoom.zoomValue}
      
        
      />

  );
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
  }
 
});