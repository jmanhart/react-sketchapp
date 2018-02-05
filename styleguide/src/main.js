/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Text, Artboard, StyleSheet } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

//Import Artboards
import ArtboardOne from './components/Rows/ArtboardOne.js'
import ArtboardTwo from './components/Rows/ArtboardOne.js'

// import Row from './components/Row';
// import SettingsRow from './components/Rows/SettingsRow.js';
// import GroupHeader from './components/Rows/GroupHeader.js';
// import SupportText from './components/Rows/SupportText.js';
// import NavBar from './components/NavBar.js';

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';



const Document = ({ system }: { system: DesignSystem }) => (
  <View
    name="Settings Group"
    style={{
      width: 2000,
      height: 1200,
      backgroundColor:'gray',
      flexDirection: 'row',
      // justifyContent:'space-between',
      padding: 50
    }}>
    <ArtboardOne />
    <ArtboardOne />
    <ArtboardTwo />
  </View>
);


const dude = StyleSheet.create({

});

export default () => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts
  );

  render(<Document system={designSystem} />, context.document.currentPage());
};

{/*

  const settings2 = [
    settingOne: {
      Left: "copy",
      LeftSideCopy: "Setting Twsdcsdo",
      Right: "chevron",
    }
  ]

  <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
    <Label>
      This is an example react-sketchapp document, showing how to render a
      styleguide from a data representation of your design system.
    </Label>
  </View>

  <Section title="Type Styles">
    {Object.keys(system.fonts).map(name => (
      <TypeSpecimen name={name} style={TextStyles.get(name)} />
    ))}
  </Section>

  <Section title="Color Palette">
    <Palette colors={system.colors} />
  </Section>

  {/*
    {data.map((item) => {
      return (
        <SettingsRow  type="dude"/>
      )
    })}
    {Object.keys(rows).map(name => <SettingsRow />)}
    <Link className="card" key={item.link} to={item.link}>
      <div className="card-content">
        <span className="card-city" key={item.city} >{item.city}</span>
        <span className="card-state" key={item.state} >{item.state}</span>
      </div>
    </Link>

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
        <SupportText supportText="Hello Julie Cannssnoddn"/>
      </View>
    </View>



  */}
