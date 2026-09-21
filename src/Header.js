//Here we create a Custome funtion component 
import logo from "./logo.svg";//Herr we insert the React logo we want to use it in the header
import './App.css';//Our stlying for the App 
const Header = () => { //Note the first letter of the fuunction name  will be in capital letter in React
  return (
    <header className="nav">
        <img src={logo} className="App-logo" alt="React-logo" />
        <h2>Learn React</h2>
      </header>
  )
}

export default Header;
