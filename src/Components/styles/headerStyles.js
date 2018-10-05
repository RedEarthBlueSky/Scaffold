import { Platform, StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  subtitleStyle: {
    color: '#fff',
    fontSize: 15,
    paddingTop: 10,
  },
  titleStyle: {
    backgroundColor: '#9ba4b2',
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#2958a0',
    elevation: 2,
    justifyContent: 'center',
    padding: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4 },
    shadowOpacity: 0.6,
    ...Platform.select({
      ios: {
        paddingTop: 25,
      },
      android: {
        paddingTop: 5,
        backgroundColor: 'blue',
      }
    })
  },
});

export default headerStyles;
