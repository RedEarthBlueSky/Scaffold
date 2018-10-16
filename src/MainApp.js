import React, { Component } from 'react';
import { View } from 'react-native';
import ListScrollView from './Components/ListScrollView';

class MainApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListScrollView />
      </View>
    );
  }
}

export default MainApp;
