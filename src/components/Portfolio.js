// Imports React and image sources for the 6 images to be used in the Portfolio's project cards
import React from "react";
import projImg1 from '../images/chronoscape.jpg';
import projImg2 from '../images/earth.jpg';
import projImg3 from '../images/emp-tracker.png';
import projImg4 from '../images/social-network-api.png';
import projImg5 from '../images/ecommerce.png';
import projImg6 from '../images/tech-blog.png';

// Establishes arrangement of HTML for Portfolio component with cards showing names of projects and links embedded in images
function Portfolio({ projects }) {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="hex2 border1">Portfolio</h2>
            <div className="project-list">
                <div className="projectCard">
                    <a href="https://chronoscape-g3-dd74e8283e15.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            Chronoscape
                        </h3>
                    </a>
                    <img src={projImg1} alt="Open portal with lights streaming out from it" className="hex2 border1"></img>
                    <p className="hex2 border1">Choose-your-own-adventure game where you are a Multiverse Protection Force (MPF) agent sent to track down another MPF agent who has gone rogue
                    <br /><br />
                    <em>Technologies Utilized: Structured Query Language (SQL), Sequelize.js, Handlebars.js, ESLint, JavaScript</em></p>
                </div>
                <div className="projectCard">
                    <a href="https://jmcmillenmusic.github.io/celestracker/" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            CelesTracker
                        </h3>
                    </a>
                    <img src={projImg2} alt="Planet Earth with a view of space in the background" className="hex2 border1"></img>
                    <p className="hex2 border1">Application where the user submits their location and the name of a star, planet, or constellation and receives altitude and azimuth coordinates
                    <br /><br />
                    <em>Technologies Utilized: Hypertext Markup Language (HTML5), Cascading Style Sheets (CSS3), Bulma, JavaScript, Application Programming Interfaces (APIs)</em></p>
                </div>
                <div className="projectCard">
                    <a href="https://github.com/jmcmillenmusic/sql-employee-tracker" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            SQL Employee Tracker
                        </h3>
                    </a>
                    <img src={projImg3} alt="Table of employees with names, titles, salaries, and managers" className="hex2 border1"></img>
                    <p className="hex2 border1">Back-end application where a user can view or add departments, roles, and employees as well as update an employee's role
                    <br /><br />
                    <em>Technologies Utilized: Node.js, Express.js, SQL, Inquirer, JavaScript</em></p>
                </div>
                <div className="projectCard">
                    <a href="https://github.com/jmcmillenmusic/nosql-social-network-api" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            NoSQL Social Network API
                        </h3>
                    </a>
                    <img src={projImg4} alt="Screenshot of a thought-provoking question and answer" className="hex2 border1"></img>
                    <p className="hex2 border1">Back-end application where a user can create, read, update, and delete users, thoughts, and reactions (similar to posts and comments on social media)
                    <br /><br />
                    <em>Technologies Utilized: Node.js, Express.js, MongoDB, Insomnia, JavaScript</em></p>
                </div>
                <div className="projectCard">
                    <a href="https://github.com/jmcmillenmusic/orm-e-commerce-back-end" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            ORM E-Commerce Back-End
                        </h3>
                    </a>
                    <img src={projImg5} alt="List of functions for updating inventory for an e-commerce site" className="hex2 border1"></img>
                    <p className="hex2 border1">Tech demo that utilizes application programming interface routes to create, read, update, and delete data for an online store
                    <br /><br />
                    <em>Technologies Utilized: Node.js, Express.js, Sequelize.js, Insomnia, Object-Relational Mapping (ORM), JavaScript</em></p>
                </div>
                <div className="projectCard">
                    <a href="https://jeff-mcmillen-tech-blog-f37a90b6c5d9.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            MVC Tech Blog
                        </h3>
                    </a>
                    <img src={projImg6} alt="Tech Blog with a list of tech-related posts and a navbar at the top" className="hex2 border1"></img>
                    <p className="hex2 border1">Tech blog where users can create an account, log in, see all of their posts, create new posts and comment on other posts, update their posts, and delete their posts
                    <br /><br />
                    <em>Technologies Utilized: Node.js, Express.js, Sequelize.js, SQL, Handlebars.js, JavaScript</em></p>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;