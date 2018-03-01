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
import CheckMark from '../../svg/CheckMark.js'
import Chevron from '../../svg/Chevron.js'

export default class RightSide extends Component{

  renderRightSide() {
      if(this.props.rightSideType === "chevron"){
        return(
          <CheckMark checkMarkType="on" />
        )
      }
      if(this.props.rightSideType === "label"){
        return(
          <View style={label.container}>
            <Text style={label.copy}>
               {this.props.rightSideString}
            </Text>
          </View>
        )
      }
      if(this.props.rightSideType === "labelChevron"){
        return(
          <View style={[label.container, {flexDirection:'row', alignItems:'center'}]}>
            <Text style={label.copy}>
               {this.props.rightSideString}
            </Text>
            <Chevron />
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
