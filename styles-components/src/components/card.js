import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render } from 'react-sketchapp';
import chroma from 'chroma-js';



const SwatchTile = styled.View`
  height: 250px;
  width: 250px;
  border-radius: 4px;
  margin: 4px;
  background-color: pink;
  justify-content: center;
  align-items: center;
`;

const SwatchName = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;


export default class Card extends Component{
  render(){
      return(
        <SwatchTile>
          <SwatchName>
            Hello
          </SwatchName>
        </SwatchTile>
      )
    }
  }
