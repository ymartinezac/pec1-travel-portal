import React from "react";
import Link from "react-router-dom";

const TopNav = () => {
    return (
        <header>
            <h1><a href="http://localhost:1234/" >🇵🇷 ViajaPR </a></h1>
            <nav>
                <a href="http://localhost:1234/" >Inicio</a>
                <a href="http://localhost:1234/buscar-tours">Buscar Tours</a>
                <a href="http://localhost:1234/sobre-nosotros">Sobre Nosotros</a>

               
            </nav>
        </header>    
        

    )
  
    
}

export default TopNav;