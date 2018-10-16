import React from 'react';
import { View, Text, Image } from 'react-native';
// import { Section } from './common';
import styles from '../styles/itemHeaderStyles';

const ItemHeader = (props) => {
  const { thumbnail_image, artist, title } = props;
  const {
          headerContentStyle,
          headerText,
          sectionStyle,
          thumbNailStyle,
          thumbNailContainer
        } = styles;
  return (
    <View style={sectionStyle}>
      <View style={thumbNailContainer}>
        <Image
          source={{ uri: thumbnail_image }}
          style={thumbNailStyle}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerText}>{artist}</Text>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export { ItemHeader };
