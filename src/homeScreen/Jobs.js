import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import MainHeader from '../Component/HomeComponent/MainHeader';
import Colors from '../theme/Colors';

const Jobs = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.blue[500]} barStyle="light-content" />
      <MainHeader isShowLogo={true} />
    </View>
  );
};
export default Jobs;
