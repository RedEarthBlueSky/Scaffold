import React from 'react';
import { View, Text, Button } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const LoginScreen = (props) => {
  const { navigate } = props.navigation;
  const { params } = props.navigation.state;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Login Screen</Text>
      <Button
        onPress={() => navigate('Home')}
        title='Home'
      />
      <Button
        onPress={() => navigate('Lists', { list: 'fab list' })}
        title='Lists'
      />
     <Text>{`Gonna log in ${params.name} now!`}</Text>
    </View>
  );
};

export { LoginScreen };
