import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapComponent from '../components/MapComponent';
import useStore from '../hooks/Store';

export default function MapScreen() {
    const { location, setLocation, setZoom } = useStore();
    
    return (
        <View style={styles.container}>
            <View style={styles.mapWrapper}>
                <MapComponent />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    text: {
        padding: 10,
    },
    mapWrapper: {
        flex: 1, 
        width: '100%',
    }
});