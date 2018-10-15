import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Section from './Section';
import styles from './styles/buttonStyles';

const Button = (props) => {
  const { message, onPress } = props;
  return (
    <Section>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onPress}
      >
        <Text style={styles.textStyle}>
          {message}
        </Text>
      </TouchableOpacity>
    </Section>
  );
};

export default Button;
