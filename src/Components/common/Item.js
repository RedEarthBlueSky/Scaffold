//  accept props from List to return data and Markup
//  content within ListNode are passed as props children
import React from 'react';
import { Image, Linking, View } from 'react-native';
import { Button, ItemHeader } from './index';
import styles from '../styles/itemStyles';

const Item = ({ listItem }) => {
  const { artist, title, image, thumbnail_image, url } = listItem;
  return (
    <View style={styles.containerStyle}>
      <ItemHeader
        thumbnail_image={thumbnail_image}
        artist={artist}
        title={title}
      />
      <View style={styles.sectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{ uri: image }}
        />
      </View>
      <Button
        message={'Click Me!'}
        onPress={() => Linking.openURL(url)}
        url={url}
      />
  </View>
  );
};

export { Item };
