import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Image } from 'react-sketchapp';
import chroma from 'chroma-js';


let width = 375;
let height = 60;

const data = [
  { "label": "tab 01", "icon":"blue", "image":"https://jmanhart.github.io/react-sketchapp/public/images/icon.png",},
  { "label": "tab 02", "icon":"pink", "image":"https://jmanhart.github.io/react-sketchapp/public/images/icon.png",},
  { "label": "tab 03", "icon":"red", "image":"https://jmanhart.github.io/react-sketchapp/public/images/icon.png",},
  { "label": "tab 04", "icon":"red", "image":"https://jmanhart.github.io/react-sketchapp/public/images/icon.png",},

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
  width: 30px;
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
              <TabIcon name= "Tab Icon" key={item.icon} style={{ backgroundColor: item.icon }}>
                <Image
                  key={item.image}
                  source={item.image}
                  resizeMode='contain'
                  style={{
                    height: 30,
                    width: 30,
                  }}
              />
            </TabIcon>
              <TabTitle name= "Tab Label" key={item.label}>
                {item.label}
              </TabTitle>
            </TabColumn>
          )}
        </NavBarContainer>
      )
    }
  }
