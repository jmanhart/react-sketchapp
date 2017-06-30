import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render } from 'react-sketchapp';
import chroma from 'chroma-js';


let width = 375;
let height = 60;

const data = [
  { "label": "tab One", "icon":"blue"},
  { "label": "tab Two", "icon":"pink"},
  { "label": "tab Three", "icon":"red"},
  { "label": "tab Four", "icon":"white"},
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
`;

const TabTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: white;
`;


export default class NavBarBottom extends Component{
  render(){
      return(
        <NavBarContainer name= "TabBar" >
          {data.map((item) =>
            <TabColumn name= "Tab Column">
              <TabIcon name= "Tab Icon" key={item.icon} style={{ backgroundColor: item.icon }}/>
              <TabTitle name= "Tab Label" key={item.label}>
                {item.label}
              </TabTitle>
            </TabColumn>
          )}
        </NavBarContainer>
      )
    }
  }
