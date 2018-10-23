import React from 'react';
import { View } from 'react-native';
// import TabsNavigator from './TabsNavigator';
import DrawerNavigator from './DrawerNavigator';

const NavigationOptions = () => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerNavigator />
      {/* <TabsNavigator /> */}
      </View>
    );
};

export default NavigationOptions;
