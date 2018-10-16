import React from 'react';
import { View } from 'react-native';
import styles from '../styles/itemStyles';

const Main = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export { Main };
