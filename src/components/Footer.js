// Imports React
import React from "react";

// Establishes arrangement of HTML components for Links sections complete with external links to LinkedIn and GitHub
function Footer() {
    return (
        <footer className="links" id="links">
            <h2 className="hex5 border1">
                Links
            </h2>
            <section className="extLinks hex5 border1">
                <p>LinkedIn: <a href="https://www.linkedin.com/in/jmcmillencode/" target="_blank" rel="noreferrer">www.linkedin.com/in/jmcmillencode/</a></p>
                <p>GitHub: <a href="https://github.com/jmcmillenmusic" target="_blank" rel="noreferrer">www.github.com/jmcmillenmusic</a></p>
            </section>
        </footer>
    )
};

export default Footer;