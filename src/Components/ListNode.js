//  stying wrapper for ListItem Content
//  Could be called the List Item Content Wrapper
import React from 'react';
import { View } from 'react-native';
import styles from './styles/ListNodeStyles';

const Item = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export default Item;
