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


export default class GroupHeader extends Component{


  render(){
    return(
      <View name="Group Header" style={rowHeader.wrapper}>
        <Text style={rowHeader.rowHeaderLabel}>
          {this.props.GroupHeaderString}
        </Text>
      </View>
    )
  }
}


const rowHeader = StyleSheet.create({
  wrapper:{
    // backgroundColor:'pink',
    height: 22,
  },
  rowHeaderLabel:{
    fontSize: 13,
    color: '#888888',
    marginLeft: 15,
    textTransform:'uppercase'
  }
});

{/*


  */}
