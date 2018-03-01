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

// Import Components
import RowContent from './RowContent.js'
import RowDivider from './RowDivider.js'

//Import Global Styles
import {rowHeights, colors} from './../designSystem';


export default class SettingsGroup extends Component{
  render() {
    return(
      <View name="Settings Group" style={nestedSym.container}>
        <RowContent />
      </View>
    )
  }
}

const nestedSym = StyleSheet.create({
  container:{
    width: 375,
    height: rowHeights.regular,
    backgroundColor: colors.gray01,

  }
});
