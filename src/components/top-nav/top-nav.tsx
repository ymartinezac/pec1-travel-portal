import React from "react";
import {Link} from 'react-router-dom';


const TopNav = () => {
    
    return (
       
        <header>
            <h1><a>🇵🇷 Viaja<span>  PR</span></a></h1>  
            <nav>
                
                <Link to="/">Inicio</Link> 
                <Link to="/buscar-tours">Buscar Tours</Link>
                <Link to="/presentacion">Presentación</Link> 
                <Link to="/enlaces">Enlaces</Link> 
            </nav>
        </header>    
       
    )
  
    
}

export default TopNav;