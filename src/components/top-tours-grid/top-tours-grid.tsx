
import React from "react";
import Tour from "../../models/tour";
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

const TopTours: React.FC<{tours: Tour[]}> = ({ tours }) => {
    window.scrollTo(0, 0);
    
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
      
            <section className="top-tour-grid">
                <div className="top-tours-header">
                    <h2>Tours más vendidos</h2>
                    <NavLink to="/buscar-tours" className="ver-mas">Ver más</NavLink>
                </div>
             
                    {renderTopTours()} 
               
                
            </section> 
            
       
            
    

    )
  
    
}

export default TopTours;