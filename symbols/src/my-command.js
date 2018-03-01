import React from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
} from 'react-sketchapp';



import SettingsGroup from './components/SettingsGroup.js'




const Document = () => (
  <Artboard name="Swatches" style={{ display: 'flex' }}>
    <SettingsGroup />
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
