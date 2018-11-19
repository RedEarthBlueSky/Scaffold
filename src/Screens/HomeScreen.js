import React from 'react';
import { View, Text, Button } from 'react-native';
import screenStyles from './styles/screenStyles';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={screenStyles.viewStyle}>
      <Text style={screenStyles.textStyle}>Home Screen</Text>
      <Button
        onPress={() => navigate('Lists', { list: 'Great List' })}
        title='Lists'
      />
      <Button
        onPress={() => navigate('Login', { name: 'Ian Salt' })}
        title='Login'
      />
    </View>
  );
};

export { HomeScreen };
