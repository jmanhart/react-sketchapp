import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Artboard, Text, View } from 'react-sketchapp';
import chroma from 'chroma-js';

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
  background-color: 'rgba(0,0,0,0.5)';
  ${scenesize};
`;

export default class Page extends Component{

  ArtboardOne(){
    return(
      <Artboard name="Inital View"
        style={{
          width: 375,
          height: 667,
          backgroundColor: 'pink',
        }}>
        <Container name="Inital View Container">
          <NavBarTop pagetitle="Inital View" />
          {/*<View
            name='Sketch Layer name'
            style={{
              flexDirection: 'row',
              width: 375,
              height: 120,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor: '#01ffae',
            }}>
            Hi Logan!
          </View>*/}
          <NavBarBottom />
        </Container>
      </Artboard>
    )
  }

  ArtboardTwo(){
    return(
      <Artboard name="Inital View"
        style={{
          width: 375,
          height: 667,
          backgroundColor: 'brown',
        }}>
        <Container name="Inital View Container">
          <NavBarTop pagetitle="Page View" />

          <NavBarBottom />
        </Container>
      </Artboard>
    )
  }

  render(){
      return(
        <View>
          {this.ArtboardOne()}
          {this.ArtboardTwo()}
        </View>
      )
    }
  }
