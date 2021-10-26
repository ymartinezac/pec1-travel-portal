import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/home";
import TopNav from "./components/top-nav/top-nav";



function App ()  {

    const [tours, setTour] = React.useState([
        {
            id: 1,
            nombre: "Bahía Bioluminiscente",
            img_url: "", 
            descripcion: "Lorem ipsum",
            duracion: 6,
            ratings: [],
            ubicacion: 'Vieques, PR',
            puntoEncuentro: "Terminal de Lanchas de Fajardo",
            fechas: [],
            precio: 79.99
        }, 
        {
            id: 2,
            nombre: "Bosque Tropical El Yunque",
            img_url: "", 
            descripcion: "Lorem ipsum",
            duracion: 7,
            ratings: [],
            ubicacion: 'Rio Grande, PR',
            puntoEncuentro: "El Yunque National Forest - El Portal",
            fechas: [],
            precio: 39.99
        },
        {
            id: 3,
            nombre: "Cueva Ventana",
            img_url: "../../assets/cuevaventana3-2.jpg", 
            descripcion: "Lorem ipsum",
            duracion: 2,
            ratings: [],
            ubicacion: 'Arecibo, PR',
            puntoEncuentro: "Cueva Ventana",
            fechas: [],
            precio: 20
        }
    ])
    return (
            <div>
                <TopNav />
                <Home tours={tours} />
            </div>
       
    )
}

const mount = document.getElementById("app");
ReactDOM.render(<App />, mount);
