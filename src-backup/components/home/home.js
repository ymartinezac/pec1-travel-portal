import React from "react";



const Home = ({ tours }) => {
    const renderTopTours = () => {
        return tours.map((tour) => {
          
            return (
                <div key={tour.id} className="top-tour-card">
                   
                    <h2>{tour.nombre}</h2>
                    <p>{tour.descripcion}</p>
                    <span className="precio">{'$' + tour.precio}</span>
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
                <button>Ver más</button> 
            </section>  
            <section className="info-general">
                <h1>Información General</h1>
            </section>
        </main>

    )
  
    
}

export default Home;