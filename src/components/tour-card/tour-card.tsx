import React from "react";
import Tour from "../../models/tour";
import { FiClock, FiStar } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const TourCard: React.FC<{tour: Tour}> = ({ tour }) => {


 return (
    <div key={tour.id} className="top-tour-card">
        <div className="img-mask">
            <img src={tour.thumbnail} />
        </div>

        { tour.tag ?
            <div className="tag">
                <FiStar className="icons" />
                <p>{tour.tag}</p>
            </div>   
        : null}
       
        <h2>{tour.nombre}</h2>
        <div className="tour-specs">
            <FiClock className="icons" /> 
            <p>Duración: {tour.duracion} horas</p>
        </div>
        <div className="tour-price">
            <p><span className="precio">{'$' + tour.precio}</span> por persona</p>
        </div>
        
        <button className="btn-reservar"><NavLink className="nav-btn" to={"/tours/" + tour.id }>Reserva ahora </NavLink></button>
    </div>
 )
}


export default TourCard;