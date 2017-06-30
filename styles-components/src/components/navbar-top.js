import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render } from 'react-sketchapp';
import chroma from 'chroma-js';



const NavBarContainer = styled.View`
  height: 60px;
  width: 375px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: white;
`;


export default class NavBarTop extends Component{
  render(){
      return(
        <NavBarContainer>
          <PageTitle>
            {this.props.pagetitle}
          </PageTitle>
        </NavBarContainer>
      )
    }
  }
