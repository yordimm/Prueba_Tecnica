import React, { Component } from 'react';
import {View, Image, TouchableOpacity,Text, StyleSheet,FlatList } from 'react-native';
import  Rating from 'react-native-easy-rating';

export default class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
               
                  name: props.name,
                  district: props.district,
                  price: props.price,
                  stars: props.stars,
                  image:props.image,

                 };
                }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
        
       >
        <Image
          style={{width: 300, height: 250, marginTop:8,}}
           source={require('../../assets/img/gyms/uno.jpg')}
          
        />
        <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'space-between',}}>
       <Text style={styles.welcome}>
         {this.state.name}
       </Text>

       <Rating  style={styles.stars}
    rating={this.state.stars}
    max={5}
    iconWidth={22}
    iconHeight={22}
    iconSelected={require('../../assets/img/select_star.png')}
    iconUnselected={require('../../assets/img/unselect_star.png')}
    editable={false}
    />
       </View>

       <View style={styles.container2}>
       <View style={styles.container3}>
       <Image
          style={{width: 15, height: 21}}
          source={require('../../assets/img/ubication2.png')}
        />
       <Text style={styles.instructions}>
        {this.state.district}
       </Text>
       </View>
       <Text style={styles.instructions2}>$ 
         {this.state.price}
       </Text>
       </View>  
       <View style={styles.container2}>
       
      
       <Image
          style={{width: 15, height: 21}}
          source={require('../../assets/img/services/crossfit.png')}
        />
       
        <Image
          style={{width: 15, height: 21}}
          
          source={require('../../assets/img/services/natation.png')}
        />
        
        
        <Image
          style={{width: 15, height: 21}}
          source={require('../../assets/img/services/pesas.png')}
        />
       
        
        <Image
          style={{width: 15, height: 21}}
          source={require('../../assets/img/services/zumba.png')}
        />
       
        <Image
          style={{width: 15, height: 21}}
          source={require('../../assets/img/services/yoga.png')}
        />
       
       </View> 
       </TouchableOpacity>
    
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2:{
padding:8,
flex: 1,
 flexDirection: 'row', 
  justifyContent: 'space-between',
  },
  container3:{
    flex: 1,
    flexDirection: 'row', 
  },
  container4:{
    flex: 1,
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    color: '#333333',
    margin: 5,
  },
  stars:{
marginTop:7,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
    marginLeft:4,
  },
  instructions2: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
  },
  button: {
   // alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});