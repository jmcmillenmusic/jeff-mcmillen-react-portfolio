// Imports React
import React from "react";

// Establishes arrangement of HTML for Navigation component complete with navigation links to be installed once all components are complete
function Navigation() {
    return (
        <nav>
            <ul>
                <div className="hex-shadow">
                    <div className="outer-hex">
                        <a href="#aboutMe"><li className="inner-hex hex1">About Me</li></a>
                    </div>
                </div>
                <div className="hex-shadow">
                    <div className="outer-hex">
                        <a href="#portfolio"><li className="inner-hex hex2">Portfolio</li></a>
                    </div>
                </div>
                <div className="hex-shadow">
                    <div className="outer-hex">
                        <a href="#contact"><li className="inner-hex hex3">Contact</li></a>
                    </div>
                </div>
                <div className="hex-shadow">
                    <div className="outer-hex">
                        <a href="#resume"><li className="inner-hex hex4">Resume</li></a>
                    </div>
                </div>
                <div className="hex-shadow">
                    <div className="outer-hex">
                        <a href="#links"><li className="inner-hex hex5">Links</li></a>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;