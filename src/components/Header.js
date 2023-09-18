// Import React and the Navigation component
import React from "react";
import Navigation from './Navigation';

// Establishes arrangement of HTML for Header component
function Header() {
    return (
        <header className="columns">
            <div className="column is-narrow"></div>
            <h1 className="border1 is-size-1">JEFF McMILLEN</h1>
            <Navigation />
            <br />
        </header>
    );
};

export default Header;