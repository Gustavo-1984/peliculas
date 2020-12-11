import React, {useState} from 'react'
import { StyleSheet, View, Image} from 'react-native'
import axios from 'axios'

const Imagen = (img) => {

    // const [imagen, setImagen] = useState ({})
    

    // useEffect( () =>{

    //     const consultarAPI = async () =>{
    //         const url = `https://image.tmdb.org/t/p/w185${img.img}`
    //         const resultado = await axios.get(url)
    //         setImagen(resultado);
    //     }
    //     consultarAPI();
    // }, [])




    return ( 
        <View style={styles.contenedor}>
          
                <Image
                    size={{weight: 285, height:185}} 
                    source={{uri: `https://image.tmdb.org/t/p/w185${img.img}`}}
                    
                />
        </View>
        
     );
}
 
export default Imagen;

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})

{/*  */}