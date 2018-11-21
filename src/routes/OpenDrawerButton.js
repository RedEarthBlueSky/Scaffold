import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from '../Screens/styles/screenStyles';

const OpenDrawerButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        title='Drawer'
        onPress={() => props.navigation.openDrawer()}
        style={styles.buttonWrapper}
      >
        <Entypo name='menu' color='#000' size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default OpenDrawerButton;
