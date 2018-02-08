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

  renderDivider(){
    if(this.props.dividerTopType === "full"){
      return(
        <View name="Row Divider Top" style={[divider.divider]} />
      )
    }
    if(this.props.dividerTopType === "inset"){
      return(
        <View name="Row Divider Top" style={[divider.divider, divider.inset]} />
      )
    }
    if(this.props.dividerBottomType === "inset"){
      return(
        <View name="Row Divider Top" style={[divider.divider, divider.inset]} />
      )
    }
    if(this.props.dividerBottomType === "full"){
      return(
        <View name="Row Divider Top" style={[divider.divider]} />
      )
    }
  }

  render(){
    return(
      <View name="Look Here" style={{width:375}}>
        {this.renderDivider()}
      </View>
    )
  }
}


const divider = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor:'#555555',
    alignSelf:'stretch',
  },
  inset:{
    marginLeft: 15,
  }
});

{/*
  <View name="Row Divider Top" style={[divider.divider, divider.inset]} />
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
