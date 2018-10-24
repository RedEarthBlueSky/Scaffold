import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { HomeScreen, ListsScreen, LoginScreen, UsersScreen } from '../Screens';
import ListScrollView from '../Components/ListScrollView';

const DrawerNavigator = () => {
  return (
    <AppDrawerNavigator />
  );
};

const tnq = require('../images/TNQ.jpg');

const CustomDrawerComponent = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.safeAreaViewStyles}>
        <View style={styles.headerStyle}>
          <Image
            style={styles.imageStyle}
            source={tnq}
          />
          <Text>Drawer Header</Text>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Lists: {
      screen: ListsScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Users: {
      screen: UsersScreen,
    },
    ListScroll: {
      screen: ListScrollView,
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: '#cadbf7',
    navigationOptions: {
      title: 'navigation title',
    }
  }
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#79a7f2',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 60,
    flex: 1,
    height: 120,
    width: 120,
  },
  safeAreaViewStyles: {
    flex: 1,
  },
});

export default DrawerNavigator;
