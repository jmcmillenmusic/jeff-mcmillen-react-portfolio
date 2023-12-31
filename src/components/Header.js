// Import React and the Navigation component
import React from "react";
import Navigation from './Navigation';

// Establishes arrangement of HTML for Header component
function Header() {
    return (
        <header>
            <div className="name">
                <h1 className="border1">JEFF McMILLEN</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;