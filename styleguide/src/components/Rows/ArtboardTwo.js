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
      "LeftSideCopy":"Setting One",
      "Right":"label",
      "RightSideCopy":"8609",
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

export default class ArtboardTwo extends Component{

  render(){
    return(
      <Artboard
        name='My Artboard'
        style={{
          width: 375,
          height: 667,
          backgroundColor:'#121212',
          //justifyContent:'center',
        }}
      >

      <NavBar
        leftSideCopy="Back"
        navBarTitle="Activity Options"
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
            <SupportText supportText="Hello Julie Cannssnoddn"/>
          </View>
        </View>


      </Artboard>
    )
  }
}
