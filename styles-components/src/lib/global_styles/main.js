import { render, Artboard, Text, View, StyleSheet } from 'react-sketchapp';


export const global = StyleSheet.create({
  wrapper:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor:'#CACACA',
  },
  content:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor:'rgba(0,0,0,0.05)',
  }
});

export const shadows = StyleSheet.create({
  cardOne:{
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
});
