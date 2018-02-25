import React, { Component } from 'react';
import {View, Image,   StyleSheet, } from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
        <View >
        <View style={styles.container}>
       
        <Image
          style={{width: 116, height: 58, marginTop:8,}}
          source={require('../../assets/img/logo.png')}
        />
       
      </View>
      <View style={styles.bottonBar}>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      height: 70,
    
    },
 
    bottonBar:{
        backgroundColor: '#B4B4B4',
        height: 8,
      
    },
    
  });