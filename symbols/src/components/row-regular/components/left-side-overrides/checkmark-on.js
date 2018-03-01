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


export default class CheckMarkOn extends Component{
  render() {
    return(
      <View name="Square" style={chevron.container}>
      <View style={chevron.container}>
        {/* Adding in SVG */}
        <Svg width="22px" height="22px" >
            <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="O/Check-Circle-(On)" transform="translate(-15.000000, -11.000000)">
                    <G id="Float" transform="translate(15.000000, 11.000000)">
                        <Circle id="Circle" fill="#11A9ED" cx="11" cy="11" r="11"></Circle>
                        <Polyline id="Check" stroke="#FFFFFF" stroke-width="2" points="5.5 11.5 9 15 17 7"></Polyline>
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
