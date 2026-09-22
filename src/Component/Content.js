import './index.css'
import MountFuji from './Images/Mount_Fuji_from.jpg'
import Marker from './Images/marker.png'

const Content = () => {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={MountFuji} className="main-image" alt="Mount Fuji in Japan" />
      </div>
      <div className="info-container">
        <div className="location-row">
          <img src={Marker} className="marker" alt="location" />
          <h3 className="country">Japan</h3>
          <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View on google map</a>
        </div>
        
        <h2 className="entry-title">Mount Fuji</h2>
        <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </article>
  )
}

export default Content
