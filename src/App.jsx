/* The App.js This is where you'll find the main App component that Create React App gives you. */
// import logo from './logo.svg';
import './App.css';
import Header from './Header'; //Here we import component that we create in the header.js file
import Content from './Content'; //here we import component that we create in the Conent.js file
import Footer from './Footer';//here we import component that we create in the Footer.js file
import './Component/index.css'
import HeaderTravel from './Component/Header';
import ContentTravel from './Component/Content';
import TravelData from './Component/data'
import jokes from './Component/Jokes/jokeData';
import Main from './Component/Jokes/Main';
/* import MountFuji from './Component/Images/Mount_Fuji_from.jpg';
import SydneyOperaHouse from './Component/Images/SydneyOperaHouse.jpeg';
import Geirangerfjord from './Component/Images/Geirangerfjord.jpeg'; */

function App() { /* /here App is a react component <App />can be thought of as using that component. function App() {, a javascript function called App(that's the name of the function), means we're defining an App component. The function returns something.(remember the function here is a react component) so we say the react compenent return something similar exactly like HTML code which is called JSX is a syntax extension for JavaScript that allows us to write HTML-like markup inside JavaScript. */
  
  /* const multiNames = () => {
    const stacks = ["HTML", "CSS", "JAVASCRIPT", "REACT"]
    const handler = Math.floor(Math.random() * 4)
    return stacks[handler]
  } */
  const travelElement = TravelData.map((data) => {
    console.log(data)
    return (
      <ContentTravel 
        key={data.id}
        // country={data.country}
        // img={data.img}
        // title={data.title}
        // googleMap={data.googleMap}
        // text={data.text}
        {...data}
      />
    )
  })
  const mapJokes = jokes.map((joke) => {
    return (  
      <Main
        key={joke.id}
        // setup={joke.setup}
        // punchline={joke.punchline} 
        {...joke}
      />
    )
  })
  return (
    <div className="App">{/* Note in JSX you can not write element next to each other,      instead you wrap it in a parent element and inside the parent element you can have as many children inside the parent element  */}
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
      <h1>project 2: Travel Journal Project </h1>
      <div className='travel-journal'>
        <HeaderTravel />
        {travelElement}
      </div>

      <section className='jokes-section'>
        <div className='jokes-heading'>
          <span className='jokes-eyebrow'>A little Naija humor</span>
          <h1>Jokes, setup to punchline</h1>
        </div>
        <div className='jokes-list'>
        {mapJokes}
        </div>
      </section>
    </div>
  );
}

export default App; //export default is a syntax introduced in ES6 (ECMAScript 2015) used to export a single primary value, function, class, or object from a module (a JavaScript file). A JavaScript file can have only one default export (That is Max one per file.)