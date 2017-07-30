import { render, Artboard, Text, View, StyleSheet } from 'react-sketchapp';


let borderWidth = 2;

export const rowcontainer = StyleSheet.create({
  wrapper:{
    backgroundColor:'rgba(0,0,0,0.7)',
    maxHeight: 70,
    flex: 1,
    borderTopWidth: borderWidth,
    borderTopColor: "white",
    borderBottomWidth: borderWidth,
    borderBottomColor: "white",
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
  },

  // Label Container Content
  labelContainer:{
    flex: 3,
    alignSelf:'stretch',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  },
  label:{
    fontSize: 15,
    color:"white",
  },
  enclosureArrow:{
    height: 20,
    width: 20,
    backgroundColor:'red',
    marginRight: 20,
  },

  iconContainer:{
    backgroundColor:'teal',
    flex: 1,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center'
  },

  // Icon Container Content
  icon:{
    height: 30,
    width: 30,
    backgroundColor:"pink",
  },

});
