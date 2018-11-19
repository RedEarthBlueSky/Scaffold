import React from 'react';
import { View, Text, Button } from 'react-native';
import screenStyles from './styles/screenStyles';

const HomeScreen = (props) => {
  const users = [
    { name: 'Rick' },
    { name: 'Morty' },
    { name: 'Summer' },
    { name: 'Beth' },
    { name: 'Jerry' }
  ];

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
      {
        users.map((user, i) => {
          console.log(i, user.name);
          return (
            <Button
              key={i}
              onPress={() => navigate('Lists', { list: user.name })}
              title={`List of ${user.name}`}
            />
          );
        })
      }
    </View>
  );
};

export { HomeScreen };
