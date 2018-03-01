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
import {rowHeights, colors} from './../../../../lib/design-system.js';


export default class Chevron extends Component{
  render() {
    return(
      <View name="Square" style={chevron.container}>

      </View>
    )
  }
}


const chevron = StyleSheet.create({
  container:{
    width: rowHeights.regular,
    height: rowHeights.regular,
    backgroundColor: colors.gray02
  }
});
