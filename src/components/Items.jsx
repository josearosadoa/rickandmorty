import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Items = ({url}) => {
    const [character, setCharacter] = useState({})

    useEffect(()=> {
        axios.get(`${url}`)
        .then(res => setCharacter(res.data))
        
    },[])
    return (
     
            
        
            
            <ul>
            <img src={character.image} alt="" />
            <li>Name: {character?.name}</li>
            <li>Type: {character.species}</li>
            <li>Origin: {character?.location?.name}</li>
            <li>Population: {character.episode?.length}</li>
            
            </ul>
    
                
            
            
            
       

          
    );
};

export default Items;