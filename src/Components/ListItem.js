import React from 'react';
import { View, Text } from 'react-native';

const ListItem = (props) => {
  const { title } = props.listItem;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default ListItem;
