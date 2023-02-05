import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import MainHeader from '../Component/HomeComponent/MainHeader';

const Shifts = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.blue[500]} barStyle="light-content" />
      <MainHeader isShowLogo={false} text="Shifts"/>
    </View>
  );
};
export default Shifts;
