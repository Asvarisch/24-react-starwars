import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";

const Navigation = props => {

    return (
        <nav className="fixed-top ml-4 mt-2">
            <ul className="nav">
                <li onClick={() => props.changePage(homePage)} className="nav-item btn btn-danger mx-1">Home</li>
                <li onClick={() => props.changePage(aboutMePage)} className="nav-item btn btn-danger mx-1">About me</li>
                <li onClick={() => props.changePage(starWarsPage)} className="nav-item btn btn-danger mx-1">Star wars</li>
                <li onClick={() => props.changePage(contactPage)} className="nav-item btn btn-danger mx-1">Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;