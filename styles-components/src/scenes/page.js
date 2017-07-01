import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Artboard, Text, View, StyleSheet } from 'react-sketchapp';
import chroma from 'chroma-js';

import {global, iOSSizes} from '../lib/global_styles/index.js'

//Import Components
import Card from '../components/card.js'
import NavBarTop from '../components/navbar-top.js'
import NavBarBottom from '../components/navbar-bottom.js'

//Artboard Size
let scenesize = {
  width: '375px',
  height: '667px',
}
const Container = styled.View`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default class Page extends Component{
  ArtboardOne(){
    return(
      <Artboard name="Inital View" style={iOSSizes.iphone7}>
        <View style={global.wrapper} name="Wrapper">

          <NavBarTop pagetitle="Inital View" />
          <View
            style={global.content}
            name='dude'
             />
          <NavBarBottom />

        </View>
      </Artboard>
    )
  }

  render(){
      return(
        <View>
          {this.ArtboardOne()}
        </View>
      )
    }

  }
