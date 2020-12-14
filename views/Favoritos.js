import React, {useState, useEffect} from 'react'
import {Text, FlatList, Image, View, StyleSheet, Button} from 'react-native'
import firebase from '../database/firebase'
import 'firebase/firestore'

const Favoritos = () => {
    // Estado para manejar favoritos
    const [favs, setFavs] = useState([])

    useEffect(() =>{
        firebase.firestore().collection('favs').onSnapshot(querySnapshot =>{
            const favs = []
            querySnapshot.docs.forEach(doc =>{
                const {imagen, titulo,} = doc.data()
                favs.push({
                id: doc.id,
                imagen,
                titulo
            });
        })
        setFavs(favs)
    })
    }, [])

    //Funcion para eliminar de favoritos
    const eliminar = (id) =>{
        firebase.firestore().collection('favs').doc(id).delete()
        alert('Pelicula borrada de favoritos')
    }

    return ( 
        <View style={styles.contenedor}>
            <FlatList 
                data={favs}
                renderItem={({item}) =>(
            <View>
                <View>
                    <Image
                        source={{uri: `https://image.tmdb.org/t/p/w500${item.imagen}`, width: 350, height: 500}}
                    />
                </View>
                <Text style={styles.titulo}>Titulo: {item.titulo}</Text>
                <View style={styles.boton}>
                    <Button
                    onPress={() => eliminar(item.id)}
                    title="Eliminar"
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
 
export default Favoritos;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#06FB6C',
        marginBottom: 10,
        marginTop: 16,
    },
    boton:{
        marginBottom: 20,
    }
})