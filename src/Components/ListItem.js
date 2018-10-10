import React from 'react';
import { View, Text } from 'react-native';
import ListNode from './ListNode';

const ListItem = (props) => {
  const { title } = props.listItem;
  return (
    <ListNode>
      <Text>{title}</Text>
    </ListNode>
  );
};

export default ListItem;
