import React from "react";
import AuthorResourcesCard from "./AuthorResourcesCard";

function AuthorResources() {
    const authorResourcesCardValues = [
        {
            image: "https://cookdinehost.com/cdn/shop/files/WEB_AD_Cookbook-promo-photo-16_7f43744b-a1fb-4d89-ab87-06347f564d51.jpg?v=1684990643&width=1200",
            heading: "Cookbook",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique feugiat quam, a porta felis vehicula vel. Ut dui purus",
            path: "/"
        },
        {
            image: "https://cdn.apartmenttherapy.info/image/upload/v1570039897/k/Photo/Series/2019-10-Cooking-School/2019-10-Cooking-School-Sign-Up/2019_cookingschool_shot01_030.jpg",
            heading: "About",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique feugiat quam, a porta felis vehicula vel. Ut dui purus",
            path: "/"
        },
        {
            image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg",
            heading: "Recipes FAQ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique feugiat quam, a porta felis vehicula vel. Ut dui purus",
            path: "/"
        },
        {
            image: "https://images.food52.com/Fqw3h0NVqUSb9oUrYQq7SgYp5YQ=/6a6328bc-7a17-4814-a68f-c87705aee355--2022-0808_global-goods-partners_felt-kitchen-tools-ornaments-set-of-4_silo_mj-kroeger_copy.jpg",
            heading: "For partners",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique feugiat quam, a porta felis vehicula vel. Ut dui purus",
            path: "/"
        }
    ]
    return (
        <div className="p-1 py-5">
            <h1 className="fw-bold mx-4 display-5 mt-5">Author Resources</h1>
            <div className="d-flex flex-row flex-wrap">
                <AuthorResourcesCard cardObject={authorResourcesCardValues[0]} />
                <AuthorResourcesCard cardObject={authorResourcesCardValues[1]} />
                <div className="w-100" style={{ height: "1px", borderTop: "4px solid black" }} ></div>
                <AuthorResourcesCard cardObject={authorResourcesCardValues[2]} />
                <AuthorResourcesCard cardObject={authorResourcesCardValues[3]} />
            </div>
        </div>
    );
}

export default AuthorResources;