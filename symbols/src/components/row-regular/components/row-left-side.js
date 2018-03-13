import React, { PropTypes, Component } from 'react';
import { Artboard, makeSymbol, render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';

//Import Global Styles
import {rowHeights, colors} from './../../../lib/design-system.js';

//Import Components
import CheckMarkOn from './left-side-overrides/checkmark-on.js';
import CheckMarkOff from './left-side-overrides/checkmark-off.js';
import RedBlueAdd from './left-side-overrides/redblue-add.js';
import RedBlueRemove from './left-side-overrides/redblue-remove.js';

// Creating & Exposing the Overrides for the Symbol Page
const CheckMarkOnSym = makeSymbol(CheckMarkOn, 'icon / check-mark / on');
const CheckMarkOffSym = makeSymbol(CheckMarkOff, 'icon / check-mark / off');
const RedBlueAddSym = makeSymbol(RedBlueAdd, 'icon / red-blue / add');
const RedBlueRemoveSym = makeSymbol(RedBlueRemove, 'icon / red-blue /remove');

export default class RowLeftSide extends Component{
  render() {
    return(
      <View name="Square" style={leftSide.content}>
        <CheckMarkOffSym />
        <Text name="Left Side Label" style={leftSide.label}>Setting Label</Text>
      </View>
    )
  }
}


const leftSide = StyleSheet.create({
  content:{
    width: 200,
    minHeight: rowHeights.regular,
    backgroundColor: null,
    justifyContent:'flex-start',
    alignItems: 'center',
    flexDirection: 'row',

  },
  label:{
    marginLeft: 15,
    color: colors.white,
  }
});
