import React, { PropTypes, Component } from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
  StyleSheet,
} from 'react-sketchapp';

//Import Global Styles
import {rowHeights, colors} from './../../../lib/design-system.js';

export default class RowDivider extends Component{
  render() {
    return(
      <View
        name="Divider"
        style={rowDivider.content}
      >
      </View>
    )
  }
}


const rowDivider = StyleSheet.create({
  content:{
    display: 'flex',
    width: 375,
    height: rowHeights.dude,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'flex-end',
  },
});
