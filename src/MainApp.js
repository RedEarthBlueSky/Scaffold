import { StackNavigator } from 'react-navigation';
import { HomeScreen, ListsScreen, LoginScreen } from './Screens';

const MainApp = StackNavigator({
  Home: { screen: HomeScreen },
  Lists: { screen: ListsScreen },
  Login: { screen: LoginScreen },
}, {
  initialRouteName: 'Home',
});

export default MainApp;
