import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle } = screenStyles;

const items = [
  { name: 'One', subject: 'People' },
  { name: 'Two', subject: 'Places' },
  { name: 'Three', subject: 'Mood' },
  { name: 'Four', subject: 'Waydehay' },
];

const OpenDrawer = (props) => {
  return (
    <View>
      <TouchableOpacity
        title='Drawer'
        onPress={() => props.navigation.openDrawer()}
      >
        <Text>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

class ItemList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Stack: ${navigation.state.routeName}`,
      headerLeft: <OpenDrawer navigation={navigation} />
    };
  }

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
