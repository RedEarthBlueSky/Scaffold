import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const HomeScreen = () => {

  return (
    <View style={screenStyles.viewStyle}>
      <Text style={screenStyles.textStyle}>Home Screen</Text>
    </View>
  );
};

export { HomeScreen };
