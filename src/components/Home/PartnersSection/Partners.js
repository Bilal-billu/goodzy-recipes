import React from "react";
import PartnerCard from "./PartnerCard";

function Partners() {
    const partners = [
        {
            logo: "",
            name: ""
        }
    ]

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" id="partners">
            <h6 className="h3 p-5 partnerDivHeading">Our Partners</h6>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center partnersContainerDiv">
                {partners.map((card) => {
                    return (<PartnerCard logo={partners.logo} name={partners.name} />);
                })}
            </div>

        </div>
    );
}

export default Partners;