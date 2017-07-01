import { render, Artboard, Text, View, StyleSheet } from 'react-sketchapp';


export const global = StyleSheet.create({
  wrapper:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor:'green',
  },
  content:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor:'rgba(0,0,0,0.05)',
  }
});
