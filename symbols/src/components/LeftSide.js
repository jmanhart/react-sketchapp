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
import {rowHeights, colors} from './../designSystem';


export default class LeftSide extends Component{
  render() {
    return(
      <View name="Square" style={leftSide.content}>
        <Text name="Left Side Label" style={leftSide.label}>Left Side Label</Text>
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