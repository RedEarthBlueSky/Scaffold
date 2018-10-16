import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/buttonStyles';

const Button = (props) => {
  const { message, onPress } = props;
  return (
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onPress}
      >
        <Text style={styles.textStyle}>
          {message}
        </Text>
      </TouchableOpacity>
  );
};

export { Button };
