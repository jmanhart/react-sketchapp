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
import RowDivider from './RowDivider.js'

// Expose & make the symbol - This adds to the Symbol Page
const LeftSideSym = makeSymbol(LeftSide, 'squares / red');
const RightSideSym = makeSymbol(RightSide, 'squares / blue');

//Import Global Styles
import {rowHeights, colors} from './../designSystem';


export default class RowContent extends Component{
  render() {
    return(
      <View name="Settings Row" style={rowContent.container}>
        <RowDivider />
          <View style={rowContent.content}>
            <LeftSideSym
              name="Left Side"
            />
            <RightSideSym
                name="Right Side"
              />
          </View>
        <RowDivider />
      </View>
    )
  }
}

const rowContent = StyleSheet.create({
  container:{
    width: 375,
    height: rowHeights.regular,
    backgroundColor:colors.gray01,
    flexDirection: 'column',
  },
  content:{
    flexDirection: 'row',
  }
});
