import React from "react";
import {Link} from 'react-router-dom';
import { handleClickBuscarTours } from '../../utils/functions';
import { handleClickHome } from '../../utils/functions';
import { handleClickPresentacion } from '../../utils/functions';
import { handleClickEnlaces } from '../../utils/functions';

const TopNav = () => {
    
    return (
       
        <header>
            <h1><a>🇵🇷 Viaja<span>  PR</span></a></h1>  
            <nav>
                
                <Link handleClick={handleClickHome}>Inicio</Link> 
                <Link to="/buscar-tours" onClick={handleClickBuscarTours}>Buscar Tours</Link>
                <Link to="/presentacion"  onClick={handleClickPresentacion}>Presentación</Link> 
                <Link to="/enlaces" onClick={handleClickEnlaces}>Enlaces</Link> 
            </nav>
        </header>    
       
    )
  
    
}

export default TopNav;