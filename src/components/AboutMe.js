// Imports React and the image source for the headshot
import React from "react";
import img from '../images/Jeff+Headshot_-001.jpg';

// Establishes arrangement of HTML for AboutMe component complete with headshot and brief bio
function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <img src={img} alt="Jeff McMillen's Headshot" className="card border1 headshot"></img>
            <div className="bio">
                <h2 className="border1">
                    About Me
                </h2>
                <p className="border1">
                I'm Jeff McMillen, a full-stack web development bootcamp graduate and recent intern at the Texas Advanced Computing Center in Austin, TX. I've equipped myself with these coding skills in order to use technology to solve people's problems. I believe that technology should not hinder our progress but should instead improve our quality of life, and I strive to do exactly that.
                <br /><br />
                You can find me on <a href="https://www.linkedin.com/in/jmcmillencode/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/jmcmillenmusic" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
            </div>
        </section>
    )
};

export default AboutMe;