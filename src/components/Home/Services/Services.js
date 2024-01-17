import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
    const cardValues = [
        {
            icon: "emojione-monotone:fork-and-knife-with-plate",
            heading: "500+ recipes",
            paragraph: "We've developed over 500 recipes. Follow for more!"
        },
        {
            icon: "game-icons:flour",
            heading: "10 Ingredients",
            paragraph: "All our recipes require not more than 10 simple ingredients."
        },
        {
            icon: "material-symbols:update-rounded",
            heading: "Weekly updates",
            paragraph: "We post new recipes every week, stay tuned for updates!"
        }
    ]
    return (
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mx-3 my-5 my-md-0 mt-md-1 containerDiv">
            {cardValues.map((card) => {
                return (<ServiceCard icon={card.icon} heading={card.heading} paragraph={card.paragraph} />)
            })}
        </div>
    );
}

export default Services;