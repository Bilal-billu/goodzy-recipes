import React from "react";
import { Link } from "react-router-dom";
import './FAQSuggestion.css'

function FAQSuggestion(props) {
    return (
        <div className="d-flex flex-row p-5 justify-content-center containerFAQSuggestion">
            <p className="p-0 fw-bold fs-5">
                Have questions about a recipe?
                <Link to={props.pathFAQ} className="linkedFAQSuggestion">
                    Check our recipe FAQ
                </Link>
            </p>

        </div>
    );
}

export default FAQSuggestion;