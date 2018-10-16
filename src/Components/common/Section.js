import React from 'react';
import { View } from 'react-native';
import styles from '../styles/itemStyles';

const Section = (props) => {
  return (
    <View style={styles.sectionStyle}>
      {props.children}
    </View>
  )
}

export { Section };
