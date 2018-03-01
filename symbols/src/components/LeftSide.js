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
      <View
        name="Square"
        style={leftSide.content}
      >
        <Text name="Left Side Label">Left Side</Text>
      </View>
    )
  }
}


const leftSide = StyleSheet.create({
  content:{
    width: 100,
    height: 44,
    backgroundColor:'blue',
    flex: 1,
  }
});