// Imports React
import React from "react";

// Establishes arrangement of HTML for Resume component complete with a list of skills categorized by type
function Resume() {
    return (
        <section className="resume" id="resume">
            <div className="skills">
                <h2 className="border1">
                    Technical Skills and Proficiencies
                </h2>
                <p className="border1">
                    <u>Primary Languages</u>:
                    JavaScript | jQuery | TypeScript | Python
                    <br /><br />
                    <u>Web Elements</u>:
                    Hypertext Markup Language (HTML5) | Cascading Style Sheets (CSS3)
                    <br /><br />
                    <u>CSS Frameworks</u>:
                    Bootstrap | Bulma
                    <br /><br />
                    <u>Development Tools</u>:
                    GitHub | Jira | Confluence
                    <br /><br />
                    <u>Data Routing & Route Testing</u>:
                    Application Programming Interfaces (APIs) | RESTful APIs | Insomnia
                    <br /><br />
                    <u>Programming Concepts</u>:
                    Object-Oriented Programming (OOP) | Object-Relational Mapping (ORM) | Model-View-Controller (MVC) Architecture
                    <br /><br />
                    <u>Middleware/Full-Stack Tools</u>:
                    Node.js | Express.js | Inquirer | Django
                    <br /><br />
                    <u>Databases</u>:
                    Structured Query Language (SQL) | MySQL | Sequelize.js | MongoDB | Apollo GraphQL
                    <br /><br />
                    <u>Front-End Frameworks</u>:
                    React | Handlebars.js
                    <br /><br />
                    <u>Code Quality & Testing</u>:
                    ESLint | Jest | Vite
                    <br /><br />
                    <u>App Development</u>:
                    Progressive Web Applications (PWAs)
                    <br /><br />
                    <u>Containerization</u>:
                    Docker
                    <br /><br />
                </p>
            </div>
        </section>
    )
};

export default Resume;