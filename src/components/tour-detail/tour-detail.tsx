import React from "react";
import CSS from 'csstype';
import { url } from "inspector";
import  useHover  from "../../utils/useHover";
import { FiClock, FiStar, FiCompass, FiUserCheck } from "react-icons/fi";



const TourDetail = ({ tour }) => {
    const backgroundDiv = {
        backgroundImage: "url(" + tour.img_url+ ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    const [tooltip, isTooltipHovered] = useHover();
  
    return (
        <div className="tour-detail" >
            <div className="tour-header" style={backgroundDiv}>
                <h1>{tour.nombre}</h1>
            </div>
            <div className="body">
                <div className="content">
                    
                
                    <h3>Descripción</h3>
                    <p>{tour.descripcion}</p>
                    <div className="details-group">
                        <span className="detalles">
                            <FiClock className="icons" /> 
                           <p> {tour.duracion} horas</p>
                        </span>
                        <span className="detalles">
                            <FiCompass className="icons" /> 
                            <p>{tour.ubicacion} </p>
                        </span>
                        {tour.guia ? 
                            <span className="detalles">
                            <FiUserCheck className="icons" /> 
                            <p>Tour con guía</p>
                        </span> :  ""}
                    </div> 
                </div>
                <div className="checkout">
                    <h2>$ {tour.precio} por persona</h2> 
             
                    <button className="btn-reservar">
                        Reservar                         
                    </button>
                  
                </div>
            </div>

            
            
           
        </div>

    )
  
    
}

export default TourDetail;