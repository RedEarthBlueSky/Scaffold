import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const TabA = () => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>TabA Tab Screen</Text>
    </View>
  );
};

export { TabA };
