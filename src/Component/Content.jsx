import './index.css'
// import MountFuji from './Images/Mount_Fuji_from.jpg'
import Marker from './Images/marker.png'

const Content = (props) => {
  console.log(props)
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.img.src} alt={props.img.alt}  className="main-image" />
      </div>
      <div className="info-container">
        <div className="location-row">
          <img src={Marker} className="marker" alt="location" />
          <h3 className="country">{props.country}</h3>
          <a href={props.googleMap}>View on google map</a>
        </div>
        
        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  )
}

export default Content
