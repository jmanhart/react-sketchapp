/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet, Artboard } from 'react-sketchapp';

import SettingsGroup from './SettingsGroup.js';
import SettingsRow from './SettingsRow.js';
import GroupHeader from './GroupHeader.js';
import SupportText from './SupportText.js';
import NavBar from './../NavBar.js';





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
            flex:1,
          }}>

          <SettingsGroup
            groupHeader= {false}
            supportText= {false}
            />

        </View>


      </Artboard>
    )
  }
}
