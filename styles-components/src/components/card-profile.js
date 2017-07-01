import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Image, StyleSheet } from 'react-sketchapp';
import chroma from 'chroma-js';

//Import Global Styles
import {global, shadows} from '../lib/global_styles/index.js'

const Card = styled.Text`

`;


export default class CardProfile extends Component{
  render(){
      return(
        <Card style={[styles.card, shadows.cardOne]}>

        </Card>
      )
    }
  }

const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    flex: 1,
    alignSelf: 'stretch',
    margin: 20,
    borderRadius: 3,
  }
});
