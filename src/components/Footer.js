// Imports React, the LinkedIn image, and the GitHub image
import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

// Establishes arrangement of HTML components for Links sections complete with external links to LinkedIn and GitHub
function Footer() {
    return (
        <footer className="links" id="links">
            <h2 className="hex5 border1">
                Links
            </h2>
            <section className="extLinks hex5 border1">
                <p>LinkedIn: <a href="https://www.linkedin.com/in/jmcmillencode/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Blue square LinkedIn Logo"></img></a></p>
                <p>GitHub: <a href="https://github.com/jmcmillenmusic" target="_blank" rel="noopener noreferrer"><img src={github} alt="Blue circle GitHub Logo"></img></a></p>
            </section>
        </footer>
    )
};

export default Footer;