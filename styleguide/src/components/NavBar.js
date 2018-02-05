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


export default class NavBar extends Component{

  render(){
    return(
      <View name="Nav Bar" style={navBar.wrapper} >

      </View>
    )
  }
}


const navBar = StyleSheet.create({
  wrapper:{
    height: 64,
    width: 375,
    backgroundColor:'#0C0C0C',
    borderBottomWidth:1,
    borderColor: '#11A9ED',
  }
});
