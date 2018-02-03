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


export default class RightSide extends Component{

  renderRightSide() {
      if(this.props.type == "chevron"){
        return(
          <View >

            {/* Adding in SVG */}
            <Svg width="8px" height="14px" >
                <G id="O/Chevron" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-100.000000, -15.000000)">
                    <G id="Pin" transform="translate(100.000000, 15.500000)" fill="#555555">
                        <Polygon id="Disclosure-Indicator" points="0 1.5 1.5 0 8 6.5 1.5 13 0 11.5 5 6.5"></Polygon>
                    </G>
                </G>
            </Svg>

          </View>
        )
      }
      else {
        return(
          <Text style={styles.copy}>
             :(
          </Text>
        )
      }
    }

  render() {
    return(
      <View
        name="Right Side"
        style={{
          // backgroundColor:'green',
          flex:.25,
          width: 100,
          height: 44,
          alignSelf: 'center',
          alignItems:'flex-end',
          justifyContent:'center',
        }}>
        {this.renderRightSide()}
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
