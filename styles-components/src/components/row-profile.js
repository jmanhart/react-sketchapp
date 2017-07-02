import React, { PropTypes, Component } from 'react';
import styled from 'styled-components/primitives';
import { render, Image, View, StyleSheet, Text } from 'react-sketchapp';
import chroma from 'chroma-js';

//Import Global Styles
import {global, shadows, labels} from '../lib/global_styles/index.js'

const data = [
  {
    "name": "John L.. Manhart",
    "postion":"UX Designer", "image":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAhIAAAAJDEzOGI0ZmFkLTE5MmYtNDlmYS05ZjM1LTgxZGYyZGMxZWY3ZA.jpg",
  },
  {
    "name": "Chris Pearson",
    "postion":"UX Designer",
    "image":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAb0AAAAJGJhYTJiZWU0LWQ5ZDAtNDFjNy1iNmI3LWMyZWM2ZGNhNTlmYw.jpg",
  },
  {
    "name": "Jasen Roberts",
    "postion":"UX Developer",
    "image":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/066/23b/28f0e0d.jpg",
  },
  {
    "name": "Nicholas Rickard",
    "postion":"UX Developer",
    "image":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAs0AAAAJDcwYzUxYTdlLTdkY2UtNDVkYy04ODgyLTU1ODQ5ZWE1MWUwZg.jpg",
  },
]


export default class RowProfile extends Component{
  render(){
      return(
        <View >
          {data.map((item) =>
            <View name ="Row Container" style={styles.rowContainer}>
              <View name ="Avatar Container" style={styles.avatarContainter}>
                <Image
                  name ="Profile Image"
                  style={styles.avatar}
                  key={item.image}
                  source={item.image} />
              </View>
              <View name ="Copy Container" style={styles.copyContainer}>
                <Text name ="Profile Name" style={labels.labelOne} key={item.name}>{item.name}</Text>
                <Text name ="Profile Position" key={item.position}>{item.postion}</Text>
              </View>
            </View>
            )}
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  card:{
    backgroundColor:'rgba(255,255,255,1)',
    flex: 3,
    alignSelf: 'stretch',
    margin: 10,
    borderRadius: 3,
  },
  rowContainer: {
    backgroundColor:'rgba(0,0,0,0.15)',
    height: 100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 0,
  },
  avatarContainter:{
    backgroundColor:'rgba(0,0,0,0.15)',
    margin:0,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  avatar:{
    backgroundColor:'pink',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  copyContainer:{
    backgroundColor:'rgba(0,0,0,0.15)',
    height: 50,
    margin:10,
    flex:3,
    justifyContent:'center',
  },
});
