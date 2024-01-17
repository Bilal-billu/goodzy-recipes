import './HeroSection.css'

function HeroSection() {

    return (
        <div className="justify-content-start mt-0" id="heroHome">
            <div className="heroSectionMain">

            </div>
            <div className="col-md-4 p-5 text-start textContainerHeroSection">
                <h1 className="text text-capitalize fw-bolder display-5">
                    Over 500 easy healthy meal preparation recipes
                </h1>
                <p className="my-3 fw-normal">
                    Get your family excited about meals again with easy and healthy recipes from GOODZY cooking blog.
                </p>
                <button className="p-2 px-4 mt-4 buttonAllRecipes">
                    View all recipes &gt;
                </button>
            </div>
        </div>
    );
}

export default HeroSection;