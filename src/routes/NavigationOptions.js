import React from 'react';
import { View } from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import TabsNavigator from './TabsNavigator';

const NavigationOptions = () => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerNavigator />
        <TabsNavigator />
      </View>
    );
};

export default NavigationOptions;
