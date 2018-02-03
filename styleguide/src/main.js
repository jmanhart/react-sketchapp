/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Text } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';


import Row from './components/Row';
import SettingsRow from './components/Rows/SettingsRow.js';

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';

const Document = ({ system }: { system: DesignSystem }) => (
  <View>


    <SettingsRow />

  </View>
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
*/}