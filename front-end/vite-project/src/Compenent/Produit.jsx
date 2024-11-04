import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Produit = () => {
    const [lesproduits, setLesproduits] = useState([]);

    async function recupererProduit() {
        try {
          const response = await axios.get('http://localhost:3000/produits');
          console.log(response.data);
          setLesproduits(response.data)
        } catch (error) {
          console.error(error);
        }
      }
       useEffect(() =>{
        console.log("test")
        recupererProduit();
     },[]) // [] = Dépendance 

     return (  
    <div>
       <div>Produit</div> 
        {lesproduits.map((monproduit) =>(
            <p key={monproduit.id}>{monproduit.nom}</p>
    ))
    }  
    </div>
    )
  };
