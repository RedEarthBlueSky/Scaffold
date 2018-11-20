import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const TabC = () => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Tab C Screen</Text>
    </View>
  );
};

export { TabC };
