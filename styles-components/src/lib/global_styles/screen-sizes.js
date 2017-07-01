import { render, Artboard, Text, View, StyleSheet } from 'react-sketchapp';

export const iOSSizes = StyleSheet.create({
  iphone7:{
    width: 375,
    height: 667,
    backgroundColor:'white'
  },
  iphone7plus:{
    width: 414,
    height: 736,
    backgroundColor:'white'
  },
  iphoneSE:{
    width: 320,
    height: 568,
    backgroundColor:'white'
  },
  ipad:{
    width: 768,
    height: 1024,
    backgroundColor:'white'
  },
  ipadpro:{
    width: 1024,
    height: 1366,
    backgroundColor:'white'
  },
});

export const android = StyleSheet.create({
  mobile:{
    width: 360,
    height: 640,
    backgroundColor:'white'
  }
});
