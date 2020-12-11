import React from 'react'
import {Text, StyleSheet, View, Button, Image, FlatList} from 'react-native'



const Detalle = ({route}) => {
   
    const sinopsis = route.params.sinopsis.overview

  

    return ( 
        <View style={styles.contenedor}>
           
        <Text>{sinopsis}</Text>
        </View>
        
     );
}
 
export default Detalle;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})