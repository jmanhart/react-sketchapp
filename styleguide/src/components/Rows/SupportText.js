/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet, } from 'react-sketchapp';

import {
  Svg,
  Circle,
  Rect,
  Line,
  G,
  Polygon
} from 'react-primitives-svg';


export default class SupportText extends Component{

  render(){
    return(
      <View name="Row Divider Top" >
        <Text style={supportText.copy}>{this.props.supportText}</Text>
      </View>
    )
  }
}


const supportText = StyleSheet.create({
  copy:{
    color:'white',
  }
});
