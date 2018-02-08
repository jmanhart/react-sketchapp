/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet, Artboard } from 'react-sketchapp';

import SettingsGroup from './SettingsGroup.js';
import SettingsRow from './SettingsRow.js';
import GroupHeader from './GroupHeader.js';
import SupportText from './SupportText.js';
import NavBar from './../NavBar.js';

import settingsGroup from './SettingsData03.js';


export default class ArtboardOne extends Component{


  render(){

      return(
        <View>
        <Artboard name='My Artboard'>
          <View style={artboard.wrapper}>
            <NavBar
              leftSideCopy="Back"
              navBarTitle="Runnng "
              rightSideCopy="Help"
              />
            <View name="View Content" style={{ paddingTop: 20, flex:1}}>

              <SettingsGroup
                isGroupHeaderVisible={settingsGroup[0].isGroupHeaderVisible}
                GroupHeaderString={settingsGroup[0].GroupHeaderString}
                dividerTopType={settingsGroup[0].rows.dividerTopType}
                leftSideType={settingsGroup[0].rows.leftSideType}
                leftSideString={settingsGroup[0].rows.leftSideString}
                rightSideType={settingsGroup[0].rightSideType}
                rightSideString={settingsGroup[0].rightSideString}
                dividerBottomType={settingsGroup[0].rows.dividerTopType}
                isSupportTextVisible= {settingsGroup[0].isSupportTextVisible}
                SuppotTextString={settingsGroup[0].SuppotTextString}
                />

            </View>
          </View>
        </Artboard>
        </View>
      )
  }
}

const artboard = StyleSheet.create({
  wrapper:{
    width: 375,
    height: 667,
    backgroundColor:'#121212',
  }
});


{/*
<GroupHeader GroupHeader={true} GroupHeaderText="settings group"/>
{
  "leftSideType":"copy",
  "leftSideString":"Setting One",
  "rightSideType":"chevron",
  "rightSideString":"1276"
},
{
  "leftSideType":"copy",
  "leftSideString":"Setting Two",
  "rightSideType":"label",
  "rightSideString":"1276"
},
*/}
