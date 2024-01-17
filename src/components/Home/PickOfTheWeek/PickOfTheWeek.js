import React from "react";
import './PickOfTheWeek.css'
// props:{
//     image 
//     bgColor 
//     textColor => bootstrap class
//     title 
//     description

// }
function PickOfTheWeek(props) {
    const styleContainer = {
        backgroundColor: props.propsContainerObject.bgColor
    }
    
    const bootstrapClasses = "col-md-4 text-md-center p-2 d-flex flex-column justify-content-center align-items-center textContainerPickWeek " + props.textColor;
    return (
        <div className="m-2 justify-content-between align-items-center d-flex flex-column flex-md-row" style={styleContainer}>
            <div className={bootstrapClasses}>
                <small className="text-uppercase">Pick of the week</small>
                <h3 className="text text-capitalize fw-bolder display-6 my-3">{props.propsContainerObject.title}</h3>
                <p className="my-3 fw-normal py-2 descriptionPickWeek">{props.propsContainerObject.description}</p>
                <button className="p-2 px-4 mt-4 buttonPickWeek buttonPickWeekSpecific" >
                    View recipe &gt;
                </button>
            </div>
            <div className="col-md-7">
                <img src={props.propsContainerObject.image} className="imgPickWeek" alt ="Pick of the week"/>
            </div>

        </div>
    )
}

export default PickOfTheWeek;