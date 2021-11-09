import React from 'react'
import { NavLink } from 'react-router-dom';





const MobileNav = () => {
    
    return (
        
        <div className="mobile-nav">
            <h1><NavLink to="/">🇵🇷 Viaja<span>PR</span></NavLink></h1>
            <NavLink to="/">Inicio</NavLink> 
                <NavLink to="/buscar-tours">Buscar Tours</NavLink>
                <NavLink to="/presentacion">Presentación</NavLink> 
                <NavLink to="/enlaces">Enlaces</NavLink>     
        </div>
    )
}

export default MobileNav