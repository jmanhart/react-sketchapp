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



const Chevron = () => (


    <View
      name="Right Side"
      style={{
        backgroundColor:'green',
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
        }} >

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


);

export default Chevron;
