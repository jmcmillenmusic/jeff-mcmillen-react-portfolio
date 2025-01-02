// Imports React
import React from "react";

// Establishes arrangement of HTML for Navigation component complete with navigation links to be installed once all components are complete
function Navigation() {
    return (
        <nav>
            <ul>
                <div className="parallelogram-container">
                    <div className="outer-parallelogram">
                        <a href="#aboutMe">
                            <li className="inner-parallelogram">About Me</li>
                        </a>
                    </div>
                </div>
                <div className="parallelogram-container">
                    <div className="outer-parallelogram">
                        <a href="#portfolio"><li className="inner-parallelogram">Portfolio</li></a>
                    </div>
                </div>
                <div className="parallelogram-container">
                    <div className="outer-parallelogram">
                        <a href="#contact"><li className="inner-parallelogram">Contact</li></a>
                    </div>
                </div>
                <div className="parallelogram-container">
                    <div className="outer-parallelogram">
                        <a href="#resume"><li className="inner-parallelogram">Resume</li></a>
                    </div>
                </div>
                <div className="parallelogram-container">
                    <div className="outer-parallelogram">
                        <a href="#links"><li className="inner-parallelogram">Links</li></a>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;