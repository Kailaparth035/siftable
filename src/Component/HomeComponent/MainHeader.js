import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../theme/index';
import Colors from '../../theme/Colors';
import {Icons} from '../../theme/icons';
import {Images} from '../../theme/images';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme/scalling';

const MainHeader = ({isShowLogo, text}) => {
  return (
    <View
      style={[
        styles.container,
        {height: isShowLogo ? moderateScale(80) : moderateScale(80)},
      ]}>
      <View style={styles.logo_container}>
        {isShowLogo ? (
          <Image source={Images.whiteLogo} />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </View>
      <View style={styles.secondary_container}>
        <Image source={Icons.bell} />
        <View>
          <Image
            source={Images.profileImage}
            style={{width: moderateScale(42), height: moderateScale(42)}}
          />
        </View>
      </View>
    </View>
  );
};
export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.blue[500],
    paddingHorizontal: horizontalScale(20),
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  secondary_container: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Fonts.satoshi_bold,
    fontSize: moderateScale(22),
    color: Colors.white,
  },
});
