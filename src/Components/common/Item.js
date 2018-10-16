//  accept props from List to return data and Markup
//  content within ListNode are passed as props children
import React from 'react';
import { Image, Linking } from 'react-native';
import { Button, ItemHeader, Section, Main } from './index';
import styles from '../styles/itemStyles';

const Item = ({ listItem }) => {
  const { artist, title, image, thumbnail_image, url } = listItem;
  return (
    <Main>
      <ItemHeader
        thumbnail_image={thumbnail_image}
        artist={artist}
        title={title}
      />
      <Section>
        <Image
          style={styles.imageStyle}
          source={{ uri: image }}
        />
      </Section>
      <Section>
        <Button
          message={'Click Me!'}
          onPress={() => Linking.openURL(url)}
          url={url}
        />
      </Section>
  </Main>
  );
};

export { Item };
