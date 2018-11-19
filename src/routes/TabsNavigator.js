import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { HomeScreen, ListsScreen, LoginScreen, UsersScreen } from '../Screens';
import ListScrollView from '../Components/ListScrollView';

const tabBarOptionsAll = {
  inactiveTintColor: '#000',
  activeTintColor: 'blue',
  showIcon: true,
  showLabel: true,
  labelStyle: {
    fontSize: 10,
    marginTop: 0,
  },
  style: {
    backgroundColor: 'transparent',
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
};

const tabBarIconChoice = (choice, name, size) => {
  if (choice === 'AntDesign')
    return ({ tintColor }) => (<AntDesign name={name} color={tintColor} size={size} />);
  if (choice === 'Feather')
    return ({ tintColor }) => (<Feather name={name} color={tintColor} size={size} />);
  if (choice === 'FontAwesome5')
    return ({ tintColor }) => (<FontAwesome5 name={name} color={tintColor} size={size} />);
}

const TabsNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: tabBarIconChoice('AntDesign', 'home', 20),
        tabBarOptions: tabBarOptionsAll,
      },
    },
    Lists: {
      screen: ListsScreen,
      navigationOptions: {
        title: 'Lists',
        tabBarIcon: tabBarIconChoice('Feather', 'list', 20),
        tabBarOptions: tabBarOptionsAll,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        tabBarIcon: tabBarIconChoice('AntDesign', 'login', 20),
        tabBarOptions: tabBarOptionsAll,
      }
    },
    Users: {
      screen: UsersScreen,
      navigationOptions: {
        title: 'Users',
        tabBarIcon: tabBarIconChoice('Feather', 'users', 20),
        tabBarOptions: tabBarOptionsAll,
      },
    },
    ListScroll: {
      screen: ListScrollView,
      navigationOptions: {
        title: 'Scroll',
        tabBarIcon: tabBarIconChoice('FontAwesome5', 'list', 20),
        tabBarOptions: tabBarOptionsAll,
      }
    },
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
  },
);

export default createStackNavigator({ TabsNavigator }, { headerMode: 'none' });
