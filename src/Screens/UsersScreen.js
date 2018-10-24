import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const UsersScreen = () => (
  <View style={viewStyle}>
    <Text style={textStyle}>Users Screen</Text>
  </View>
);

export { UsersScreen };
