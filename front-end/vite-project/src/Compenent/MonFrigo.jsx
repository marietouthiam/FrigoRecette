import React from 'react'
import { Produit } from './Produit'
import { Recettes } from './Recettes'
import { RecetteAvailable } from './RecetteAvailable'
import { AjouterProduit } from './AjouterProduits'
export const MonFrigo = () => {
  return (
    // Reourne du JSX 
    <div>MonFrigo
        <Produit></Produit>
        <Recettes></Recettes>
        <RecetteAvailable></RecetteAvailable>
        <AjouterProduit></AjouterProduit>
    </div> 
  )
} 

