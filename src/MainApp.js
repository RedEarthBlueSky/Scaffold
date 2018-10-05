import React, { Component } from 'react';
import { View, Text, Styles } from 'react-native';

// import Wrapper from './Components/Wrapper';
import Header from './Components/Header';
import List from './Components/List';

class MainApp extends Component {
  render() {

    return (
      <View>
        <Header title='Header Title'>
          Header Subtitle Child Prop
        </Header>
        <List />
      </View>
    );
  }
}

export default MainApp;
