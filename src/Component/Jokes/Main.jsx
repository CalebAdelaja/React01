import '../index.css'
import React from 'react'
const Main = (props) => {
  console.log(props)
  const [isShown, setIsShown] = React.useState(false)
  // we set our useState to be false 
  // So isShown = false
  const toggleShown = () => {
    //This the function that we'll attach to the button
    //If the butto is clicked the function will run
    setIsShown((prevShown) => {
      //The is our updater that will flip  isShown from false to true
      return (!prevShown)
    })
  }
  console.log(isShown)
  return (
    <article className='joke-card'>
      <div className='joke-setup'>
        <span className='joke-label'>Setup</span>
        {props.setup && <h2>{props.setup}</h2>}
      </div>
      <div className='joke-punchline'>
        <span className='joke-label'>Punchline</span>
        {isShown && <p>{props.punchline}</p>}
      </div>
      <button onClick={toggleShown}>Show Punchline</button>
    </article>
  )
}

export default Main
