//  Navigator.js

//  Navigators
import {
        DrawerNavigator,
        StackNavigator,
        TabNavigator }
from 'react-navigation';

//  StackNavigation Screens are ItemList and Item
//  TabNavigator    Screens TabA, TabB, TabC
//  Plain old component Plain
import { ItemList, Item, TabA, TabB, TabC, Plain } from '../Screens';

//  Stack Navigator
export const Stack = StackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
  initialRouteName: 'ItemList',
});

//  Tab Navigator
export const Tabs = TabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
  Stack: { screen: Stack }
}, {
  order: ['TabA', 'TabB', 'TabC', 'Stack'],
  animationEnabled: true,
});

//  Drawer Navigator
export const Drawer = DrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  Plain: { screen: Plain }
});

export default Drawer;
