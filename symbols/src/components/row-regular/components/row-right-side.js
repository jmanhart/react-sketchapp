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

export default class RowRightSide extends Component{
  render() {
    return(
      <View
        name="Square"
        style={rightSide.content}>
        <Text name="Right Side Label" style={rightSide.label}>Right Side</Text>
      </View>
    )
  }
}


const rightSide = StyleSheet.create({
  content:{
    display: 'flex',
    width: 175,
    minHeight: rowHeights.regular,
    backgroundColor: null,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  label:{
    marginRight: 15,
    textAlign: 'right',
    justifyContent:'center',
    alignItems:'center',
    color: colors.white,


  }
});
