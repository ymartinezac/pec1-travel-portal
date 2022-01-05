import React from 'react'
import { NavLink } from 'react-router-dom';





const MobileNav = ({handleNavToggle}) => {


    return (
        
        <div className="mobile-nav">
            <h1><NavLink to="/">🇵🇷</NavLink></h1>
            <NavLink to="/"  >Inicio</NavLink> 
                <NavLink to="/buscar-tours" onClick={() => { handleNavToggle();} }>Buscar Tours</NavLink>
                <NavLink to="/presentacion" onClick={() => { handleNavToggle(); } }>Presentación</NavLink> 
                <NavLink to="/enlaces" onClick={() => { handleNavToggle(); } }>Enlaces</NavLink>     
        </div>
    )
}

export default MobileNav