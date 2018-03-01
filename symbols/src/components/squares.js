import React, { PropTypes, Component } from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
} from 'react-sketchapp';


export default class RedSquare extends Component{
  render() {
    return(
      <View
        name="Square"
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
      >
        <Text name="Red Square Text">Red u</Text>
      </View>
    )
  }
}


{/*
const RedSquare = () => (
  <View
    name="Square"
    style={{ width: 100, height: 100, backgroundColor: 'red' }}
  >
    <Text name="Red Square Text">Red Squasdasdare</Text>
  </View>
);

const RedSquareSym = makeSymbol(RedSquare, 'squares/red');




const BlueSquare = () => (
  <View
    name="Square"
    style={{ width: 100, height: 100, backgroundColor: 'blue' }}
  >
    <Text name="Blue Square Text">Blue Square</Text>
  </View>
);

const BlueSquareSym = makeSymbol(BlueSquare, 'squares/blue');



const Photo = () => (
  <Image
    name="Photo"
    source="https://pbs.twimg.com/profile_images/895665264464764930/7Mb3QtEB_400x400.jpg"
    style={{ width: 100, height: 100 }}
  />
);

const PhotoSym = makeSymbol(Photo);
*/}
