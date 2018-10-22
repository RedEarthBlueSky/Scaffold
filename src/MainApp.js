import React, { Component } from 'react';
import { View } from 'react-native';
import Tabs from './routes/Tabs';

class MainApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    );
  }
}

export default MainApp;
