import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

class Plain extends Component {
  
  render() {
   console.log(this.props.navigation.state);
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Plain Screen</Text>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Open Drawer"
        />
      </View>
    );
  }
}

export { Plain };
