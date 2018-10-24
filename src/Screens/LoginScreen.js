import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const LoginScreen = () => (
  <View style={viewStyle}>
    <Text style={textStyle}>Login Screen</Text>
  </View>
);

export { LoginScreen };
