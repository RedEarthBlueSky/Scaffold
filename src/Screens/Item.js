import React, { Component } from 'react';
import { View, Text } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

class Item extends Component {

  static navigationOptions = ({ navigation }) => {
    const itemNumber = navigation.getParam('item', 'error: default item');
    const subject = navigation.getParam('subject', 'Error: default subject');
    return {
      title: `Screen ${itemNumber}: ${subject}`,
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Item Screen {params.item}</Text>
      <Text style={textStyle}>{params.subject}</Text>
      </View>
    );
  }
}

export { Item };
