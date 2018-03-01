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
    minHeight: 42,
    backgroundColor:'green',
    flex: 1,
    justifyContent:'center',

  },
  label:{
    marginLeft: 15,
  }
});