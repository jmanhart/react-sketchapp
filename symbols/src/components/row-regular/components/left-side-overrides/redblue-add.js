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
  Polyline,
  Ellipse
} from 'react-primitives-svg';

//Import Global Styles
import {rowHeights, colors} from './../../../../lib/design-system.js';


export default class RedBlueAdd extends Component{
  render() {
    return(
      <View name="Square" style={chevron.container}>
      <View style={chevron.container}>
        {/* Adding in SVG */}
        <Svg width="22px" height="22px" viewBox="0 0 22 22">
            <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="O/Add" transform="translate(-14.000000, -11.000000)">
                    <G id="Left-Icon" transform="translate(14.000000, 11.000000)">
                        <Ellipse id="Circle" fill="#4A90E2" cx="10.56" cy="11" rx="10.56" ry="11"></Ellipse>
                        <Polygon id="ion-plus---Ionicons" fill="#FFFFFF" points="16.32 10 16.32 12 11.52 12 11.52 17 9.6 17 9.6 12 4.8 12 4.8 10 9.6 10 9.6 5 11.52 5 11.52 10"></Polygon>
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
