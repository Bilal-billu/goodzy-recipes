import React from "react";
import { Link } from "react-router-dom";


export default function Links(props) {

    return (
        <Link to={props.path} className="btn btn-dark text-white fs-6 fs-5"><h6 className="fw-light">{props.linkName}</h6></Link>
    );
}