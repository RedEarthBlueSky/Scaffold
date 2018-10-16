//  Fetch and Pass data into ListItems and render them
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import url from '../config/config';
import { Header, Item } from './common';

class ListScrollView extends Component {
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
        <Item key={listItem.title} listItem={listItem} />
    );
  }

  render() {
    return (

      <View>
        <Header title='List Scroll View Title'>
          ListScrollView subtitle
        </Header>
        <ScrollView>
          {this.renderListItems()}
        </ScrollView>
      </View>
    );
  }
}

export default ListScrollView;
