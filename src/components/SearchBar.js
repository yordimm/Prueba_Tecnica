import React, { Component } from 'react';
import {View, Image, Text, TextInput,TouchableOpacity,StyleSheet,TouchableHighlight, ListView } from 'react-native';
import ListGyms from './ListGyms';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }

      BuscarGym(){
return(
  <ListGyms word={this.state.text}/>
)
      }

  render() {
    return (
        <View style={{ padding:20,}} >  
       <TextInput
       style={styles.input}
       onChangeText={(text) => this.setState({text})}
       placeholder='Busca tú gimnasio'
     />
     <TouchableOpacity
         style={styles.button}
       
       >
         <Text style={styles.text}> Buscar </Text>
       </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
text:{
  color: '#FFFFFF',
},
  button: {
    alignItems: 'center',
    backgroundColor: '#F15A24',
    padding: 10,
  },
  input:{
    height: 40, 
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    color:'#333333',
  },
});