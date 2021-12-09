import React from "react";
import {NavLink} from 'react-router-dom';
import logo from '../../assets/ViajaPR-logo.svg';

const TopNav = () => {
    
    return (
       
        <header>
            <h1 className="titulo">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo de ViajaPR" />
                    Viaja<span>PR</span>
                </NavLink>
            </h1>  
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