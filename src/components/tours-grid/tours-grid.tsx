import React from "react";
import Tour from "../../models/tour";
import TourCard from "../tour-card/tour-card";


const ToursGrid: React.FC<{tours: Tour[]}> = ({ tours }) => {
    const renderAllTours = () => {
        return tours.map((tour) => {
            return (
                <TourCard tour={tour} />
            );
        })
    }
    return (
        <section className="tour-grid">
            <h1 className="buscar-tours-header">Buscar Tours</h1>
           {renderAllTours()} 
        </section>

    )
  
    
}

export default ToursGrid;