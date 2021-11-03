import React from 'react'
import { Link } from 'react-router-dom';


const MobileNav = ({handleNavToggle}) => {
    return (
        <div className="mobile-nav">
            <a href="http://localhost:1234/" className="animate__animated animate__fadeInRight" onClick={handleNavToggle} >Inicio</a>
            <a href="#" className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>Buscar Tours</a>
            <a href="http://localhost:1234/sobre-nosotros" className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>Sobre Nosotros</a>      
        </div>
    )
}

export default MobileNav