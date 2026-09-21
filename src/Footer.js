import './App.css'
const Footer = () => {
    const date = new Date()
  return (
    <footer className="foter">
      <h3>I'm Happy to Learn React 🎉💃</h3>
      <small>caleb copyright &copy; {date.getFullYear()} </small>
    </footer>
  )
}

export default Footer
