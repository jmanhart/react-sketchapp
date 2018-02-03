/* @flow */
import React from 'react';
import { Text, View } from 'react-sketchapp';

import {
  Svg,
  Circle,
  Rect,
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
        Hello
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
          marginRight: 15,
          backgroundColor:'pink',
          justifyContent:'center',
          alignItems:'center',
        }}>

        <Svg
          width="20"
          height="30">
          <Rect
            width="20"
            height="30"
            stroke="blue"
            strokeWidth="2"
            fill="teal"
          />
        </Svg>

      </View>

    </View>


  </View>

);

export default Row;


{/*

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
