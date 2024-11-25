import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MapScreen from './src/screens/MapScreen';
import perms from './src/misc/Permissions';
const Stack = createStackNavigator();




function App(): React.JSX.Element {
  useEffect(() => {
    perms();
  }, []);
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: backgroundStyle.backgroundColor,
            },
            headerTintColor: isDarkMode ? Colors.lighter : Colors.darker,
            cardStyle: { backgroundColor: backgroundStyle.backgroundColor },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'Inicio' }}
          />
          <Stack.Screen 
            name="Map" 
            component={MapScreen}
            options={{ title: 'Mapa' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default App;