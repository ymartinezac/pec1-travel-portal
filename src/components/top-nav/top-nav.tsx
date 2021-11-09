import React from "react";
import {Link, useHistory} from 'react-router-dom';
//import { handleClickBuscarTours } from '../../utils/functions';
//import { handleClickHome } from '../../utils/functions';
//import { handleClickPresentacion } from '../../utils/functions';
//import { handleClickEnlaces } from '../../utils/functions';

const TopNav = () => {
    let history = useHistory();

 function handleClickHome() {
    history.push("/");
  }
function handleClickBuscarTours() {
    history.push("/buscar-tours");
  }
  
 function handleClickPresentacion() {
    history.push("/presentacion");
  }
 function handleClickEnlaces() {
    history.push("/enlaces");
  }
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