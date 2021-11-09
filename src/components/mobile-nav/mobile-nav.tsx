import React from 'react'
import { Link } from 'react-router-dom';
import { handleClickBuscarTours } from '../../utils/functions';
import { handleClickHome } from '../../utils/functions';
import { handleClickPresentacion } from '../../utils/functions';
import { handleClickEnlaces } from '../../utils/functions';




const MobileNav = () => {
    
    return (
        
        <div className="mobile-nav">
            <h1>🇵🇷 ViajaPR </h1>  
            <Link to="/">Inicio</Link> 
                <Link to="/buscar-tours">Buscar Tours</Link>
                <Link to="/presentacion">Presentación</Link> 
                <Link to="/enlaces">Enlaces</Link>     
        </div>
    )
}

export default MobileNav