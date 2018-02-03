/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-sketchapp';

import {
  Svg,
  Circle,
  Rect,
  Line,
  G,
  Polygon
} from 'react-primitives-svg';


export default class LeftSide extends Component{


  renderLeftSide() {
      if(this.props.type == "dude"){
        return(
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              flex: .5,
              alignSelf: 'flex-start',
              fontFamily: 'SF UI Text',
              marginLeft: 15,
            }}>

            This is Left Awesome!
          </Text>
        )
      } else {
        return(
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              flex: .5,
              alignSelf: 'flex-start',
              fontFamily: 'SF UI Text',
              marginLeft: 15,
            }}>
            Fart Hole
          </Text>
        )
      }
    }

  render() {
    return(
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
        {this.renderLeftSide()}
      </View>
    )
  }
}





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
