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


export default class Divider extends Component{

  render(){
    return(
      <View name="Row Divider Top" style={[divider.divider, divider.inset]} />
    )
  }
}


const divider = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor:'yellow',
    alignSelf:'stretch',
  },
  inset:{
    marginLeft: 16,
  }
});

{/*
  renderDividerType(){

      if(this.props.type == "top"){
        return(
          <View name="Row Divider Top" style={[divider.divider, divider.inset]} />
        )
      } else {
        return(
          <View>

          </View>
        )
      }

  }

  */}
