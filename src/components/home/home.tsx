import React from "react";
import Tour from "../../models/tour";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses, faGlobe, faCalendarCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import TourCard from "../tour-card/tour-card";
import { NavLink } from "react-router-dom";

const puntuacionMedia = (tour: Tour) => {
    var sum = 0;
    tour.ratings.map(rating => { 
        if(typeof rating.puntuacion == "number"){
           sum += rating.puntuacion; 
        }
    })
    const length = tour.ratings.length;
    return (sum / length);
}

function compare( a, b ) {
   
    if ( puntuacionMedia(a) > puntuacionMedia(b) ){
        console.log(puntuacionMedia(a) < puntuacionMedia(b));
         return -1;
    }
    else if ( puntuacionMedia(a) < puntuacionMedia(b) ){
        return 1;
    }
    else {
        return 0;
    }
  }

const compararPuntuaciones = ( tours: Array<Tour> ) => {
    return tours.sort( compare );
}

const Home: React.FC<{tours: Tour[]}> = ({ tours }) => {
    const img_url = window.location.href + "images/caborojo_small.jpg";
    const renderTopTours = () => {
        const sortedTours = compararPuntuaciones(tours);
        const top3 = sortedTours.slice(0, 3);
        return top3.map((tour: Tour) => {
            return (
                <TourCard tour={tour} />
            );
        })
    }
    return (
        <main className="home-main">
            <section className="main-landing">
                <div>
                    <h1>Puerto Rico</h1>
                    <h2>Isla del Encanto</h2>
                </div>
            </section>
            <section className="top-tour-grid">
                <div className="top-tours-header">
                    <h1>Tours más vendidos</h1>
                    <NavLink to="/buscar-tours" className="ver-mas">Ver más</NavLink>
                </div>
             
                    {renderTopTours()} 
               
                
            </section> 
            <section className="snorkel">
                <h1>Sumérgete en nuestros <span>snorkeling tours</span></h1>
                <img src="https://www.svgrepo.com/show/286446/diving-mask-snorkel.svg" className="snorkel-svg" alt="snorkeling mask"/>
                
            </section> 
            <section className="info-general">
                <h1>Información General</h1>
                
                <ul>
                    <li><FontAwesomeIcon className="icons" icon={faViruses} /> 
                        <div>
                            <h2>Medidas Covid-19</h2>
                            <p>Implementamos procolos de limpieza y seguridad para disminuir posibilidades de contagio.</p>
                        </div>
                    </li>
                    <li><FontAwesomeIcon className="icons" icon={faGlobe} /> 
                        <div>
                            <h2>Guías Bilingües</h2>
                            <p>Todos nuestros guías turísticos hablan al menos español e inglés.</p>
                        </div>
                    </li>
                    <li><FontAwesomeIcon className="icons" icon={faCalendarCheck} /> 
                        <div>
                            <h2>Reembolsos por cancelaciones</h2>
                            <p>Cancelaciones antes de las 24h previas al tour serán reembolsadas en su totalidad.</p>
                        </div>
                    </li>
                </ul>
                <img src={img_url} alt="arco de piedras en la playa" className="clip-svg" />
                <svg width="0" height="0">
  <defs>
    <clipPath id="myClip">
      <circle cx="180" cy="200" r="140"/>
      <circle cx="330" cy="140" r="140"/>
    </clipPath>
  </defs>
</svg>
            
                </section>
        </main>

    )
  
    
}

export default Home;