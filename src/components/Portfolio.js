// Imports React and image sources for the 6 images to be used in the Portfolio's project cards
import React from "react";
import projImg1 from '../images/tacc.jpg';
import projImg2 from '../images/tech-blog.png';
import projImg3 from '../images/emp-tracker.png';
import projImg4 from '../images/social-network-api.png';
import github from "../images/github.png";

// Establishes arrangement of HTML for Portfolio component with cards showing names of projects and links embedded in images
function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="hex2 border1">Portfolio</h2>
            <div className="project-list">
                <div className="projectCard">
                    <a href="https://github.com/TACC/Core-Portal/pulls?q=is%3Apr+author%3Ajmcmillenmusic+" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            TACC: Core Portal
                        </h3>
                    </a>
                    <img src={projImg1} alt="Supercomputer server room with TACC logo in the middle" className="hex2 border1 screenshot"></img>
                    <p className="hex2 border1">Repository for TACC's Core Portal system where I am currently contributing to the development and improvement of portal functionality to grant researchers access to high-powered computers
                    <br /><br />
                    <em>Technologies Utilized: Python, Django, Docker, React, JavaScript</em>
                    <br /><br />
                    <a href="https://github.com/TACC/Core-Portal/pulls?q=is%3Apr+author%3Ajmcmillenmusic+" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="Blue circle GitHub Logo" className="icon"/>
                    </a>
                    </p>
                </div>
                <div className="projectCard">
                    <a href="https://github.com/TACC/Core-CMS-Custom/pulls?q=is%3Apr+author%3Ajmcmillenmusic" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            TACC: Core CMS Custom (APCD)
                        </h3>
                    </a>
                    <img src={projImg1} alt="Supercomputer server room with TACC logo in the middle" className="hex2 border1 screenshot"></img>
                    <p className="hex2 border1">Repository for TACC's Core Custom Content Management System where I am developing new features and improvement of functionality of the All-Payor Claims Database in conjunction with UTHealth Houston's School of Public Health
                    <br /><br />
                    <em>Technologies Utilized: Python, Django, Docker, React, JavaScript</em>
                    <br /><br />
                    <a href="https://github.com/TACC/Core-CMS-Custom/pulls?q=is%3Apr+author%3Ajmcmillenmusic" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="Blue circle GitHub Logo" className="icon"/>
                    </a>
                    </p>
                </div>
                <div className="projectCard">
                    <a href="https://jeff-mcmillen-tech-blog-f37a90b6c5d9.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            MVC Tech Blog
                        </h3>
                    </a>
                    <img src={projImg2} alt="Tech Blog with a list of tech-related posts and a navbar at the top" className="hex2 border1 screenshot"></img>
                    <p className="hex2 border1">Tech blog where users can create an account, log in, see all of their posts, create new posts and comment on other posts, update their posts, and delete their posts
                    <br /><br />
                    <em>Technologies Utilized: Node.js, Express.js, Sequelize.js, SQL, Handlebars.js, JavaScript</em>
                    <br /><br />
                    <a href="https://github.com/jmcmillenmusic/mvc-tech-blog" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="Blue circle GitHub Logo" className="icon"/>
                    </a>
                    </p>
                </div>
                <div className="projectCard">
                    <a href="https://drive.google.com/file/d/1wBqHTbU_OT9BV9N-uxr-OO60P_fpbp2U/view" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            SQL Employee Tracker
                        </h3>
                    </a>
                    <img src={projImg3} alt="Table of employees with names, titles, salaries, and managers" className="hex2 border1 screenshot"></img>
                    <p className="hex2 border1">Back-end application where a user can view or add departments, roles, and employees as well as update an employee's role
                    <br /><br />
                    <em>Technologies Utilized: Node.js, Express.js, SQL, Inquirer, JavaScript</em>
                    <br /><br />
                    <a href="https://github.com/jmcmillenmusic/sql-employee-tracker" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="Blue circle GitHub Logo" className="icon"/>
                    </a>
                    </p>
                </div>
                <div className="projectCard">
                    <a href="https://drive.google.com/file/d/1xXFhPI0DTqErW_hUm9eJ7e0dTsPuPG7Z/view" target="_blank" rel="noopener noreferrer">
                        <h3 className="hex2 border1">
                            NoSQL Social Network API
                        </h3>
                    </a>
                    <img src={projImg4} alt="Screenshot of a thought-provoking question and answer" className="hex2 border1 screenshot"></img>
                    <p className="hex2 border1">Back-end application where a user can create, read, update, and delete users, thoughts, and reactions (similar to posts and comments on social media)
                    <br /><br />
                    <em>Technologies Utilized: Node.js, Express.js, MongoDB, Insomnia, JavaScript</em>
                    <br /><br />
                    <a href="https://github.com/jmcmillenmusic/nosql-social-network-api" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="Blue circle GitHub Logo" className="icon"/>
                    </a>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;