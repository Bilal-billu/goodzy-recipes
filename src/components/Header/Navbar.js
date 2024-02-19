import React, { useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import { Icon } from "@iconify/react";



function Navbar(props) {

    var icon;
    var burgerIcon = "iconamoon:menu-burger-horizontal-bold";
    var xIcon = "tabler:x";

    const navBarLinks = [
        {
            text: "home",
            path: "/#heroHome"
        },
        {
            text: "about",
            path: "/#about"
        },
        {
            text: "for partners",
            path: "/#partners"
        }
    ]
    const styleMid = "visibilityHiddenMid";
    const styleSmall = "visibilityHiddenSmall navbarSmall";
    var styleFinal;
    


    return (
        <>
            <span className="visually-hidden">
                {styleFinal = props.btnHook ? styleSmall : styleMid}
                {icon = props.btnHook ? xIcon : burgerIcon}
            </span>
            <button className="bg bg-transparent ms-2 border border-0 visibilityHiddenSmall"
                onClick={props.callFunc}
            >
                <Icon icon={icon}
                    className="color text-black fs-1 fw-lighter bg-transparent" />
            </button>
            <div className={"col-12 col-md-4 " + styleFinal}>


                <div
                    className="d-flex flex-column flex-md-row justify-content-start justify-content-md-left mx-3 my-4 my-md-0 align-items-strat align-items-md-center">
                    {navBarLinks.map((link, index) => {
                        return (<NavigationLinks text={link.text} path={link.path} key={index} />)

                    })}

                </div>
            </div>
        </>
    );
}

export default Navbar;