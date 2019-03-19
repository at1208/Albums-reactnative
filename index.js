import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/albumlist'

class App extends Component {
render() {
  return (
    <View style={{flex:1, backgroundColor: 'pink'}}>
    <Header header='Albums' />
    <Albumlist />
    </View>
  );
}
}

AppRegistry.registerComponent('albums', () => App);
