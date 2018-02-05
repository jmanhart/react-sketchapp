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


// Importing Assets
import Chevron from './../svg/Chevron.js'

export default class NavBar extends Component{
  renderNavBar(){

  }
  render(){
    return(
      <View name="Nav Bar" style={navBar.wrapper}>

        <View name="Nav Bar Left" style={navBar.navBarColumnSides}>
          <Text style={[navBar.sideTitle, {textAlign:'left'}]}>{this.props.leftSideCopy}</Text>
        </View>

        <View name="Nav Bar Center" style={navBar.navBarColumnTitle}>
          <Text name="Nav Bar Title" style={[navBar.title, {textAlign:'center'}]}>{this.props.navBarTitle || 'Need Title'}</Text>
        </View>

        <View name="Nav Bar Right" style={navBar.navBarColumnSides}>
          <Text style={[navBar.sideTitle, {textAlign:'right'}]}>{this.props.rightSideCopy}</Text>
        </View>

      </View>
    )
  }
}


const navBar = StyleSheet.create({
  wrapper:{
    height: 64,
    width: 375,
    backgroundColor:'#0C0C0C',
    borderBottomWidth:1,
    borderColor: '#11A9ED',
    justifyContent:'space-between',
    alignItems:'flex-end',
    flexDirection:'row',
    paddingBottom: 10,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },

  navBarColumnSides:{
    flex:.15,
    // backgroundColor:'red',
  },

  navBarColumnTitle:{
    flex:.65,
    // backgroundColor:'pink',
  },

  title:{
    color: 'white',
    fontSize: 17,
  },

  sideTitle:{
    color: 'white',
    fontSize: 15,
  },

});
