import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const TabB = () => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>TabB TabB Screen</Text>
    </View>
  );
};

export { TabB };
