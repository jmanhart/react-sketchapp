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
      <View name="Support Text" style={supportText.wrapper}>
        <Text style={supportText.copy}>{this.props.supportText}</Text>
      </View>
    )
  }
}


const supportText = StyleSheet.create({
  wrapper:{

  },
  copy:{
    color:'#888888',
    fontSize: 13,
    marginLeft: 16,
    marginTop: 9,
  }
});
