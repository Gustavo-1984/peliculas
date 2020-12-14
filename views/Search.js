import React, {useState, useEffect} from 'react'
import {Searchbar} from 'react-native-paper'
import axios from 'axios'

const Search = () => {

 

  const [buscar, setBuscar] = useState('')
  const [find, setFind] = useState({})

  const handleChangeText = (name, value) =>{
    setBuscar({...buscar, [name]: value})
    console.log(value);
}

useEffect(() =>{
  const find = async () =>{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cc4014bd9d8a8ba73902e51a968aef0e&language=es-spa&query=${this.buscar}&page=1&include_adult=false`
    const resultado = await axios.get(url)
    setFind(resultado.data.results);  
    console.log(resultado);
  }
  find()
}, [])

    return ( 
        <Searchbar
        placeholder="Buscar Pelicula"
        onChangeText={(value) => handleChangeText('buscar', value)}
        value={buscar}
        />
    );
}

export default Search;