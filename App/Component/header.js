import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default class Header extends Component {
 
    render() {
      return (
        <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>
                Albums
            </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    headerContainer: {
      position: 'absolute',
      top: 0,
      padding : 10,
      paddingTop: 20,
      borderBottomWidth: 1,
      left: 0,
      right: 0,
      alignItems: 'center',
    },
    textStyle: {
      fontWeight: '800'
    }
  })