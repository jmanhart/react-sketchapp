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

//Import Components
import RowChevron from  './right-side-overrides/row-chevron.js'

// Creating & Exposing the Overrides for the Symbol Page
const RowChevronSym = makeSymbol(RowChevron, 'icon / chevron');

export default class RowRightSide extends Component{
  render() {
    return(
      <View
        name="Square"
        style={rightSide.content}>
        {/*<Text name="Right Side Label" style={rightSide.label}>Right Side</Text>*/}
        <RowChevronSym />
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
    justifyContent:'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label:{
    marginRight: 15,
    textAlign: 'right',
    justifyContent:'center',
    alignItems:'center',
    color: colors.white,


  }
});
