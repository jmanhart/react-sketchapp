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



import LeftSide from './LeftSide.js'
import RightSide from './RightSide.js'
import Divider from './Divider.js'


export default class SettingsRow extends Component{

  renderRowContent(){
    return(
      <View name="Row Content" style={styles.content}>
        <LeftSide
          type={this.props.Left}
          LeftSideCopy={this.props.LeftSideCopy}
          />
        <RightSide
          type={this.props.Right}
          RightSideCopy={this.props.RightSideCopy}
          />
      </View>
    )
  }

  render(){
    return(
      <View name="Row Wrapper" style={styles.wrapper}>
        
          {this.renderRowContent()}
        <Divider />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'#1A1A1A',
    height: 44,
    width: 375,
    alignItems: 'flex-start',
    justifyContent: 'center',

    flexDirection:'column',
    // borderTopWidth: .5,
    // borderBottomWidth:.5,
    // borderColor: '#555555',
  },
  content:{
    //backgroundColor:'pink',
    flexDirection:'row',
    flex:1,
  }
});

const divider = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor:'#555555',
    alignSelf:'stretch',
  },
  inset:{
    marginLeft: 16,
  },
  inset02:{
    marginLeft: 26,
  },
  inset03:{
    marginLeft: 36,
  },
});

{/*

  renderRowContent(){
    return(
      <View name="Row Content" style={styles.content}>
        <LeftSide
          type={this.props.Left}
          LeftSideCopy={this.props.LeftSideCopy}
          />
        <RightSide
          type={this.props.Right}
          RightSideCopy={this.props.RightSideCopy}
          />
      </View>
    )
  }

  renderRowType(){
    if(this.props.RowKind == "top"){
      return(
        <View>
          <View name="Row Divider Top" style={[divider.divider]} />
          {this.renderRowContent()}
        </View>
      )
    }
    if(this.props.type == "bottom"){
      return(
        <View>
          {this.renderRowContent()}
          <View name="Row Divider Bottom" style={[divider.divider, divider.inset]} />
        </View>
      )
    }
  }


<View name="Row Divider Top" style={divider.divider} />

<View name="Row Divider Bottom" style={[divider.divider, divider.inset]} />

  const SettingsRow = () => (

    <View
      name="Row Container"
      style={styles.container}>

      <LeftSide type='copy'/>
      <Chevron />

    </View>

  );

  export default SettingsRow;

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
