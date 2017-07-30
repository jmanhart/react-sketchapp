import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Image, View, StyleSheet, Text } from 'react-sketchapp';
import chroma from 'chroma-js';

//Import Global Styles
import {global, shadows, labels, fpo, rowcontainer} from './../../lib/global_styles/index.js'


export default class RowContainer extends Component{
  render(){
      return(
        <View name="Row Wrapper" style={rowcontainer.wrapper}>
            <View name="Icon Container" style={rowcontainer.iconContainer}>
              <View name="Icon Content" style={rowcontainer.icon}/>
            </View>
            <View name="Label Container" style={rowcontainer.labelContainer}>
              <Text name="Label String" style={rowcontainer.label}>{this.props.label}</Text>
              <View name="Enclosure Arrow" style={rowcontainer.enclosureArrow}/>
            </View>
        </View>
      )
    }
  }
