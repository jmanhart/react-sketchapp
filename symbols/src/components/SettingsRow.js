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
import LeftSide from './LeftSide.js'
import RightSide from './RightSide.js'

// Expose & make the symbol - This adds to the Symbol Page
const LeftSideSym = makeSymbol(LeftSide, 'squares / red');
const RightSideSym = makeSymbol(RightSide, 'squares / blue');


export default class SettingsRow extends Component{
  render() {
    return(
      <View name="Settings Row" style={settingsRow.container}>
        <LeftSideSym
          name="Left Side"
          style={{flex:6}}
        />
        <RightSideSym
            name="Right Side"
            style={{flex:4}}
          />
      </View>
    )
  }
}

const settingsRow = StyleSheet.create({
  container:{
    width: 375,
    height: 44,
    backgroundColor:'pink',
    flexDirection: 'row',
  }
});
