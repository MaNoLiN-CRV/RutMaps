import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, Animated } from 'react-native';
import { AnimationType,LeafletView,} from 'react-native-leaflet-view';
import useStore from '../hooks/Store';


export default function MapComponent() {
  const { location, stopLocationTracking , loading, startLocationTracking , zoom} = useStore();
  const spinValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startLocationTracking();
    // cleanup
    return () => {
      stopLocationTracking()
    }
  }, []);

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 2500, 
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinValue.stopAnimation();
      spinValue.setValue(0); 
    }
  }, [loading]);
  console.log( " CARGANDO : " + loading);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Animated.Image 
          source={require('../../assets/loading.gif')}  
          style={[styles.loading, { transform: [{ rotate: spin }] }]} 
        />
        <Text style={styles.loadingText}>RUTMAPS IS LOADING...</Text>
      </View>
    );
  }

  return (
      <LeafletView
        
        mapMarkers={[
          {
            animation: {type: AnimationType.WAGGLE},
            position: location,
            icon: '📍',
            size: [32, 32],
            
          }
        ]}
        mapCenterPosition={location}
        zoom={zoom.zoomValue}
      />

  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: 150, 
    height: 150,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1, 
    
  },
  loadingText: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Impact',
    textAlign: 'center', 
    
  }
});