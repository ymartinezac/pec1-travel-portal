import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./components/home/home";
import TopNav from "./components/top-nav/top-nav";
import Toggle from "./components/toggle/toggle";
import MobileNav from "./components/mobile-nav/mobile-nav";
import Footer from "./components/footer/footer";
import Presentacion from "./components/presentacion/presentacion";
import Enlaces from "./components/enlaces/enlaces";
import ToursGrid from "./components/tours-grid/tours-grid";
import Tour from "./models/tour";
import TourDetail from "./components/tour-detail/tour-detail";

const url = "http://localhost:1234/images/";
function App ()  {
    const [tours, setTour] = React.useState<Tour[]>([
        {
            id: 2,
            nombre: "Bosque Tropical El Yunque",
            thumbnail: url + "caborojo_small.jpg", 
            img_url: url + "caborojo_medium.jpg", 
            img2: url + "caborojo_medium.jpg", 
            img3: url + "caborojo_medium.jpg", 
           descripcion: "<p>Lorem ipsum</p>",
            duracion: 7,
            guia: true,
            ratings: [ {puntuacion: 5}, {puntuacion: 5}, {puntuacion: 5}],
            ubicacion: 'Rio Grande, PR',
            puntoEncuentro: "El Yunque National Forest - El Portal",
            fechas: [],
            precio: 39.99,
            tag: "bestseller"
        },
        {
            id: 3,
            nombre: "Viejo San Juan",
            thumbnail: url + "caborojo_small.jpg", 
            img_url: "https://uberblogapi.10upcdn.com/2160x1080/filters:format(webp)/blogapi.uber.com/wp-content/uploads/2019/03/Vuelve-al-pasado-en-estos-5-lugares-hist%C3%B3ricos-de-Puerto-Rico-1024x512.png", 
            img2: "https://uberblogapi.10upcdn.com/2160x1080/filters:format(webp)/blogapi.uber.com/wp-content/uploads/2019/03/Vuelve-al-pasado-en-estos-5-lugares-hist%C3%B3ricos-de-Puerto-Rico-1024x512.png", 
            img3: "https://uberblogapi.10upcdn.com/2160x1080/filters:format(webp)/blogapi.uber.com/wp-content/uploads/2019/03/Vuelve-al-pasado-en-estos-5-lugares-hist%C3%B3ricos-de-Puerto-Rico-1024x512.png", 
            descripcion: "Aventura Cueva Ventana esta localizada en Arecibo, Puerto Rico (GPS: 18.374731,-66.692443). La Aventura hacia la Cueva es una expedición que dura aproximadamente 90 minutos, donde encontrará gran variedad de flora y fauna. Se deleitará al ver las estalactitas, estalagmitas, cinco especies de murciélagos e insectos característicos del ecosistema. Además, podrá observar petroglifos Taínos. Al finalizar el recorrido por la Cueva se asombrará con la Ventana hacia una vista impresionante del Valle del Río Grande de Arecibo. ",
            duracion: 2,
            guia: false,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Arecibo, PR',
            puntoEncuentro: "Cueva Ventana",
            fechas: [],
            precio: 20,
            tag: "bestseller"
            
        },
        {
            id: 5,
            nombre: "Toro Verde Zipline",
            thumbnail: url + "caborojo_small.jpg", 
            img_url: "https://i0.wp.com/zipline4less.com/wp-content/uploads/2021/04/E0FXBXrWYAYP2FI-e1619782981607.jpeg?fit=1024%2C577&ssl=1", 
            img2: "https://i0.wp.com/zipline4less.com/wp-content/uploads/2021/04/E0FXBXrWYAYP2FI-e1619782981607.jpeg?fit=1024%2C577&ssl=1", 
            img3: "https://i0.wp.com/zipline4less.com/wp-content/uploads/2021/04/E0FXBXrWYAYP2FI-e1619782981607.jpeg?fit=1024%2C577&ssl=1", 
            descripcion: "<p>Lorem ipsum</p>",
            duracion: 7,
            guia: true,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Rio Grande, PR',
            puntoEncuentro: "El Yunque National Forest - El Portal",
            fechas: [],
            precio: 39.99,
            tag: "bestseller"
           
        }
      
    ])
    const [navToggle, setNavToggle] = React.useState<boolean>(false);
   
    
    const handleNavToggle = () => {
        setNavToggle(!navToggle);
        
    };

   
    return (
        <Router>
            <main >
               
                <React.StrictMode>
               
                    <Toggle handleNavToggle={handleNavToggle}/> 
                    { navToggle ? <MobileNav  handleNavToggle={handleNavToggle} /> : null}
                    <TopNav />
                   
                        <Routes>
                            <Route path="/" element={<Home tours={tours} /> }  />
                            <Route path="/buscar-tours" element={<ToursGrid tours={tours}/> }  />
                            <Route path="/presentacion" element={<Presentacion/>} />
                            <Route path="/enlaces" element={<Enlaces />} />
                            <Route path="/tours/:id" element={<TourDetail tours={tours} />}/>
                        </Routes>   
                
                    <Footer />
                  
                </React.StrictMode>
               
            </main>
            
            </Router>
    )
}

const mount = document.getElementById("app");
ReactDOM.render(<App />, mount);
