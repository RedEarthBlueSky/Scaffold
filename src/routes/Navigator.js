//  Navigators
import {
        DrawerNavigator,
        StackNavigator,
        TabNavigator }
from 'react-navigation';

import { ItemList, Item, TabA, TabB, TabC, Plain } from '../Screens';

const OpenDrawer = (props) => {
  return (
    <View>
      <TouchableOpacity
        title='Drawer'
        onPress={() => props.navigation.openDrawer()}
      >
        <Text>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

//  Stack Navigator
export const Stack = StackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
  initialRouteName: 'ItemList',
});

//  Tab Navigator
export const Tabs = TabNavigator({
  Stack: { screen: Stack },
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
  Plain: { screen: Plain },
}, {
  order: ['Stack', 'TabA', 'TabB', 'TabC', 'Plain'],
  animationEnabled: true,
  swipeEnabled: true,
});

//  Drawer Navigator
export const Drawer = DrawerNavigator({
  Tabs: { screen: Tabs },
  Stack: { screen: Stack },
  Plain: { screen: Plain },
});

export default Drawer;
