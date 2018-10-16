import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    height: 300,
    width: null,
  },
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 3,
    padding: 5,
    position: 'relative',
  },
});

export default styles;
