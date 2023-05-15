import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'pink',width: 350,
  height: 350,
  /*Añade el borde del radio para la izquierda derecha de arriba y abajo*/
  borderRadius:30, 
 /*Añade la fuente Times New Roman*/  
 fontFamily:"Times New Roman",
    /*Añade la sombra */
    textShadowColor:"grey",
    
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:8,
    }}>FELIZ CUMPLEAÑOS QUERIDO AMIGO:)</Text>
  
    );
  }
}


