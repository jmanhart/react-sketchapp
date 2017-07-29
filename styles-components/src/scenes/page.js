import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Artboard, Text, View, StyleSheet, Image } from 'react-sketchapp';
import chroma from 'chroma-js';

import {global, iOSSizes} from '../lib/global_styles/index.js'

//Import Components
import NavBarTop from '../components/navbar-top.js'
import NavBarBottom from '../components/navbar-bottom.js'
import RowProfile from '../components/row-profile.js'
import RowContainer from '../components/rows/row-container.js'


export default class Page extends Component{
  ArtboardOne(){
    return(
      <Artboard name="Inital View" style={iOSSizes.iphone7}>
        <View style={global.wrapper} name="Wrapper">
          <NavBarTop pagetitle="Inital View" />

            <View style={global.content} name='Content'>
              <RowContainer />
            </View>

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
