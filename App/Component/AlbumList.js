import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';


export default class AlbumList extends Component {
     render() {
        const item = this.props
      return (
        <View>
            <View style={styles.info}>
                <View>
                    <Image source={{ uri: item.item.thumbnail_image}}
                    style={styles.imageStyle} />
                    <Image source={{ uri: item.item.image}}
                    style={styles.imageStyle} />
                </View>
                <View>
                    <Text>{item.item.title} - {item.item.artist}</Text>
                </View>
            </View>
        </View>
      );
    }
  }
  

  const styles = StyleSheet.create({
    headerContainer: {
      position: 'absolute',
      top: 0
    },
    textStyle: {
      fontWeight: '800'
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    info: {
        flexDirection: 'row'
    }
  })