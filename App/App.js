import React, {Component} from 'react';
import Header from './Component/header';
import AlbumList from './Component/AlbumList';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios';


export default class App extends Component {
state = {
  albums: []
}
  
componentDidMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data}))
  console.warn({albums: this.state})
}

render() {
  console.warn(({albums: this.state}))
    return (
      <View style={styles.container}>
        <Header/>
        <View>
              {
                this.state.albums.map((item, index) => {
                return (
                  <AlbumList item={item} key={index}/>
                )}
                )
              }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
