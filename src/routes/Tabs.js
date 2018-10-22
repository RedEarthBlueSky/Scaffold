import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Home, Lists, Login, Users } from '../Screens';
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

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name='home' color={tintColor} size={20} />
        ),
        tabBarOptions: tabBarOptionsAll,
      },
    },
    Lists: {
      screen: Lists,
      navigationOptions: {
        title: 'Lists',
        tabBarIcon: ({ tintColor }) => (
          <Feather name='list' size={20} color={tintColor} />
        ),
        tabBarOptions: tabBarOptionsAll,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name='login' size={20} color={tintColor} />
        ),
        tabBarOptions: tabBarOptionsAll,
      }
    },
    Users: {
      screen: Users,
      navigationOptions: {
        title: 'Users',
        tabBarIcon: ({ tintColor }) => (
          <Feather name='users' size={20} color={tintColor} />
        ),
        tabBarOptions: tabBarOptionsAll,
      },
    },
    ListScrollView: {
      screen: ListScrollView,
      navigationOptions: {
        title: 'Scroll',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name='list' size={20} color={tintColor} />
        ),
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

export default Tabs;
