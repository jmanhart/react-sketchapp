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


export default class RedBlueRemove extends Component{
  render() {
    return(
      <View name="Square" style={chevron.container}>
      <View style={chevron.container}>
        {/* Adding in SVG */}
        <Svg width="22px" height="22px" viewBox="0 0 22 22">
            <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="O/Remove" transform="translate(-14.000000, -11.000000)">
                    <G id="Left-Icon" transform="translate(14.000000, 11.000000)">
                        <Circle id="Circle" fill="#D0021B" cx="11" cy="11" r="11"></Circle>
                        <Polygon id="ion-minus---Ionicons" fill="#FFFFFF" points="5 11.6875 5 9.5625 17.75 9.5625 17.75 11.6875"></Polygon>
                    </G>
                </G>
            </G>
        </Svg>
      </View>
      </View>
    )
  }
}


const chevron = StyleSheet.create({
  container:{
    width: rowHeights.regular,
    height: rowHeights.regular,
    backgroundColor: colors.gray01,
    justifyContent:'center',
    alignItems: 'center',
  }
});
