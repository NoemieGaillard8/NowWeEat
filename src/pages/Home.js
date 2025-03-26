import React, { useEffect, useState } from "react";
import { getAllRecipes,addRecipe } from "../database/recipesdb";
import { storage } from '../database/firebaseConfig';
import SearchBar from '../components/SearchBar_temp';
import { FaSliders } from "react-icons/fa6";
import '../styles/home.css'

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import CategorySlider from "../components/CategorySlider";
import FilterSlider from "../components/FilterSlider";

const Home = () => {
  const [recipes, setRecipes] = useState([]); 
  const [newRecipeTitle, setNewRecipeTitle] = useState(""); 
  const [newImage,setNewImage]= useState(null);

  

  useEffect(() => {
    getAllRecipes().then((data) => {
      console.log("Données récupérées :", data);
      setRecipes(data || []);
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
    <div style={{padding:"3px" }}>
      <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
          <SearchBar/>
          <FaSliders className="filter-icon"/>
      </div>
      
        <CategorySlider/>
        <FilterSlider/>
      
      {/* Champ pour ajouter une recette */}
      {/* <div>
        
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
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title}
            <button >❌</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
