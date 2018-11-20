import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const Plain = () => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Plain Screen No tabs</Text>
    </View>
  );
};

export { Plain };
