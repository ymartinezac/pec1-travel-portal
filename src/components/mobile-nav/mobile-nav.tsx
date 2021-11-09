import React from 'react'
import { Link } from 'react-router-dom';
import { handleClickBuscarTours, handleClickHome, handleClickPresentacion, handleClickEnlaces } from '../../utils/functions';




const MobileNav = ({handleNavToggle}) => {
    return (
        
        <div className="mobile-nav">
            <h1>🇵🇷 ViajaPR </h1>
            <Link to="/" onClick={handleClickHome}>Inicio</Link> 
                <Link to="/buscar-tours" onClick={handleClickBuscarTours}>Buscar Tours</Link>
                <Link to="/presentacion"  onClick={handleClickPresentacion}>Presentación</Link> 
                <Link to="/enlaces" onClick={handleClickEnlaces}>Enlaces</Link>     
        </div>
    )
}

export default MobileNav