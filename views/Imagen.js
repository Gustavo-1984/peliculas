import React from 'react'
import {View, Image} from 'react-native'

// Funcion para importar la imagen principal
const Imagen = (img) => {

    return ( 
        <View>
                <Image
                    source={{uri: `https://image.tmdb.org/t/p/w500${img.img}`, width: 350, height: 500}}
                />
        </View>
    );
}

export default Imagen;

