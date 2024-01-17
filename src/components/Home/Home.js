import React from "react";

//importing components
import HeroSection from "./HeroSection/HeroSection";
import Services from "./Services/Services";
import FeaturedRecipes from "./FeaturedRecipes/FeaturedRecipes";
import Partners from "./PartnersSection/Partners";
import PickOfTheWeek from "./PickOfTheWeek/PickOfTheWeek";
import PopularCategories from "./PopularCategories/PopularCategories";
import FAQSuggestion from "./FAQSuggestion/FAQSuggestion";
import AuthorResources from "./AuthorResources/AuthorResources";
import GoodzyIdea from "./GoodzyIdea/GoodzyIdea";
//------------------------

function Home() {
    const propsContainerPickOfTheWeek = {
        image: "https://badbatchbaking.com/wp-content/uploads/2018/07/IMG_6337-2.jpg",
        bgColor: "chocolate",
        textColor: "text-white",
        title: "Peanut buster parfait",
        description: "This nourishing recipe is perfect for all people of all ages! It is quick and easy to make, but packed with flavour and is sure to impress your guests."
    };
    

    // const home = props.targetted[0];
    // const about = props.targetted[1];
    // const partners = props.targetted[2];

    return (
        <>
            <HeroSection />
            <Services />
            <FeaturedRecipes />
            <PickOfTheWeek propsContainerObject={propsContainerPickOfTheWeek} />
            <PopularCategories />
            <FAQSuggestion pathFAQ='/recipes-faq' />
            <AuthorResources />
            <GoodzyIdea />
            <Partners/>
        </>
    )
}

export default Home;