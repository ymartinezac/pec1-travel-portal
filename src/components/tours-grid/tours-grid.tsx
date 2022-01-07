import React from "react";
import Tour from "../../models/tour";
import TourCard from "../tour-card/tour-card";


const ToursGrid: React.FC<{tours: Tour[]}> = ({ tours }) => {
    window.scrollTo(0, 0);
    const renderAllTours = () => {
        return tours.map((tour) => {
            return (
                <TourCard tour={tour} />
            );
        })
    }
    return (
        <main className="tour-grid">
            <h1 className="buscar-tours-header">Buscar Tours</h1>
           {renderAllTours()} 
        </main>

    )
  
    
}

export default ToursGrid;