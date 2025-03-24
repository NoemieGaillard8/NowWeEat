import { db } from "./firebaseConfig";
import { collection, addDoc, updateDoc, getDocs, getDoc, doc } from "firebase/firestore";



export const addRecipe = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "recipes"), { ...data});
    console.log("Recette ajoutée avec l'ID :", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout de la recette :", error);
  }
};


export const updateRecipe = async (recipeId, updatedData) => {
  try {
    const recipeRef = doc(db, "recipes", recipeId); 
    await updateDoc(recipeRef, updatedData);
    console.log("Recette mise à jour avec succès !");
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la recette :", error);
  }
};

export const getAllRecipes = async () => {
  try {
    const datas = await getDocs(collection(db, "recipes"));
    const recipesList = [];
    datas.forEach((doc) => {
      recipesList.push({ id: doc.id, ...doc.data() });
    });
    return recipesList; 
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
  }
};

export const getRecipeById = async (recipeId) => {
  try {
    const recipeRef = doc(db, "recipes", recipeId);
    const docSnapshot = await getDoc(recipeRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() }; // Retourne la recette trouvée
    } else {
      console.log("Aucune recette trouvée avec cet ID");
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la recette :", error);
  }
};