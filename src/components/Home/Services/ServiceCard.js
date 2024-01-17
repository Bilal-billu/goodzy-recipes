import React from "react";
import { Icon } from '@iconify/react';
import './Services.css'

function ServiceCard(props)
{
    return(
        <div className="d-flex flex-column align-items-start m-2 m-md-5 cardDiv">
            <Icon icon={props.icon} className="display-2"/>
            <h1 className="py-md-3">{props.heading}</h1>
            <p>{props.paragraph}</p>
        </div>  
    );
}

export default ServiceCard;