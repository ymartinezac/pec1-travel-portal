import React from "react";


const TourDetail = ({ tour }) => {
    

    return (
        <div className="tour-detail">
            <div className="tour-img-mask">
                <img src={tour.img_url} alt={tour.nombre} />
                
            </div>
            <h1>{tour.nombre}</h1>
            
           
        </div>

    )
  
    
}

export default TourDetail;