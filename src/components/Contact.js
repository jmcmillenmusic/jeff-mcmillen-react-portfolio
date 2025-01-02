// Imports React
import React from "react";

// Establishes arrangement of HTML for Contact section complete with email address and phone number
function Contact() {
    return (
        <section className="contactForm" id="contact">
            <h2 className="border1">
                Contact
            </h2>
            <section className="contactInfo border1">
                <p>Email: jmcmillenmusic@gmail.com</p>
                <p>Phone: (817) 690-7632</p>
            </section>
        </section>
    )
};

export default Contact;