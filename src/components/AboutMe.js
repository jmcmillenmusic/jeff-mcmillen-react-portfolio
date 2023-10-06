// Imports React and the image source for the headshot
import React from "react";
import img from '../images/Jeff+Headshot_-001.jpg';

// Establishes arrangement of HTML for AboutMe component complete with headshot and brief bio
function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <img src={img} alt="Jeff McMillen's Headshot" className="card border1 headshot"></img>
            <div className="bio">
                <h2 className="hex1 border1">
                    About Me
                </h2>
                <p className="hex1 border1">
                I'm Jeff McMillen, a recent full-stack web development bootcamp graduate in Austin, TX who focuses on back-end development and specializes in database management and administration. I utilize SQL, MySQL, and MongoDB to create structured but flexible databases.<br /><br />You can find me on <a href="https://www.linkedin.com/in/jmcmillencode/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/jmcmillenmusic" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
            </div>
        </section>
    )
};

export default AboutMe;