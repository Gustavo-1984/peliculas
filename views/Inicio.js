import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, Button, FlatList} from 'react-native'
import axios from 'axios'
import Imagen from './Imagen'




const Inicio = ({navigation}) => {

    const visitDetalle = () =>{
        navigation.navigate('Detalle', sinopsis)
        
    }
    

    
    const [titulo, setTitulo] = useState ({})
    const sinopsis = {
    sinopsis: titulo[0]
    }

    useEffect( () =>{

        const consultarAPI = async () =>{
            
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cc4014bd9d8a8ba73902e51a968aef0e&language=en-US&page=1'
            const resultado = await axios.get(url)
            setTitulo(resultado.data.results);
            console.log(resultado.data.results);
           
            
            
        }
        consultarAPI();
    }, [])

    
    return ( 
        <View style={{flexDirection: 'row', margin:10}}>
            <FlatList 
                data={titulo}
                renderItem={({item}) =>(
            <View>
                <Imagen img = {item.poster_path}/>
                <Text>{item.title}</Text>
                <Text>Rating: {item.vote_average}</Text>
                <Button 
                title="Sinopsis"
                onPress={ () => visitDetalle() }
               
            />
            </View>
            
                )}
            
            />
           
        </View>
     );
}
 
export default Inicio;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})