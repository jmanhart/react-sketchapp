/* @flow */
import React from 'react';
import { Text, View } from 'react-sketchapp';

type P = {
  bold?: boolean,
  children?: any,
};
const Row = ({ bold, children }: P) => (

  <View style={{backgroundColor:'red'}}>
    <Text>Hello</Text>
  </View>

);

export default Row;


{/*
  <Text
    style={{
      color: '#333',
      fontWeight: bold ? 'bold' : 'normal',
      fontSize: 15,
      lineHeight: 24,
    }}
  >
    {children}
  </Text>
  */}
