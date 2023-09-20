import React from "react";

function Contact() {
    return (
        <section className="contactForm">
            <h2 className="hex3 border1">
                Contact
            </h2>
            <section className="contactInfo hex3 border1">
                <p>Email: jmcmillenmusic@gmail.com </p>
                <br />
                <p>Phone: (817) 690-7632</p>
            </section>
            {/* <form className="hex3 border1">
                <label for="name">
                    <p>Name:</p>
                    <input type="text" name="name" id="name" required/>
                </label>
                <label for="email">
                    <p>Email:</p>
                    <input type="email" name="email" id="email" required/>
                </label>
                <label for="message">
                    <p>Message:</p>
                    <textarea type="text" name="message" id="message" required/>
                </label>
                <label for="submit">
                    <p>Submit:</p>
                    <input type="submit" name="submit" id="submit"/>
                </label>
            </form> */}
        </section>
    )
};

export default Contact;