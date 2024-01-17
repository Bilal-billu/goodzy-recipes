import React from "react";
import './PopularCategories.css'


function PopularCategoryCard(props) {
    return (
        <div className="d-flex flex-column justify-content-center  col-lg-2 col-md-4 col-6  align-items-center cardContainerPopularCategories">
            <figure className="p-4 d-flex flex-column align-items-center imageContainerPopularCategories">
                <img src={props.categoryImage} className="imagePopularCategories" alt="Category"/>
                <figcaption className="h4 py-4">{props.categoryName}</figcaption>
            </figure>
        </div>
    );
}

export default PopularCategoryCard;