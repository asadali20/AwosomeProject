import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Myshifts from './src/screens/myshifts';
import Available from './src/screens/available';

function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="myshifts"  component={Myshifts} 
        options={{
          tabBarLabel: 'My Shifts',
        }}
        />
        <Tab.Screen name="available" component={Available} 
        options={{
          tabBarLabel: 'Available Shifts',
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:10,
  }
});

export default App;


