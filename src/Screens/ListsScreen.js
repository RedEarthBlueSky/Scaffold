import React from 'react';
import { View, Text, Button } from 'react-native';
import screenStyles from './styles/screenStyles';

const { viewStyle, textStyle } = screenStyles;

const ListsScreen = (props) => {
  const { navigate } = props.navigation;
  const { params } = props.navigation.state;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Lists Screen</Text>
      <Button
        onPress={() => navigate('Home')}
        title='Home'
      />
      <Button
        onPress={() => navigate('Login')}
        title='Login'
      />
    <Text>{`Looking at my ${params.list}`}</Text>
    </View>
  );
};

export { ListsScreen };
