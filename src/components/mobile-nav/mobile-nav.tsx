import React from 'react'
import { Link } from 'react-router-dom';


const MobileNav = ({handleNavToggle}) => {
    return (
        
        <div className="mobile-nav">
            <h1>🇵🇷 ViajaPR </h1>
            <a href="http://localhost:1234/" className="animate__animated animate__fadeInRight" onClick={handleNavToggle} >Inicio</a>
            <a href="http://localhost:1234/buscar-tours" className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>Buscar Tours</a>
            <a href="http://localhost:1234/presentacion" className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>Presentación</a>      
            <a href="http://localhost:1234/enlaces" className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>Enlaces</a>      
        </div>
    )
}

export default MobileNav