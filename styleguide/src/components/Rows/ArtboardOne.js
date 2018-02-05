/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet, Artboard } from 'react-sketchapp';

// import Row from './components/Row';
import SettingsRow from './SettingsRow.js';
import GroupHeader from './GroupHeader.js';
import SupportText from './SupportText.js';
import NavBar from './../NavBar.js';


const settings = [
    {
      "Left":"copy",
      "LeftSideCopy":"farting",
      "Right":"label",
      "RightSideCopy":"76578",
    },
    {
      "Left":"copy",
      "LeftSideCopy":"Setting Two",
      "Right":"chevron",
    },
    {
      "Left":"copy",
      "LeftSideCopy":"Setting Three",
      "Right":"chevron",
    },
    {
      "Left":"copy",
      "LeftSideCopy":"Getting drunk on wine",
      "Right":"label",
      "RightSideCopy":"1045",
    },
]

export default class ArtboardOne extends Component{

  render(){
    return(
      <Artboard
        name='My Artboard'
        style={{
          width: 375,
          height: 667,
          backgroundColor:'#121212',
          marginRight:200,
          //justifyContent:'center',
        }}
      >

      <NavBar
        leftSideCopy="Back"
        navBarTitle="Running Zones"
        rightSideCopy="Help"
        />

        <View name="View Content"
          style={{
            paddingTop: 20,
            // backgroundColor: 'pink',
            flex:1,
          }}>
          <View name="Settings Grouping">
            <GroupHeader GroupHeader="settings group"/>

            {settings.map((item) => {
              return(
                <SettingsRow
                  Left={item.Left}
                  LeftSideCopy={item.LeftSideCopy}
                  Right={item.Right}
                  RightSideCopy={item.RightSideCopy}
                  />
              )
            })}

            <SupportText supportText="Lorem ipsum dolor amet put a bird on it roof party disrupt bicycle rights. Portland kitsch freegan, swag coloring book biodiesel salvia cronut trust fund. Mixtape woke yuccie, banjo cornhole subway tile meh vinyl vice air plant."/>
          </View>
        </View>


      </Artboard>
    )
  }
}
