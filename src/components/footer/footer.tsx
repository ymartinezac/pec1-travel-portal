import React from "react";
import logo from '../../assets/ViajaPR-logo.svg';
import {NavLink} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrap">
            <h1 className="titulo">
                <NavLink to="/">
                    <LazyLoadImage className="logo" src={logo} alt="logo de ViajaPR" width="40" height="40"/>
                    <div>Viaja<span>PR</span></div>
                </NavLink>
            </h1>  
            <p className="credits">
           © Yesenia Martínez Acevedo</p>
            <nav>
                
                <NavLink to="/">Inicio</NavLink> 
                <NavLink to="/buscar-tours">Buscar Tours</NavLink>
                <NavLink to="/presentacion">Presentación</NavLink> 
                <NavLink to="/enlaces">Enlaces</NavLink> 
            </nav>
           
            </div>
        </footer>

    )
  
    
}

export default Footer;