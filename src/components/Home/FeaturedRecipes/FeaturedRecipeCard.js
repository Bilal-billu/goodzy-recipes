import React from "react";
import { Icon } from '@iconify/react';
import "./FeaturedRecipes.css"

function FeaturedRecipeCard({ card }) {
    const { image, title, newRec = false } = card;


    return (
        <div className="d-flex flex-column col-md-4 justify-content-center p-3 align-items-center cardContainerFeatured">
            <div className="imageContainerFeatured">
                <img src={image} className="imageFeatured col-11" />
                {
                    newRec && <small className="px-1 pe-2 py-1 newFeatured">
                        <Icon icon="ph:lightning-fill" className="p me-1"/>
                        New!
                    </small>
                }
            </div>
            <p className="text-center py-4 textFeatured">Featured</p>
            <p className="h6 fw-bold text-center">{title}</p>
        </div>
    )
}

export default FeaturedRecipeCard;