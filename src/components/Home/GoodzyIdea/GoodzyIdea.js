
import "./GoodzyIdea.css"

function GoodzyIdea() {
    const smallIntro = [
        {
            h3: "10 ingredients",
            p: "All recipes require not more than 10 ingredients to make"
        },
        {
            h3: "1 bowl",
            p: "All recipes are enough to fill 1 person"
        },
        {
            h3: "30 minutes",
            p: "All recipes require not more than 30 minutes to make"
        }
    ];
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center flex-nowrap divContainerGoodzyIdea"
            id="about">
            <div className="col-12 col-md-6 imgContainerGoodzyIdea">
                <img src="https://imhardware.pk/wp-content/uploads/2019/06/woodendecorationresized05.jpg"
                    className="col-md-12 imgGoodzyIdea" alt="Idea behind Goodzy" />
            </div>
            <div className="col-md-5 d-flex flex-column m-3 me-md-5 p-md-4 pe-md-5">
                <h1 className="h1 text-capitalize fw-bolder mb-md-4">Idea behind GOODZY</h1>
                {smallIntro.map((value, index) => {
                    return (<div key={index}>
                        <h4 className="text-capitalize fw-bold mt-md-5">{value.h3}</h4>
                        <p className="font fs-6">{value.p}</p>
                    </div>
                    );
                })}
                <button className="p-2 px-md-4 mt-3 mt-md-5 col-md-4 fw-bold fs-5 buttonGoodzyIdea">Learn more &gt;</button>
            </div>
        </div>
    );
}

export default GoodzyIdea;