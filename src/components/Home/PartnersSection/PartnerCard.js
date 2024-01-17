
import { Icon } from "@iconify/react";

function PartnerCard({ logo = "", name = "none" }) {
    return (
        <div className="d-flex flex-column align-items-center">
            <figure className="d-flex flex-column align-items-center">
                {logo ? <img src={logo} alt="Partner logo" /> : <Icon icon="guidance:forbidden-2" className="display-1" />}

                <figcaption className="p-5 p-md-4 h6">{name}</figcaption>
            </figure>
        </div>
    )
}
export default PartnerCard;