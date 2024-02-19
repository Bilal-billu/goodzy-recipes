import React from 'react';
import Icons from './Icons';
import Links from './Links';

export default function Footer() {
    function socialMedia() {
        var iconList = ["mdi:facebook", //Facebook
            "teenyicons:instagram-outline", //Instagram
            "ri:twitter-fill", //Twitter
            "fa6-brands:pinterest"]; //Pinterest
        let socialIconList = [];
        for (let i = 0; i < iconList.length; i++) {
            socialIconList.push(<Icons name={iconList[i]} key={i} />);
        }
        return socialIconList;
    }

    let linkrecipes = [
        {
            text: "All recipes",
            path: "/recipes-all"
        },
        {
            text: "About",
            path: "/about"
        },
        {
            text: "For partners",
            path: "/partners"
        },
        {
            text: "Recepie FAQ",
            path: "/recipes-faq"
        }
    ]
    let linkLicensingAndInfo = [
        {
            text: "Webflow admin",
            path: "/admin",
        },
        {
            text: "Licensing",
            path: "/licensing",
        },
        {
            text: "Changelog",
            path: "/change-log",
        },
        {
            text: "Style Guide",
            path: "/style-guide",
        },
        {
            text: "404",
            pat: "/e-4-0-4"
        }
    ];

    return (
        <div className='bg-dark d-flex flex-column align-items-center align-content-center text-light p-md-3 pb-5'>
            <h1 className='text-uppercase h1 display-5'>Goodzy</h1>
            <p>Easy healthy recipes that make you feel good.</p>
            <div className='d-flex justify-content-center col-md-5 my-md-4'>
                {socialMedia()}
            </div>
            <div className='d-flex justify-content-around justify-content-center col-md-5'>
                {/* Recepie Info */}
                {linkrecipes.map((link, index) => {
                    return (<Links linkName={link.text} path={link.path} key={index} />)
                })}

            </div>
            <div className='col-10 d-flex flex-column align-items-center'>
                <div className='border-1 border-top border-bottom border-top-white col-md-11 p-1 '>
                    <div className='d-flex justify-content-around  col-md-10'>
                        {/* Licensing and Information */}
                        {linkLicensingAndInfo.map((link, index) => {
                            return (<Links linkName={link.text} path={link.path} key={index} />)
                        })}
                    </div>
                </div>
                <div>
                    <small className='small'>
                        <ul className='list-group-horizontal list-group-horizontal-md list-inline  m-4'>
                            <li className='list-inline-item'>&#169; Copyright 2024</li>
                            <li className='list-inline-item'>Developed by <u>Bilal Malik</u></li>
                        </ul>
                    </small>
                </div>
            </div>
        </div>
    );
}