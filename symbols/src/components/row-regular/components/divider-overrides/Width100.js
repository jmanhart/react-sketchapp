import React, { PropTypes, Component } from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
  StyleSheet
} from 'react-sketchapp';

import {
  Svg,
  Circle,
  Rect,
  Line,
  G,
  Path,
  Polygon,
  Polyline
} from 'react-primitives-svg';

//Import Global Styles
import {rowHeights, colors} from './../../../../lib/design-system.js';


export default class Width100 extends Component{
  render() {
    return(
      <View name="Width 100" style={width100.container}>

      </View>
    )
  }
}


const width100 = StyleSheet.create({
  container:{
    width: rowHeights.regular,
    height: rowHeights.regular,
    backgroundColor: colors.gray01,
    justifyContent:'center',
    alignItems: 'center',
  }
});
