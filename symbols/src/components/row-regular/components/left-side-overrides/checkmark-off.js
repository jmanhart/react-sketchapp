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


export default class CheckMarkOff extends Component{
  render() {
    return(
      <View name="Square" style={chevron.container}>
      <View style={chevron.container}>
        {/* Adding in SVG */}
        <Svg width="22px" height="22px">
            <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="O/Check-Circle-(Off)" transform="translate(-15.000000, -11.000000)" fill="#FFFFFF">
                    <Path d="M26,33 C19.9248678,33 15,28.0751322 15,22 C15,15.9248678 19.9248678,11 26,11 C32.0751322,11 37,15.9248678 37,22 C37,28.0751322 32.0751322,33 26,33 Z M26,32 C31.5228475,32 36,27.5228475 36,22 C36,16.4771525 31.5228475,12 26,12 C20.4771525,12 16,16.4771525 16,22 C16,27.5228475 20.4771525,32 26,32 Z" id="Circle"></Path>
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
