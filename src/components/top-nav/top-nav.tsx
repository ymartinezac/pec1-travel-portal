import React from "react";
import {NavLink} from 'react-router-dom';


const TopNav = () => {
    
    return (
       
        <header>
            <h1><NavLink to="/">🇵🇷 Viaja<span>PR</span></NavLink></h1>  
            <nav>
                
                <NavLink to="/">Inicio</NavLink> 
                <NavLink to="/buscar-tours">Buscar Tours</NavLink>
                <NavLink to="/presentacion">Presentación</NavLink> 
                <NavLink to="/enlaces">Enlaces</NavLink> 
            </nav>
        </header>    
       
    )
  
    
}

export default TopNav;