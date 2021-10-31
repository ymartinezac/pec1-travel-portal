import React from "react";
import Link from "react-router-dom";

const TopNav = () => {
    return (
        <header>
            <h1><a href="#">🇵🇷 ViajaPR</a></h1>
            <nav>
                <a href="http://localhost:1234/">Inicio</a>
                <a href="#">Buscar Tours</a>
                <a href="http://localhost:1234/sobre-nosotros">Sobre Nosotros</a>

                <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            </nav>
            
        </header>

    )
  
    
}

export default TopNav;