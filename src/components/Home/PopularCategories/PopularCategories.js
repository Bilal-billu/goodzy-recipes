import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";


function PopularCategories() {
    const categories = [
        {
            image: "https://images.services.kitchenstories.io/gxInWDQniM21aQiVgvnXmDrMnvo=/3840x0/filters:quality(85)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg",
            title: "Breakfast"
        },
        {
            image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
            title: "Dessert"
        },
        {
            image: "https://www.spoton.com/blog/content/images/size/w1200/2023/08/Mocktail--zero-proof-cocktails--and-different-non-alcoholic-drinks.jpeg",
            title: "Drinks"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpt51FmFvqaOrx50pMj4ADF1MaJB-xxHBzgQ&usqp=CAU",
            title: "Main course"
        },
        {
            image: "https://www.cnet.com/a/img/resize/b0416ba4b043e24371a3ed905b01d2a56b03f624/hub/2020/03/25/10817fb1-ef94-4f6a-bde1-4026502160bb/gettyimages-1149135424.jpg?auto=webp&fit=crop&height=675&width=1200",
            title: "Snacks"
        }
    ];


    return (
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
            <h1 className="h1 display-5 p-5">Popular Categories</h1>
            <div className="d-flex flex-row flex-wrap justify-content-center align-content-center">
                {categories.map((card,index) => {
                    return (<PopularCategoryCard categoryImage={card.image} categoryName={card.title} key={index}/>)
                }
                )}
            </div>
            <button className="p-2 px-4 mt-4 buttonPopularCategories">View all recipes &gt;</button>
        </div>
    )
}

export default PopularCategories;