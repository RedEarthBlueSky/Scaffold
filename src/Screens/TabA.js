import React, { Component } from 'react';
import { View, Text } from 'react-native';

import OpenDrawerButton from '../routes/OpenDrawerButton';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

class TabA extends Component {
  render() {
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>TabA Screen</Text>
      </View>
    );
  }
}

export { TabA };
