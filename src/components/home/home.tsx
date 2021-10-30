import React from "react";
import ReactDOM from "react-dom";
import Tour from "../../models/tour";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses, faGlobe, faCalendarCheck, faClock } from '@fortawesome/free-solid-svg-icons'


const Home: React.FC<{tours: Tour[]}> = ({ tours }) => {
    const renderTopTours = () => {
        return tours.map((tour) => {
            
            return (
                <div key={tour.id} className="top-tour-card">
                    <div className="img-mask">
                        <img src={tour.img_url} />
                    </div>
                    <h2>{tour.nombre}</h2>
                    <div className="tour-specs">
                        <FontAwesomeIcon className="icons" icon={faClock} /> 
                        <p>Duración: {tour.duracion} horas</p>
                    </div>
                    <p><span className="precio">{'$' + tour.precio}</span> por persona</p>
                    <button>Reserva ahora</button>
                </div>
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
            <section className="top-tours">
                <div className="top-tours-header">
                    <h1>Tours más vendidos</h1>
                    <a className="ver-mas" href="#">Ver más</a>
                </div>
                {renderTopTours()} 
                
            </section> 
            <section className="snorkel">
                <h1>Sumérgete en nuestros <span>snorkeling tours</span></h1>
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
                <img src="https://images.unsplash.com/photo-1599582871426-a44765cedca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=520&q=80" alt="arco de piedras en la playa" />
            </section>
        </main>

    )
  
    
}

export default Home;