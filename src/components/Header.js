import React from 'react';
import Navigation from "./Navigation";

const Header = props => {
    return (
        <header>
            <Navigation changePage={props.changePage}/>
            <h1 className="text-center py-3">Luke Skywalker</h1>
        </header>
    );
};

export default Header;