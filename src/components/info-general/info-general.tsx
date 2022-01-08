import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses, faGlobe, faCalendarCheck, faClock } from '@fortawesome/free-solid-svg-icons'

const InfoGeneral = () => {
    const img_url = window.location.href + "images/caborojo_small.avif";
    return (
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
                <LazyLoadImage src={img_url} alt="arco de piedras en la playa" className="clip-svg" width="486" height="350"/>
                <svg width="0" height="0">
                <defs>
                    <clipPath id="myClip">
                    <circle cx="180" cy="200" r="140"/>
                    <circle cx="330" cy="140" r="140"/>
                    </clipPath>
                </defs>
                </svg>
            
                </section>

    )
  
    
}

export default InfoGeneral;