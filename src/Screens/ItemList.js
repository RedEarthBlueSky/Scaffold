import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/screenStyles';

import OpenDrawerButton from '../routes/OpenDrawerButton';

const { viewStyle } = styles;

const items = [
  { name: 'One', subject: 'People' },
  { name: 'Two', subject: 'Places' },
  { name: 'Three', subject: 'Mood' },
  { name: 'Four', subject: 'Waydehay' },
];

class ItemList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Stack: ${navigation.state.routeName}`,
      headerRight: <OpenDrawerButton navigation={navigation} />,
    };
  };

  toggleDrawerButton() {
    console.log('toggleDrawer');
  }

  renderItem = (item, i) => {
    return (
      <TouchableOpacity
        key={i}
        // style={styles.item}
        onPress={() =>
          this.props.navigation.navigate('Item',
          { item: item.name, subject: item.subject }
        )}
      >
        <Text>Screen {item.name}: {item.subject}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={viewStyle}>
        <Text>
          {'I\'m a StackNavigator'}
        </Text>
        {items.map(this.renderItem)}
      </View>
    );
  }
}

export { ItemList };
