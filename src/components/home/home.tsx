import React from "react";
import ReactDOM from "react-dom";
import Tour from "../../models/tour";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses } from '@fortawesome/free-solid-svg-icons'


const Home: React.FC<{tours: Tour[]}> = ({ tours }) => {
    const renderTopTours = () => {
        return tours.map((tour) => {
            
            return (
                <div key={tour.id} className="top-tour-card">
                    <img src={tour.img_url} />
                    <h2>{tour.nombre}</h2>
                    <p>{tour.descripcion}</p>
                    <span className="precio">{'$' + tour.precio}</span>
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
                <h1>Tours más vendidos</h1>
                {renderTopTours()} 
                <button className="ver-mas">Ver más</button> 
            </section>  
            <section className="info-general">
                <h1>Información General</h1>
                <ul>
                    <li><FontAwesomeIcon icon={faCoffee} /></li>
                    <li><FontAwesomeIcon icon={faCoffee} /></li>
                    <li><FontAwesomeIcon icon={faCoffee} /></li>

                </ul>
            </section>
        </main>

    )
  
    
}

export default Home;