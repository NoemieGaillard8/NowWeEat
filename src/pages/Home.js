import React, { useEffect, useState } from "react";
import { getAllRecipes,addRecipe } from "../database/recipesdb";
import { storage } from '../database/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Home = () => {
  const [recipes, setRecipes] = useState([]); 
  const [newRecipeTitle, setNewRecipeTitle] = useState(""); 
  const [newImage,setNewImage]= useState(null);

  

  useEffect(() => {
    getAllRecipes().then((data) => {
      console.log("Données récupérées :", data);
      setRecipes(data || []); // Assure que recipes est un tableau
    });
    console.log("recipes",recipes);
  }, []);

  const handleAddRecipe = async () => {
    if (!newRecipeTitle.trim()) {
      alert("Le titre est obligatoire !");
      return;
    }
    if (!newImage) {
      alert("Veuillez sélectionner une image !");
      return;
    }

    try {
      // Upload de l'image sur Firebase Storage
      const imageRef = ref(storage, `recipes/${newImage.name}`);
      await uploadBytes(imageRef, newImage);
      const imageUrl = await getDownloadURL(imageRef);

      // Ajouter la recette dans Firestore
      await addRecipe({ title: newRecipeTitle, image: imageUrl });

      // Rafraîchir la liste des recettes
      getAllRecipes().then((data) => setRecipes(data));

      // Réinitialiser le formulaire
      setNewRecipeTitle("");
      setNewImage(null);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la recette :", error);
    }
  };
  

  return (
    <div className="home-container">
      <h1>Mes Recettes</h1>

      {/* Champ pour ajouter une recette */}
      <div>
        
        <input
          type="text"
          placeholder="Nouvelle recette"
          value={newRecipeTitle}
          onChange={(e) => setNewRecipeTitle(e.target.value)}
        />
         <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
       
      </div>
      <button onClick={handleAddRecipe}>Ajouter</button>
      {/* Liste des recettes */}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title}
            <button >❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
