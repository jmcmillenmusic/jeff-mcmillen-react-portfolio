// Imports React, the resume icon, and the resume
import React from "react";
import img from "../images/resume-icon.png";
import resume from "../files/McMillen_Jeff_WebDev_Resume.pdf";

// Establishes arrangement of HTML for Resume component complete with a list of skills and a link to download the resume
function Resume() {
    return (
        <section className="resume" id="resume">
            <a href={resume} download="McMillen_Jeff_WebDev_Resume.pdf"><img src={img} alt="Icon for a resume" className="resumeIcon border1"></img></a>
            <div className="skills">
                <h2 className="hex4 border1">
                    Resume
                </h2>
                <p className="hex4 border1">
                    <em>Skills: Hypertext Markup Language (HTML5), Cascading Style Sheets (CSS3), JavaScript, GitHub, jQuery, Bootstrap, Bulma, Application Programming Interfaces (APIs), Node.js, Express.js, Insomnia, Object-Oriented Programming (OOP), Jest, Inquirer, Object-Relational Mapping (ORM), RESTful APIs, Structured Query Language (SQL), MySQL, Sequelize.js, Handlebars.js, Model-View-Controller (MVC) Architecture, ESLint, MongoDB, Progressive Web Applications (PWAs), React.js, Apollo GraphQL</em>
                </p>
            </div>
        </section>
    )
};

export default Resume;