import React, { Component } from 'react';
import { View, Text } from 'react-native';
import url from '../config/config';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    console.log(this.state.data);
    return (
      <View>
        <Text>This is the List</Text>
      </View>
    );
  }
}

export default List;
