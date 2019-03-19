import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Albumdetail from './albumdetail'


class Albumlist extends Component {

    state = {
      albums: []
    }

  componentWillMount() {
   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(albums =>
       <Albumdetail key={albums.title} record={albums} />);
     }


render() {
     return (
      <ScrollView>
       {this.renderAlbums()}
      </ScrollView>
    );
  }
  }

export default Albumlist;
