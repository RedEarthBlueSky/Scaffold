import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Section from './Section';
import styles from './styles/buttonStyles';

const Button = () => {
  return (
    <Section>
      <TouchableOpacity
        onPress={() => console.log('Pressed!')}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>React Native Click!</Text>
      </TouchableOpacity>
    </Section>
  );
};

export default Button;
