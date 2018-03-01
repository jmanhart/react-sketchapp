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
import RowLeftSide from './components/row-left-side.js'
import RowRightSide from './components/row-right-side.js'
import RowDivider from './components/row-divider.js'

// Expose & make the symbol - This adds to the Symbol Page
const RowLeftSideSym = makeSymbol(RowLeftSide, 'squares / red');
const RowRightSideSym = makeSymbol(RowRightSide, 'squares / blue');

//Import Global Styles
import {rowHeights, colors} from './../../lib/design-system.js';


export default class RowRegular extends Component{
  render() {
    return(
      <View name="Settings Row" style={rowContent.container}>
        <RowDivider />
          <View style={rowContent.content}>
            <RowLeftSideSym
              name="Left Side"
            />
            <RowRightSideSym
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
