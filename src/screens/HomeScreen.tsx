import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Definir los tipos para la navegación
type RootStackParamList = {
  Home: undefined;
  Map: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/logos/original.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Bienvenido</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Map')}
      >
        <Text style={styles.buttonText}>Ver Mapa</Text>
      </TouchableOpacity>
      <Text style={styles.editionText}>BLOSTE EDITION</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 60
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editionText: {
    marginTop: 60,
    color: 'blue'
  }
});