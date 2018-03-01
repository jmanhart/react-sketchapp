import React from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
} from 'react-sketchapp';


import designSystem from './designSystem';

// Import Components
import SettingsGroup from './components/SettingsGroup.js'

// Expose & make the symbol - This adds to the Symbol Page
const SettingsGroupSym = makeSymbol(SettingsGroup, 'settings / row');

const Document = () => (
  <Artboard name="Swatches" style={{ display: 'flex' }}>
    <SettingsGroupSym />
  </Artboard>
);

export default () => {
  render(<Document />);
};


{/*
  <NestedSym
    name="Nested Symbol"
    overrides={{
      'Red Square Instance': BlueSquareSym,
      'Blue Square Text': 'TESTING',
      Photo:
        'https://pbs.twimg.com/profile_images/833785170285178881/loBb32g3.jpg',
    }}
  />  
*/}
