import React, { Component } from 'react';
import {View, Image, TouchableOpacity,Text, StyleSheet,FlatList,ListView, ScrollView } from 'react-native';
import Gym from './Gym';

export default class ListGyms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word:props.word,
            gimnasios:[{
                nombre: 'Thomas gym',
               barrio: 'Samanes de guadalupe',
               precio: '70.000',
               estrellas: '3',
               imagen:'../../assets/img/gyms/uno.jpg',
              },
              {
                nombre: 'Los Angeles gym',
                barrio: 'El ingenio',
                precio: '90.000',
                estrellas: '4',
                imagen:'../../assets/img/gyms/dos.jpg',
              },
              {
                nombre: 'Bodytech',
                barrio: 'El limonar',
                precio: '100.000',
                estrellas: '5',
                imagen:'../../assets/img/gyms/tres.jpg',
                
              },
              {
                nombre: 'Afe',
                barrio: 'El limonar',
                precio: '80.000',
                estrellas: '5',
                imagen:'../../assets/img/gyms/cuatro.jpg',
              },
              {
                nombre: 'Las palmas',
                barrio: 'Melendez',
                precio: '50.000',
                estrellas: '3',
                imagen:'../../assets/img/gyms/cinco.jpg',
              },
              ],
            };
                  
                    }
 
  renderGyms()
  {
    return this.state.gimnasios.map
    (gimnasio =>
        <Gym name={gimnasio.nombre} 
             district={gimnasio.barrio} 
             price={gimnasio.precio} 
             stars={gimnasio.estrellas} 
             image={gimnasio.imagen}
        />
    );
  }

 /* SearchGym(){
    let gymsFiltered=[];
    let word=this.state.word.toLowerCase();
   // const gymFiltered=this.state.gimnasios.map(gym=>(gym.nombre===this.state.word));
    for(let gym of this.state.gimnasios){

      let name=gym.nombre.toLowerCase();
      if(name.indexOf(word)>=0){
       gymsFiltered.push(gym);
      }
    }
    return gymsFiltered.map(gym =>
  <Gym name={gym.nombre} 
       district={gym.barrio} 
       price={gym.precio} 
       stars={gym.estrellas} 
       image={gym.imagen}
  />
);
    }
*/
    
  
  
    render() {
     
      return (
      
       
        <ScrollView >
          
          {this.renderGyms() }
        </ScrollView>
        
    
      );
    }
  }

  const styles = StyleSheet.create({
 
      button: {
        alignItems: 'center',
        backgroundColor: '#F15A24',
        padding: 10,
      },
      text:{
        color: '#FFFFFF',
      },
    });




