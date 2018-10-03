import React, { Component } from 'react';
import { View, Text, Styles } from 'react-native';

import Wrapper from './Components/Wrapper';
import Header from './Components/Header';

class MainApp extends Component {
  render() {
    return (
        <Header title='Header' />
    );
  }
}

export default MainApp;
