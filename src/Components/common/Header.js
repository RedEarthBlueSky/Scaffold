import React from 'react';
import { Text, View } from 'react-native';
import headerStyles from '../styles/headerStyles';

//  refactor title and children from props object
const Header = ({ title, children }) => {
  const { titleStyle, viewStyle, subtitleStyle } = headerStyles;

  return (
    <View style={viewStyle}>
        <Text style={titleStyle} >
          {title}
        </Text>
        <Text style={subtitleStyle}>
          {children}
        </Text>
    </View>
  );
};

export { Header };
