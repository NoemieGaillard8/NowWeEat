import React, { useState } from "react";
import favoriteStar from '../assets/categoryimages/favorite.png';
import drink from '../assets/categoryimages/drink.png';
import fingers from '../assets/categoryimages/fingers.png';
import cake from '../assets/categoryimages/cake.png';
import meal from '../assets/categoryimages/meal.png';
import breakfast from '../assets/categoryimages/breakfast.png';
import '../styles/components/categoryslider.css';


const CategorySlider = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [favoriteBool,setFavoriteBool]=useState(false);
    const categories = [
        { id: meal, name: "Repas" },
        { id: drink, name: "Boissons" },
        { id: fingers, name: "Apéritifs" },
        { id: cake, name: "Patisseries" },
        { id: breakfast, name: "Petit Dej" },
    ]

    return (
        <div className="global-container">
            <div className={`favorite-container ${favoriteBool ? 'selected' : ''}`} onClick={()=> setFavoriteBool(!favoriteBool)}>
                <img src={favoriteStar} alt="" className="image-favorite" />
                <p className="description">Favoris</p>
            </div>
            <div className="scroll-container">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className={`category-item ${selectedCategory === category.name ? 'selected' : ''}`}
                        onClick={() => {selectedCategory === category.name ? setSelectedCategory(null): setSelectedCategory(category.name)}}
                    >
                        <img src={category.id} alt="" className={ category.name  === "Repas" ? "meal-image": "image"} />
                        <p className="description">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CategorySlider;
