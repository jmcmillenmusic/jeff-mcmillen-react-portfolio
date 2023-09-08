import React from "react";

function Navigation() {
    return (
        <nav>
            <ul>
                <div className="outer-hex">
                    <li className="inner-hex hex1">About Me</li>
                </div>
                <div className="outer-hex">
                    <li className="inner-hex hex2">Portfolio</li>
                </div>
                <div className="outer-hex">
                    <li className="inner-hex hex3">Contact</li>
                </div>
                <div className="outer-hex">
                    <li className="inner-hex hex4">Resume</li>
                </div>
                <div className="outer-hex">
                    <li className="inner-hex hex5">Links</li>
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;