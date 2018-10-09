import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import url from '../config/config';
import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    };
  }
  componentWillMount() {
    axios.get(url)
      .then(response => this.setState({ listItems: response.data }));
  }

  renderListItems() {
    return this.state.listItems.map(
      listItem =>
        <ListItem key={listItem.title} listItem={listItem} />
    );
  }

  render() {
    return (
      <View>
        {this.renderListItems()}
      </View>
    );
  }
}

export default List;
