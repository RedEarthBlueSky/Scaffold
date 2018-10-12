//  accept props from List to return data and Markup
//  content within ListNode are passed as props children
import React from 'react';
import { Text } from 'react-native';
import Wrapper from './Wrapper';
import Section from './Section';

const Item = (props) => {
  const { title } = props.listItem;
  return (
    <Wrapper>
      <Section>
        <Text>{title}</Text>
      </Section>
    </Wrapper>
  );
};

export default Item;
