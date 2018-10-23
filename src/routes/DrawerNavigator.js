import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import { Home, Lists, Login, Users } from '../Screens';
import ListScrollView from '../Components/ListScrollView';

const DrawerNavigator = createDrawerNavigator(
  {
    Home,
    Lists,
    Login,
    Users,
    ListScrollView,
  },
  {
    drawerBackgroundColor: '#cadbf7',
  }
);

export default DrawerNavigator;
