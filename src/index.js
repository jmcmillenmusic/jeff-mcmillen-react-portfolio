// Imports React, the ReactDOM, App.js, and its corresponding CSS
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'bulma/css/bulma.min.css';
import './index.css';

// Renders App.js as the root component
ReactDOM.render(<App />, document.getElementById('root'));

/* 
Hierarchy:
index => App => { Header, AboutMe, Portfolio, Contact, Resume, Footer }
Header => Navigation
*/