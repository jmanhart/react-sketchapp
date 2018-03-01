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


export default class RightSide extends Component{
  render() {
    return(
      <View
        name="Square"
        style={divider.square}
      >
        <Text name="Right Side Label">Righttt Side</Text>
      </View>
    )
  }
}


const divider = StyleSheet.create({
  square:{
    display: 'flex',
    width: 100,
    height:44,
    backgroundColor:'yellow',

  
  }
});
