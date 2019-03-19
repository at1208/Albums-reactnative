import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardsection';
import Button from './button'

const Albumdetail = (props) => {
  const { containerStyle, imageStyle, thumnailimageStyle, image} = styles
  return (
    <Card>
    <CardSection>
    <View style={thumnailimageStyle}>
    <Image
    style={imageStyle}
    source={{ uri : props.record.thumbnail_image}}/>
    </View>
     <View style={containerStyle}>
     <Text>{props.record.title}</Text>
     <Text>{props.record.artist}</Text>
     </View>
     </CardSection>
     <CardSection>
     <Image
     style={image}
     source = {{uri : props.record.image}} />
     </CardSection>
     <CardSection>
      <Button onPress={() => Linking.openURL(props.record.url)} />
     </CardSection>
  </Card>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'space-around',
     flexDirection: 'column'
  },
  imageStyle:{
    height:50,
    width:50
  },
  thumnailimageStyle:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    height:200,
    flex:1,
    width:null,
  }
}
 export default Albumdetail;
