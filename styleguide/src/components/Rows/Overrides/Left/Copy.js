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

const Copy = (props) => (

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
        {/*this.props.label*/}
        Hi
      </Text>
    </View>

);

export default Copy;
