import React, { useState, useEffect } from 'react'

export const AjouterProduit = () => {
  function handleSubmitPlusPropre(e) {
    e.preventDefault();
    const form = e.target; 
    console.log("e",e)
    const formData = new FormData(form);
    console.log(formData)
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson) 
    fetch("http://localhost:3000/ajoutproduit",
       { 
        method: form.method,
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formJson)
    });
  }

  return (
    <div>AjouterProduits
        <form method="post" onSubmit={handleSubmitPlusPropre}>
            <label htmlfor="name">Nom</label>
            <input type="text" id="name" name="nom"required minLength="4" maxLength="18" />

            <label htmlfor="datedexpi">Date d'expi</label>
            <input type="date"id="datedexpi"name="datedexpi"value="2018-07-22"min="2018-01-01"
          max="2025-12-31"></input>

            <label htmlFor="category">Categorie</label>
            <input type="text" id="category" name="category" required minLength="4" maxLength="8" size="10"></input>
          
            <label htmlfor="quantity">Quantité</label>
            <input type="number" id="quantity" name="quantity" min="1" max="100" />

             <input type="submit" value="Rajouter le produit !" />
      </form>
    </div>
  );
};



