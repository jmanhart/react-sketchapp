import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Image, View, StyleSheet, Text } from 'react-sketchapp';
import chroma from 'chroma-js';

//Import Global Styles
import {global, shadows, labels, fpo} from './../../lib/global_styles/index.js'


export default class RowContainer extends Component{
  render(){
      return(
        <View >
          <Text>Hello</Text>
        </View>
      )
    }
  }

const rowcontainer = StyleSheet.create({
  card:{
    backgroundColor:'rgba(255,255,255,1)',
    flex: 3,
    alignSelf: 'stretch',
    margin: 10,
    borderRadius: 3,
  },
  rowContainer: {
    height: 100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 0,
  },
  avatarContainter:{
    backgroundColor:'rgba(0,0,0,0.15)',
    margin:0,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  avatar:{
    backgroundColor:'pink',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  copyContainer:{
    backgroundColor:'rgba(0,0,0,0.15)',
    height: 50,
    margin:10,
    flex:3,
    justifyContent:'center',
  },
});
