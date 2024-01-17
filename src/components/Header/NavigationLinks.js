import React from "react";
import { HashLink as Link } from 'react-router-hash-link';


function NavigationLinks(props) {
    return (
        <>
            <Link smooth to={props.path} className="text-capitalize link border-0 bg-transparent ms-3 text-black text-decoration-none h5 fw-semibold">
                {props.text}
            </Link>
        </>
    )
}

export default NavigationLinks;