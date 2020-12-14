import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View,  Button, FlatList, TouchableOpacity} from 'react-native'
import axios from 'axios'
import Imagen from './Imagen'
import Search from './Search'


const Inicio = ({navigation}) => {

    //Funcion para navegar a favoritos
    const visitFavoritos = () =>{
        navigation.navigate('Favoritos')
        
    }
    
    // Estado que maneja la vista de peliculas  mas populares
    const [titulo, setTitulo] = useState ({})

    // UseEffect para renderizar la vista de inicio cuando se inicia la app
    useEffect( () =>{

        // LLamada a la API por medio de axios
        const consultarAPI = async () =>{
            
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cc4014bd9d8a8ba73902e51a968aef0e&language=es-spa&page=1'
            const resultado = await axios.get(url)
            setTitulo(resultado.data.results);  
        }
        consultarAPI();
    }, [])

    
    return ( 
    <View style={styles.contenedor}>
        <Search />
        <FlatList 
            data={titulo}
            renderItem={({item}) =>(
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Detalle', {item})}>
                    <View style={styles.banner}>
                        <Imagen img={item.poster_path}/>
                    </View>
                </TouchableOpacity>
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.titulo}>Rating: {item.vote_average}</Text>
                <View style={styles.banner2}>
                <Button
                    title="Favoritos"
                    onPress={ () => visitFavoritos() }
                    color="#00B44A"
                />
                </View>
            </View>
            
                )}
            keyExtractor={ (item, index) => index.toString() }
            
            />
        </View>
    );
}
export default Inicio;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#06FB6C'
    },
    banner:{
        paddingTop: 7,
    },
    banner2:{
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-around'
        
    }
})