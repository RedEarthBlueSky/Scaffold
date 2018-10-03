import React from 'react';
import { Text, View } from 'react-native';
import headerStyles from './styles/headerStyles';

const Header = (props) => {
  const { textStyle, viewStyle } = headerStyles;

  return (
    <View style={viewStyle}>
        <Text style={textStyle} > {props.title} </Text>
    </View>
  );
};

export default Header;
