import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContentStyle: {
    backgroundColor: '#f7eff1',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  thumbNailStyle: {
    height: 50,
    width: 50,
  },
  thumbNailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 3,
    padding: 5,
    position: 'relative',
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
