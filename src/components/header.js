import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = style;
  return (
    <View style={viewStyle}>
     <Text style={textStyle}>{props.header}</Text>
    </View>
  );
};

const style = {
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',


  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 39,
    position: 'relative',
    borderWidth:2,
    borderColor:'black',
    backgroundColor: 'pink'


  }
};
export default Header;
