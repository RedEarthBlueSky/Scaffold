//  accept props from List to return data and Markup
//  content within ListNode are passed as props children
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Wrapper from './Wrapper';
import Section from './Section';
import ItemHeader from './ItemHeader';
import styles from './styles/itemStyles';

const Item = ({ listItem }) => {
  const { artist, title, image, thumbnail_image } = listItem;
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Item;
