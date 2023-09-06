// Import all components 
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Establishes arrangement of components on the page
function App() {
    return (
        <div>
            <Header />
            <AboutMe />
            <Portfolio />
            <Contact />
            <Resume />
            <Footer />
        </div>
    );
};

export default App;