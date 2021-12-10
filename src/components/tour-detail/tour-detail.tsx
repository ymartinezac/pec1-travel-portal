import React from "react";
import { useParams } from 'react-router-dom';
import { FiClock, FiCompass, FiUserCheck } from "react-icons/fi";



const TourDetail = ({ tours }) => {
    const tour = tours.find(t => t.id === parseInt(useParams().id));
    console.log(useParams().id);
   

    

  
    return (
        <div className="tour-detail" >
            
            <div className="tour-header" >
               <img className="destacada" src={tour.img_url + "_medium.jpg"} />
               <div className="img2container"> 
                    <picture>
                        <source media="(max-width: 480px)" srcSet={tour.img2 + "_small.jpg"} />
                        <source media="(max-width: 640px)" srcSet={tour.img2 + "_medium.jpg"}  />
                        <source media="(max-width: 1024px)" srcSet={tour.img2 + "_medium.jpg"}  />
                        <img src={tour.img2 + "_medium.jpg"} alt={tour.nombre} />
                    </picture>
               </div>
               <div className="img3container"> 
                    <picture>
                        <source media="(max-width: 480px)" srcSet={tour.img3 + "_small.jpg"} />
                        <source media="(max-width: 640px)" srcSet={tour.img3 + "_medium.jpg"}  />
                        <source media="(max-width: 1024px)" srcSet={tour.img3 + "_medium.jpg"}  />
                        <img src={tour.img3 + "_medium.jpg"} alt={tour.nombre} />
                    </picture>
               </div>
            </div>
            <h1>{tour.nombre}</h1>
            <div className="body">
                <div className="content">
                    
                
                    <h3>Descripción</h3>
                    <div dangerouslySetInnerHTML={{ __html: tour.descripcion }} ></div>
                 
                    <ul className="details-group">
                        <li className="detalles">
                            <FiClock className="icons" /> 
                           <p> {tour.duracion} horas</p>
                        </li>
                        <li className="detalles">
                            <FiCompass className="icons" /> 
                            <p>{tour.ubicacion} </p>
                        </li>
                        {tour.guia ? 
                            <li className="detalles">
                            <FiUserCheck className="icons" /> 
                            <p>Tour con guía</p>
                        </li> :  ""}
                    </ul> 
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