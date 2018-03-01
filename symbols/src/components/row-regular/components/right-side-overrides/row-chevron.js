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


export default class RowChevron extends Component{
  render() {
    return(
      <View name="Square" style={chevron.container}>
      <View style={chevron.container}>
        {/* Adding in SVG */}
        <Svg width="8px" height="14px" >
            <G id="O/Chevron" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-100.000000, -15.000000)">
                <G id="Pin" transform="translate(100.000000, 15.500000)" fill="#555555">
                    <Polygon id="Disclosure-Indicator" points="0 1.5 1.5 0 8 6.5 1.5 13 0 11.5 5 6.5"></Polygon>
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
