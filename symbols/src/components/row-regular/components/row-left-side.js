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

//Import Global Styles
import {rowHeights, colors} from './../../../lib/design-system.js';

//Import Components
import Chevron from  './left-side-overrides/chevron.js'

// Creating & Exposing the Overrides for the Symbol Page
const ChevronSym = makeSymbol(Chevron, 'dude / boom');

export default class RowLeftSide extends Component{
  render() {
    return(
      <View name="Square" style={leftSide.content}>
        <ChevronSym />
        {/*<Text name="Left Side Label" style={leftSide.label}>Left Sid label</Text>*/}
      </View>
    )
  }
}


const leftSide = StyleSheet.create({
  content:{
    width: 200,
    minHeight: rowHeights.regular,
    backgroundColor: null,
    flex: 1,
    justifyContent:'center',

  },
  label:{
    marginLeft: 15,
    color: colors.white,
  }
});
