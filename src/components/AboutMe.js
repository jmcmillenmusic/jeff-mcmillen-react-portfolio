import React from "react";
import img from '../images/Jeff+Headshot_-001.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <br />
            <img src={img} alt="Jeff McMillen's Headshot" className="card border1"></img>
            <div className="bio">
                <h2 className="hex1 border1 is-size-2">
                    About Me
                </h2>
                <p className="hex1 border1">
                    I'm Jeff McMillen, a web developer in Austin, TX who previously worked in game audio for the last 10 years. In this new career path, my vocational goal is to use code to solve people's problems. When I'm not working on code, you can find me walking, hiking, playing disc golf, playing all kinds of games (board, card, computer, and video games), reading, and spending time with friends and family.
                </p>
            </div>
        </section>
    )
};

export default AboutMe;