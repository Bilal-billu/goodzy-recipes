import React from "react";
import { Link } from "react-router-dom";
import "./AuthorResources.css"

function AuthorResourcesCard(props) {
    return (
        <div className="d-flex flex-row col-md-5 p-3 m-3 " >
            
            <img src={props.cardObject.image} className="col-5 col-md-3 imgAuthRes" />
            <div className="d-flex flex-column align-content-center justify-content-start mx-md-2 px-3 px-md-3">
                <h2 className="h1">{props.cardObject.heading}</h2>
                <p className="font fs-5 py-1 py-md-3 paraAuthRes">{props.cardObject.description}</p>
                <Link to={props.cardObject.path} className="fs-5 mt-md-3 linkedAuthRes">
                    Learn more&gt;
                </Link>
            </div>
        </div>
    )
}

export default AuthorResourcesCard;