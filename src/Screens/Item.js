import React from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const Item = (props) => {
  const { params } = props.navigation.state;
  console.log(params);
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Item Screen {params.title}</Text>
      <Text style={textStyle}>{params.what}</Text>
    </View>
  );
};

export { Item };
