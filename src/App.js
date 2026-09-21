/* The App.js This is where you'll find the main App component that Create React App gives you. */
// import logo from './logo.svg';
import './App.css';
import Header from './Header'; //Here we import component that we create in the header.js file
import Content from './Content'; //here we import component that we create in the Conent.js file
import Footer from './Footer';//here we import component that we create in the Footer.js file

function App() { /* /here App is a react component <App />can be thought of as using that component. function App() {, a javascript function called App(that's the name of the function), means we're defining an App component. The function returns something.(remember the function here is a react component) so we say the react compenent return something similar exactly like HTML code which is called JSX is a syntax extension for JavaScript that allows us to write HTML-like markup inside JavaScript. */
  
  /* const multiNames = () => {
    const stacks = ["HTML", "CSS", "JAVASCRIPT", "REACT"]
    const handler = Math.floor(Math.random() * 4)
    return stacks[handler]
  } */

  return (
    <div className="App">{/* Note in JSX you can not weite element next to each other, instead you wrap it in a parent element and inside the parent element you can have as many children inside the parent element  */}
    <h1>Project 1: React Fact Project</h1>
      <div className="App-header">
        <Header />
        <Content />
        <Footer/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <p>List of tacks randomly</p>
        
        <ul>
          <li>{multiNames()}</li>
          <li>{multiNames()}</li>
          <li>{multiNames()}</li>
          <li>{multiNames()}</li>
        </ul> */}
      </div>
      <div>
        <h1>project 2: Travel Journal Project </h1>
      </div>
    </div>
  );
}

export default App; //export default is a syntax introduced in ES6 (ECMAScript 2015) used to export a single primary value, function, class, or object from a module (a JavaScript file). A JavaScript file can have only one default export (That is Max one per file.)