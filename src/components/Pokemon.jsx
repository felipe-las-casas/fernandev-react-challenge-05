import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Pokemon.css';

function Pokemon ({ pokemon }) {
    const [xp, setXp] = useState('');
    const [sprite, setSprite] = useState('');
    
    async function loadData() {
      const { data } = await axios.get(pokemon.url);
      setXp(data.base_experience);
      setSprite(data.sprites.front_default);
    }
    
    useEffect(()=> {
      loadData();
    },[])
    
    return (
      <div className='pokemon'>
        <img src={sprite} alt={pokemon.name} />
        <p><b>{pokemon.name}</b></p>
        <p className='xp'>{xp}EXP</p>
      </div>
    )
  }
  
export default Pokemon;