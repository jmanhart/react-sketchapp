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


export default class LeftSide extends Component{

  renderLeftSideType() {
      if(this.props.leftSideType === "copy"){
        return(
          <Text style={styles.copy}>
            {this.props.leftSideString}
          </Text>
        )
      }
      if(this.props.leftSideType == "check-mark"){
        return(
          <View name="Check Mark" style={checkMark.container}>
            <View style={checkMark.checkMark} />
            <Text style={styles.copy}>
              Check Mark Type
            </Text>
          </View>
        )
      }
      else {
        return(
          <Text style={styles.copy}>
            Something Done Broke! :(
          </Text>
        )
      }
    }

  render() {
    return(
      <View
        name="Left Side Type"
        style={{
          //backgroundColor:'red',
          flex:.75,
          height: 44,
          justifyContent:'center',
          alignSelf: 'center',
        }}
        >
        {this.renderLeftSideType()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  copy: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-start',
    fontFamily: 'SF UI Text',
    marginLeft: 15,
  },
});

const checkMark = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'pink',
  },
  checkMark:{
    height: 25,
    width: 25,
    borderRadius: 20,
    backgroundColor:'green'
  }

});



{/*
  const LeftSide = (props) => (

      <View
        name="Left Side"
        style={{
          // backgroundColor:'red',
          flex:.75,
          height: 44,
          justifyContent:'center',
          alignSelf: 'center',
        }}
        >
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            flex: .5,
            alignSelf: 'flex-start',
            fontFamily: 'SF UI Text',
            marginLeft: 15,
          }}>

          This is Left
        </Text>
      </View>

  );

  export default LeftSide;
*/}
