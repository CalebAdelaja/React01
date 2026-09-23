import SydneyOperaHouse from './Images/SydneyOperaHouse.jpeg';
import MountFuji from './Images/Mount_Fuji_from.jpg';
import Geirangerfjord from './Images/Geirangerfjord.jpeg';

const travelData = [
    {
        img:{
            src: MountFuji,
            alt:"Mount Fuji"
        },
                
        country: "Japan",
        title:"Mount Fuji",
        googleMap:"https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",
        text:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },

    {
        img:{
            src: SydneyOperaHouse,
            alt:"Sydney Opera House"
        },
                
        country: "Australia",
        title:"Sydney Opera House",
        googleMap:"https://maps.app.goo.gl/Zr17SCrsJeCEKMd3",
        text:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    },

    {
        img:{
            src: Geirangerfjord,
            alt:"Geiranger Fjord"
        },
                
        country: "Norway",
        title:"Geiranger Fjord",
        googleMap:"https://maps.app.goo.gl/fhkJuBhmFDv47tiB7",
        text:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    }
]

export default travelData