import React from "react";
import FeaturedRecipeCard from "./FeaturedRecipeCard";

//import './FeaturedRecipes.css'

function FeaturedRecipes() {
    const featuredValues = [
        {
            image: "https://www.foodandwine.com/thmb/64A-hhTQetb1sT59HTKRwW0-ie0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201412-xl-whole-roast-fish-with-lemon-and-herbs-ded5bc93744a4ddaa3bb11964753466d.jpg",
            title: "Whole roast fish with lemon and herbs"
        },
        {
            image: "https://i.imgur.com/mghU6lm.jpg",
            title: "Salmon Sashimi with a Yuzu Soy Dressing",
            newRec: true
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Club_sandwich.png",
            title: "Club sandwich"
        }
    ]
    return (
        <div className="d-flex flex-column  justify-content-center align-items-center my-5 my-md-0 mb-5 pb-1">
            <h1 className="h1 display-6 fw-bolder">Featured recipes</h1>
            <div className="d-flex flex-column flex-md-row  align-content-center ">
                {featuredValues.map((card) => {
                    return (<FeaturedRecipeCard card={card} />)
                })}
            </div>

            <button className="p-2 px-4 mt-4 buttonAllRecipes">View all recipes &gt;</button>
        </div>
    );
}

export default FeaturedRecipes;