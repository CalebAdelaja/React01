/* The index.js this is basically one of the place where the react application gets connected to the webpage */

/* Below we have the keyword "import" This is JavaScript's module import syntax.(That is importing from a specific files) */
import React from 'react';//So here this means I want to use something from the react package in this file.
import ReactDOM from 'react-dom/client';//We're importing React DOM functionality.
import './index.css';// Same we have been talking about importing something from the index.css file
import App from './App'; //We're importing the App component that we created (App.js)
import reportWebVitals from './reportWebVitals';

// ReactDOM.createRoot(document.getElementById('root')).render() it can also be written like this too here we attach the render to the DOM directly 
const root = ReactDOM.createRoot(document.getElementById('root'));
/* Here Above code we selected the root elemnt fron the public/index.html file there is a <div id="root"></div> so we selected the root id in this file here document.getElementById('root'). ReactDOM.createRoot connects your React code directly to a single HTML element in your index.html file. that is create a root with that DOM element (selected in the index.js here). So when you use ReactDOM.createRoot(document.getElementById('root')), you are telling React: "Find the blank <div> in the HTML that has the ID 'root', and give React total control over everything inside it. */
root.render( //So this means react  will Render the App component into this root It is the exact moment your React code turns into actual, visible HTML on the screen.Actually this .render() is just like appendChild ()
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
