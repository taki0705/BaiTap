import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import Respond from './Respond';
import NextToYou from './NextToYou';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
const Stack =createStackNavigator();
export default function App() {
  return (
 <NavigationContainer>
       <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="NextToYou" component={NextToYou} />
        <Stack.Screen name="Respond" component={Respond} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}
