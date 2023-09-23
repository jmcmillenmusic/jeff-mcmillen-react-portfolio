// Import all components and the CSS document for all components
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

import projects from './projectList';

// Establishes arrangement of components on the page
function App() {
    return (
        <div className='app'>
            <Header />
            <AboutMe />
            {/* <Portfolio projects={projects}/> */}
            {/* <Contact /> */}
            {/* <Resume /> */}
            {/* <Footer /> */}
        </div>
    );
};

export default App;