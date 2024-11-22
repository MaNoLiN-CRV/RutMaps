import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import MapScreen from "./MapScreen";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="RutMaps" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}