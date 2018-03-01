import React from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
} from 'react-sketchapp';

import RedSquare from './components/squares.js'

const RedSquareSym = makeSymbol(RedSquare, 'squares/red');

const Nested = () => (
  <View name="Multi" style={{ display: 'flex', flexDirection: 'column' }}>
    <RedSquareSym
      name="Red Square Instance"
      style={{ width: 75, height: 75 }}
    />
  </View>
);

const NestedSym = makeSymbol(Nested);


const Document = () => (
  <Artboard name="Swatches" style={{ display: 'flex' }}>
    <NestedSym />
  </Artboard>
);

export default () => {
  render(<Document />, context.document.currentPage());
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
