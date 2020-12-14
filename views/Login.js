import React,{useState} from 'react';
import {View, StyleSheet,Image} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import firebase from '../database/firebase'
import 'firebase/firestore'
import 'firebase/auth'

const Login = ({navigation}) => {
    // Estado para inicio y cierre de sesión agregar usuario
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    // Funcion para manejar el formulario
    const handleChangeText = (name, value) =>{
        setLogin({...login, [name]: value})
    }

    // Funcion para guardar usuario nuevo
    const saveUser = () =>{
        firebase.auth().createUserWithEmailAndPassword(login.email, login.password).then(cred => {
            return firebase.firestore().collection('user').doc(cred.user.uid).set({
                email: login.email,
                password: login.password
            })
        }).catch(function(error){
            console.log(error)
        })
        alert('Usuario agregado correctamente')
        handleChangeText("email", '')
        handleChangeText("password", '')
    }

    // Funcion para hacer login
    const ingresar = () =>{
        firebase.auth().signInWithEmailAndPassword(login.email, login.password).then(function(){
            navigation.navigate('Inicio')
        }).catch(function(error){
            console.log(error)
        })
    }

    return ( 
        <View style={styles.contenedor} >

            <Image 
                source={require('../assets/g160.png')}
            />

            <View style={styles.texto}>
                <TextInput
                label="Email"
                placeholder="Ingrese Email"
                onChangeText={(value) => handleChangeText("email", value)}
                />
            </View>

            <View style={styles.texto}>
                <TextInput
                label="Password"
                secureTextEntry={true}
                placeholder="Ingrese password"
                onChangeText={(value) => handleChangeText("password", value)}
                />
            </View>

            <View style={styles.boton}>
                <Button color="#00B44A" icon="login" mode="contained" onPress={() => ingresar()}>
                    Ingresar
                </Button>
            </View>

            <View style={styles.boton}>
                <Button color="#00B44A" icon="check" mode="text" onPress={() => saveUser()}>
                    Crear cuenta
                </Button>
            </View>

        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        alignContent: 'center',
        justifyContent: 'center'
        
    },
    texto:{
        paddingTop: 20,
        borderBottomColor: 'black',
    
    },
    boton:{
        paddingTop: 20,
    }
   
})