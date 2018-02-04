/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Text, Artboard } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';



import Row from './components/Row';
import SettingsRow from './components/Rows/SettingsRow.js';
import GroupHeader from './components/Rows/GroupHeader.js';

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';



const settings = [
    {
      "Left":"copy",
      "LeftSideCopy":"Setting oooOne",
      "Right":"label",
      "RightSideCopy":"1000",
    },
    {
      "Left":"copy",
      "LeftSideCopy":"Setting Two",
      "Right":"chevron",
    },
]

const Document = ({ system }: { system: DesignSystem }) => (


    <Artboard
      name='My Artboard'
      style={{
        width: 375,
        height: 667,
        backgroundColor:'#121212',
        justifyContent:'center',
      }}
    >

    <View>

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
    </View>
    </Artboard>





);

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
  */}
