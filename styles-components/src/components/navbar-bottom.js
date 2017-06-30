import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render } from 'react-sketchapp';
import chroma from 'chroma-js';


let width = 375;
let height = 60;

const data = [
  { "label": "tab One"},
  { "label": "tab Two"},
  { "label": "tab Three"},
  { "label": "tab Four"},
]

const NavBarContainer = styled.View`
  height: ${height};
  width: ${width};
  background-color: 'rgba(0,0,0,0.5)';
  justify-content: flex-start;
  align-items: center;
  flex-direction:row;
`;

const TabColumn = styled.Text`
  height: 60px;
  width: ${width/4};
  background-color: 'rgba(0,0,0,0.5)';
  align-items: center;
  justify-content: space-around;
`;

const TabIcon = styled.Text`
  height: 30px;
  width: 40px;
  border-radius: 40;
  background-color:'rgba(255,255,255,0.5)';
`;

const TabTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: white;
`;


export default class NavBarBottom extends Component{
  render(){
      return(
        <NavBarContainer>
          {data.map((item) =>
            <TabColumn>
              <TabIcon />
              <TabTitle key={item.label}>
                {item.label}
              </TabTitle>
            </TabColumn>
          )}
        </NavBarContainer>
      )
    }
  }
