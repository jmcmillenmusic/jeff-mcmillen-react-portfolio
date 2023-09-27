// Imports React and the image source for the headshot
import React from "react";
import img from '../images/Jeff+Headshot_-001.jpg';

// Establishes arrangement of HTML for AboutMe component complete with headshot and brief bio
function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <img src={img} alt="Jeff McMillen's Headshot" className="card border1 headshot"></img>
            <div className="bio">
                <h2 className="hex1 border1 is-size-2">
                    About Me
                </h2>
                <p className="hex1 border1">
                    I'm Jeff McMillen, a web developer in Austin, TX who previously worked in game audio for the last 10 years. In this new career path, my vocational goal is to use code to solve people's problems. When I'm not working on code, you can find me walking, hiking, playing disc golf, playing all kinds of games (board, card, computer, and video games), reading, and spending time with friends and family.<br /><br />You can find me on <a href="https://www.linkedin.com/in/jmcmillencode/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/jmcmillenmusic" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
            </div>
        </section>
    )
};

export default AboutMe;