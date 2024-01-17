import React from "react";
import { Icon } from "@iconify/react";


function Searchbar(props) {
    var icon;
    
    var searchIcon="iconamoon:search-bold";
    var xIcon = "tabler:x";
    
    const styleMid = "visibilityHiddenMid";
    const styleSmall = "headerBody visibilityHiddenSmall"
    var styleFinal;
    return (
        <>
        <span className="visually-hidden">
            {styleFinal=!props.btnHook?styleMid:styleSmall}
            {icon=props.btnHook?xIcon:searchIcon}
        </span>
            <div className={"col-10 col-md-4 " + styleFinal}>
                <div className="border border-dark rounded-pill d-flex flex-md-row px-2 col-12">
                    <div className="col-12">
                        <form className="d-flex flex-row align-items-center justify-content-center col-12 py-3">
                            <input type="text" placeholder="Want a dessert?" className="border border-0 p-2 col-10" />
                            <button className="border border-0 bg-transparent col-2 h4"><Icon icon="ic:round-search" /></button>
                        </form>
                    </div>
                </div>
            </div>
            <button className="bg bg-transparent me-2 border border-0 visibilityHiddenSmall"
            onClick={props.callFunc}
            >
                <Icon icon={icon}
                    className="color text-black fs-1 fw-lighter bg-transparent" />
                    
            </button>
        </>
    )
}

export default Searchbar;