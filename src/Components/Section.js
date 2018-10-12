import React from 'react';
import { View } from 'react-native';
import styles from './styles/SectionStyles';

const Section = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export default Section;
