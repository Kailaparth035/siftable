import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Auth Screen
import Splashscreen1 from '../authScreen/Splashscreen1';
import Login from '../authScreen/Login';

// Home Stack
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  console.log('StackNavigation');
  return (
    <Stack.Navigator
      initialRouteName="Splashscreen2"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splashscreen1" component={Splashscreen1} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
