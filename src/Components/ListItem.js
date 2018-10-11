import React from 'react';
import { Text } from 'react-native';
import ListNode from './ListNode';
import ListItemSection from './ListItemSection';

const ListItem = (props) => {
  const { title } = props.listItem;
  return (
    <ListNode>
      <Text>{title}</Text>
      <ListItemSection />
      <ListItemSection />
      <ListItemSection />
    </ListNode>
  );
};

export default ListItem;
