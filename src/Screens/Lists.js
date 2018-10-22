import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const Lists = () => (
  <View style={viewStyle}>
    <Text style={textStyle}>Lists Screen</Text>
  </View>
);

export { Lists };
