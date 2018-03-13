import React, { PropTypes, Component } from 'react';
import { render,  makeSymbol } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';

// Import Components
import RowRegular from './row-regular/row-regular.js'
import RowDivider from './row-regular/components/row-divider.js'

//Import Global Styles
import {rowHeights, colors} from './../designSystem';


export default class SettingsGroup extends Component{
  render() {
    return(
      <View name="Settings Group" style={nestedSym.container}>
          <RowRegular />
      </View>
    )
  }
}

const nestedSym = StyleSheet.create({
  container:{
    width: 375,
    backgroundColor: colors.gray01,
  },
});
