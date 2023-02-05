import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import MainHeader from '../Component/HomeComponent/MainHeader';
const Favorites = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.blue[500]} barStyle="light-content" />
      <MainHeader isShowLogo={false} text="Favourites" />
    </View>
  );
};
export default Favorites;
