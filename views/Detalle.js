import React, {useState,useEffect} from 'react'
import {Text, StyleSheet, View, Button, Image} from 'react-native'
import firebase from '../database/firebase'
import 'firebase/firestore'



const Detalle = ({route}) => {

    // Estado para manejar el detalle de las peliculas
    const [state, setState] = useState ({})

    // Modificamos el estado para enviar a favoritos
    useEffect(() =>{
        const favoritos = () =>{
        setState({
            imagen: route.params.item.poster_path,
            titulo: route.params.item.title,
            id: route.params.item.id
        })}
        favoritos()
    }, []) 

    // Funcion para llamar a favoritos
    const guardarfavoritos = () =>{
        firebase.firestore().collection('favs').doc().set({
            imagen: state.imagen,
            titulo: state.titulo,
            id: state.id
            })
        alert('Pelicula guardada en favoritos')
    } 

    return ( 
        <>
        <View style={styles.contenedor}>
            <View style={styles.texto} >
                <Image source={{uri: `https://image.tmdb.org/t/p/w200${route.params.item.poster_path}`, width: 150, height: 200}}/>
            </View>
            <View style={styles.texto} >
                <Text style={styles.texto1}>{route.params.item.overview}</Text>
            </View> 
        </View>

        <View style={styles.contenedor2}>
        <View>
            <Text style={styles.texto3} >Titulo: {route.params.item.title}</Text>
        </View>
        <View>
            <Text style={styles.texto3}>Lanzamiento: {route.params.item.release_date}</Text>
        </View>
        <View>
            <Text style={styles.texto3} >Rating: {route.params.item.vote_average}</Text>
        </View>
        <View>
            <Text style={styles.texto3} >Votos: {route.params.item.vote_count}</Text>
        </View>
        <View style={styles.boton}>
        <Button
                onPress={() => guardarfavoritos() }
                title="Agregar a favoritos"
                color="#00B44A"
                />
        </View> 
        </View> 
        </>
    );
}

export default Detalle;

const styles = StyleSheet.create({
    contenedor: {
        padding: 2,
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },
    contenedor2: {
        padding: 10,
        flex: 2,
        backgroundColor: 'black',
        alignContent: 'flex-start'
        
    },
    texto:{
        padding: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: '#fff'
        
    },
    texto1:{
        color: '#fff',
        marginBottom: 10,
    },
    texto2:{
        
        backgroundColor: 'black',
        flex: 1,
        alignContent: 'flex-start',
        color: '#fff',
        fontSize: 20,
    },
    texto3:{
        color: '#06FB6C',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    boton:{
        padding: 40,
        marginTop: 20,
    }
   
})