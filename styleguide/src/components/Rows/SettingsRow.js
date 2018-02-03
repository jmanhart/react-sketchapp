/* @flow */
import React from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp';

import {
  Svg,
  Circle,
  Rect,
  Line,
  G,
  Polygon
} from 'react-primitives-svg';

import Copy from './Overrides/Left/Copy.js'
import Chevron from './Overrides/Right/Chevron.js'

import LeftSide from './LeftSide.js'

const SettingsRow = () => (

  <View
    name="Row Container"
    style={styles.container}>

    <LeftSide type="check-mark"/>
    <Chevron />

  </View>

);

export default SettingsRow;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#121212',
    height: 44,
    width: 375,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex:1,
    flexDirection:'row',
    borderTopWidth: .5,
    borderBottomWidth:.5,
    borderColor: '#555555',
  }

});


{/*

<Line x1="10" x2="50" y1="0" y2="0" stroke="orange" stroke-width="5"/>
  <Rect
    width="10"
    height="10"
    fill="red"
    transform="rotate(45)"
  />

  paddingLeft: 15,
  borderTopWidth: .5,
  borderBottomWidth:.5,
  borderColor: '#555555',

  type P = {
    bold?: boolean,
    children?: any,
  };
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
