/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp';

import {
  Svg,
  Circle,
  Rect,
  Line,
  G,
  Polygon
} from 'react-primitives-svg';

// Importing Assets
import Chevron from '../../svg/Chevron.js'

export default class RightSide extends Component{

  renderRightSide() {
      if(this.props.type == "chevron"){
        return(
          <Chevron />
        )
      }
      if(this.props.type == "label"){
        return(
          <View style={label.container}>
            <Text style={label.copy}>
               {this.props.RightSideCopy}
            </Text>
          </View>
        )
      }
      else {
        return(
          <Text style={rightSide.copy}>
             :(
          </Text>
        )
      }
    }

  render() {
    return(
      <View
        name="Right Side"
        style={rightSide.container}>
        {this.renderRightSide()}
      </View>
    )
  }
}

{/* Right side styles*/}
const rightSide = StyleSheet.create({
  container: {
    //backgroundColor:'pink',
    flex:.25,
    height: 44,
    alignSelf: 'center',
    alignItems:'flex-end',
    justifyContent:'center',
  },
  copy: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-start',
    fontFamily: 'SF UI Text',
    marginLeft: 15,
  },
});

{/* Chevron Styles */}
const chevron = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    //backgroundColor:'blue',
    marginRight: 22,
  },
});

{/* Label Styles */}
const label = StyleSheet.create({
  container:{
    height: 44,
    alignSelf: 'center',
    alignItems:'flex-end',
    justifyContent:'center',
    // backgroundColor:'teal',
  },
  copy: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-start',
    fontFamily: 'SF UI Text',
    marginLeft: 15,
  },
});
