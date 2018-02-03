/* @flow */
import React from 'react';
import { Text, View } from 'react-sketchapp';

import {
  Svg,
  Circle,
  Rect,
  Line,
  G,
  Polygon
} from 'react-primitives-svg';

const Row = () => (

  <View
    name="Row Container"
    style={{
      backgroundColor:'#121212',
      height: 44,
      width: 375,
      alignItems: 'flex-start',
      justifyContent: 'center',
      flex:1,
      flexDirection:'row',
      borderTopWidth: .5,
      borderBottomWidth:.5,
      borderColor: '#555555',

    }}>

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
        Hell
      </Text>
    </View>

    <View
      name="Right Side"
      style={{
        backgroundColor:'yellow',
        flex:.25,
        width: 100,
        height: 44,
        alignSelf: 'center',
        alignItems:'flex-end',
        justifyContent:'center',

      }}>
      <View
        name="Chevron"
        style={{
          height: 44,
          width: 44,
          marginRight: 0,
          backgroundColor:'pink',
          justifyContent:'center',
          alignItems:'center',
        }}>


        {/* Adding in SVG */}
        <Svg width="8px" height="14px" >
            <G id="O/Chevron" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-100.000000, -15.000000)">
                <G id="Pin" transform="translate(100.000000, 15.500000)" fill="#555555">
                    <Polygon id="Disclosure-Indicator" points="0 1.5 1.5 0 8 6.5 1.5 13 0 11.5 5 6.5"></Polygon>
                </G>
            </G>
        </Svg>

      </View>

    </View>


  </View>

);

export default Row;


{/*

<Line x1="10" x2="50" y1="0" y2="0" stroke="orange" stroke-width="5"/>
  <Rect
    width="10"
    height="10"
    fill="red"
    transform="rotate(45)"
  />

  paddingLeft: 15,
  borderTopWidth: .5,
  borderBottomWidth:.5,
  borderColor: '#555555',

  type P = {
    bold?: boolean,
    children?: any,
  };
  <Text
    style={{
      color: '#333',
      fontWeight: bold ? 'bold' : 'normal',
      fontSize: 15,
      lineHeight: 24,
    }}
  >
    {children}
  </Text>
  */}
