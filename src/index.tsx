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

function App ()  {
    const [tours, setTour] = React.useState<Tour[]>([
        {
            id: 1,
            nombre: "Bahía Bioluminiscente",
            img_url:  "https://cdn.filestackcontent.com/UjlHivVFRDqtOIqe12C9/convert?cache=true&compress=true&quality=100&w=2000&fit=max", 
            descripcion: "<p>La Bahía Mosquito, de la isla-municipio de Vieques fue nombrada como una de las maravillas del mundo para ver en el 2020. Así lo afirmó el sitio especializado Condé Nest Traveler, que compiló los mejores lugares para visitar en el año entrante.</p><p>La bahía es conocida por su bioluminisciencia, un fenómeno que solo puede ser observado en varias partes del mundo y que en Puerto Rico puede ser observado en tres localizaciones: la mencionada bahía; Laguna Grande, en Fajardo; y La Parguera, en Lajas.</p> <p>'Bahía Mosquito es el mejor lugar en el mundo para ver uno de los fenómenos más fascinantes de la naturaleza: la bioluminiscencia. Localizada en la isla de Vieques, cerca de la costa este de la isla principal, esta entrada protegida es hogar para un tipo especial de planktons, llamados dinoflagelados, que emiten una luz color azul verdoso cuando son agitados', lee parte de la descripción publicada por la página.</p><p>'Por sí solos, son muy poco perceptibles. Pero en la bahía, hay lo suficiente como para mantener el Récord Mundial Guinness para la bioluminiscencia más brillante en ser grabada. Eso es increíblemente raro', continuó el texto.</p>",
            duracion: 6,
            guia: true,
            ratings: [ {puntuacion: 5}, {puntuacion: 5}, {puntuacion: 5}],
            ubicacion: 'Vieques, PR',
            puntoEncuentro: "Terminal de Lanchas de Fajardo",
            fechas: [],
            precio: 79.99,
            tag: "bestseller"
        }, 
        {
            id: 2,
            nombre: "Bosque Tropical El Yunque",
            img_url: "https://images.unsplash.com/photo-1501125351-05a99603ce58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=max&w=1974&q=80&height=200", 
            descripcion: "Lorem ipsum",
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
            img_url: "https://uberblogapi.10upcdn.com/2160x1080/filters:format(webp)/blogapi.uber.com/wp-content/uploads/2019/03/Vuelve-al-pasado-en-estos-5-lugares-hist%C3%B3ricos-de-Puerto-Rico-1024x512.png", 
            descripcion: "Aventura Cueva Ventana esta localizada en Arecibo, Puerto Rico (GPS: 18.374731,-66.692443). La Aventura hacia la Cueva es una expedición que dura aproximadamente 90 minutos, donde encontrará gran variedad de flora y fauna. Se deleitará al ver las estalactitas, estalagmitas, cinco especies de murciélagos e insectos característicos del ecosistema. Además, podrá observar petroglifos Taínos. Al finalizar el recorrido por la Cueva se asombrará con la Ventana hacia una vista impresionante del Valle del Río Grande de Arecibo. ",
            duracion: 2,
            guia: false,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Arecibo, PR',
            puntoEncuentro: "Cueva Ventana",
            fechas: [],
            precio: 20
            
        },
        {
            id: 4,
            nombre: "Playa Flamenco",
            img_url:  "https://adventuresoflilnicki.com/wp-content/uploads/2020/03/Flamenco-Beach-Culebra-Puerto-Rico-3.jpg", 
            descripcion: "Lorem ipsum",
            duracion: 6,
            guia: true,
            ratings: [ {puntuacion: 0}, {puntuacion: 3}, {puntuacion: 3}],
            ubicacion: 'Culebra, PR',
            puntoEncuentro: "Terminal de Lanchas de Fajardo",
            fechas: [],
            precio: 79.99,
          
        }, 
        {
            id: 5,
            nombre: "Toro Verde Zipline",
            img_url: "https://i0.wp.com/zipline4less.com/wp-content/uploads/2021/04/E0FXBXrWYAYP2FI-e1619782981607.jpeg?fit=1024%2C577&ssl=1", 
            descripcion: "Lorem ipsum",
            duracion: 7,
            guia: true,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Rio Grande, PR',
            puntoEncuentro: "El Yunque National Forest - El Portal",
            fechas: [],
            precio: 39.99
           
        },
        {
            id: 6,
            nombre: "Cueva Ventana",
            img_url: "https://images.unsplash.com/photo-1579687197117-5d4d12b468cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3131&q=80", 
            descripcion: "Aventura Cueva Ventana esta localizada en Arecibo, Puerto Rico (GPS: 18.374731,-66.692443). La Aventura hacia la Cueva es una expedición que dura aproximadamente 90 minutos, donde encontrará gran variedad de flora y fauna. Se deleitará al ver las estalactitas, estalagmitas, cinco especies de murciélagos e insectos característicos del ecosistema. Además, podrá observar petroglifos Taínos. Al finalizar el recorrido por la Cueva se asombrará con la Ventana hacia una vista impresionante del Valle del Río Grande de Arecibo.",
            duracion: 2,
            guia: true,
            ratings: [ {puntuacion: 5}, {puntuacion: 5}, {puntuacion: 5} ],
            ubicacion: 'Arecibo, PR',
            puntoEncuentro: "Cueva Ventana",
            fechas: [],
            precio: 20,
            tag: "bestseller"
        },
        {
            id: 7,
            nombre: "Bahía Bioluminiscente",
            img_url:  "https://cdn.filestackcontent.com/UjlHivVFRDqtOIqe12C9/convert?cache=true&compress=true&quality=90&w=1000&fit=max", 
            descripcion: "Lorem ipsum",
            duracion: 6,
            guia: true,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Vieques, PR',
            puntoEncuentro: "Terminal de Lanchas de Fajardo",
            fechas: [],
            precio: 79.99
        
        }, 
        {
            id: 8,
            nombre: "Bosque Tropical El Yunque",
            img_url: "https://images.unsplash.com/photo-1501125351-05a99603ce58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=max&w=1974&q=80&height=200", 
            descripcion: "Lorem ipsum",
            duracion: 7,
            guia: true,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Rio Grande, PR',
            puntoEncuentro: "El Yunque National Forest - El Portal",
            fechas: [],
            precio: 39.99
         
        },
        {
            id: 9,
            nombre: "Cueva Ventana",
            img_url: "https://images.unsplash.com/photo-1579687197117-5d4d12b468cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3131&q=80", 
            descripcion: "Lorem ipsum",
            duracion: 2,
            guia: false,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Arecibo, PR',
            puntoEncuentro: "Cueva Ventana",
            fechas: [],
            precio: 20,
          
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
