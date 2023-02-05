import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/route/StackNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default App;
