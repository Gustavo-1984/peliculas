import React from 'react'
import {Button} from 'react-native-paper'
import firebase from '../database/firebase'
import 'firebase/auth'

// Funcion para el logOut
const Barra = ({navigation, route}) => {

    // Enviasmos al login despues de cerrar sesion
    const handlePress = () =>{
        firebase.auth().signOut()
        navigation.navigate('Login')
    }

    return ( 
        <Button icon="logout" mode="text" color='#fff' onPress={ () => handlePress()}>
            Salir
        </Button>
     );
}
 
export default Barra;