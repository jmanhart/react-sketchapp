import React, { PropTypes, Component } from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
} from 'react-sketchapp';

import RedSquare from './squares.js'

const RedSquareSym = makeSymbol(RedSquare, 'squares/red');

export default class Nested extends Component{
  render() {
    return(
      <View name="Multi" style={{ display: 'flex', flexDirection: 'column' }}>
        <RedSquareSym
          name="Red Square Instance"
          style={{ width: 75, height: 75 }}
        />
      </View>
    )
  }
}
