import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Recettes = () => {

  const [lesrecettes, setLesrecettes] = useState([]);

    async function recupererRecettes() {
        try {
          const response = await axios.get('http://localhost:3000/recettes');
          console.log(response.data);
          setLesrecettes(response.data)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() =>{
        console.log("test")
        recupererRecettes();
     },[])

  return (
    <div>
    <div>Recettes</div>
    {lesrecettes.map((mesrecettes) =>(
      <p key={mesrecettes.id}>{mesrecettes.nom}</p> 
     
    ))
    }
    </div>
  )
  };
