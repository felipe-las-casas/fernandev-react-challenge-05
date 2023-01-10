import axios from 'axios';
import { useEffect, useState } from 'react';
import api from '../api/api'
import Pokemon from './Pokemon';

function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
  
    async function loadPokemons() {
      const { data } = await axios.get(api);
      const sortedArray = [...data.results];
      
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      
      setPokemons(sortedArray);
    }
    
    useEffect(() => {
      loadPokemons();
    },[]);
  
    return (
      <>
        <h3>desafio fernandev</h3>
        <h1>consumir api pokémon</h1>
        {
          pokemons.map((e,a) => <Pokemon key={a} pokemon={e} />)
        }
      </>
    );
  }
  
  export default Pokemons;
  