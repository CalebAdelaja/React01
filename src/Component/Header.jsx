import Globle from './Images/global.png'
// import './index.css'
const Header = () => {
  return (
    <header className="travel-nav">
        <img src={Globle} className='logo' alt="" />
        <h1>My Travel Journal</h1>
    </header>
  )
}

export default Header
