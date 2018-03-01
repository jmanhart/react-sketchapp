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
import SettingsRow from './SettingsRow.js'
import RowDivider from './RowDivider.js'




export default class SettingsGroup extends Component{
  render() {
    return(
      <View name="Settings Group" style={nestedSym.container}>
        <RowDivider />
        <SettingsRow
          />
      </View>
    )
  }
}

const nestedSym = StyleSheet.create({
  container:{
    width: 375,
    height: 44,

  }
});
