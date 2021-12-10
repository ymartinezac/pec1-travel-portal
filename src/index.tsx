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

const url = "https://blissful-blackwell-d8a212.netlify.app/images/";
function App ()  {
    const [tours, setTour] = React.useState<Tour[]>([
        {
            id: 2,
            nombre: "Bosque Tropical El Yunque",
            thumbnail: url + "yunquedestacada_thumbnail.avif", 
            img_url: url + "yunquedestacada", 
            img2: url + "yunque2", 
            img3: url + "yunque3", 
            descripcion: "<p>El Bosque Nacional El Yunque o simplemente El Yunque (antes llamado Bosque Nacional del Caribe1​) es un parque nacional localizado en Puerto Rico y es el único bosque lluvioso tropical en el sistema nacional de bosques de los Estados Unidos.2​ Su nombre es una adaptación al español de la palabra de origen Taíno «Yu-Ke» que significa «Tierra Blanca». Es uno de los lugares conocidos más lluviosos del mundo. Es también un lugar turístico, el cual es muy visitado, admirado y protegido por los ciudadanos de la isla. El Yunque es un bosque pluvial semitropical de temperaturas frescas, localizado en la Sierra de Luquillo al este de Puerto Rico. Comprende 113,32 km². Aunque no es el punto más alto en el archipiélago puertorriqueño se le puede observar a larga distancia, municipios tan distantes como Vieques, Culebra, San Lorenzo, Caguas, Barranquitas, Cayey, Aibonito, entre otros, pueden observar este patrimonio nacional. El Centro de Visitantes, El Portal, está localizado en la entrada del bosque, en la carretera #191, en el km. 4.3. Posee exhibiciones educativas y un teatro, además, encontrará personal del Servicio Forestal quienes le brindaran información y les guiarán en su recorrido por el bosque. </p>",
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
            thumbnail: url + "vsjdestacada_thumbnail.avif", 
            img_url: url + "vsjdestacada", 
            img2: url + "vsj2", 
            img3: url + "vsj3",  
            descripcion: "<p>El Viejo San Juan es el nombre con el que se le conoce al distrito histórico de San Juan, Puerto Rico. Está localizado en la Isleta de San Juan que está conectada a la isla principal de Puerto Rico por puentes. La ciudad se caracteriza por sus calles de adoquines y edificios coloridos que se remontan al siglo XVI y XVII, cuando la isla era española. El distrito se caracteriza también por la gran cantidad de plazas públicas e iglesias, que incluyen la Catedral Metropolitana de San Juan, donde se alberga la tumba del explorador español Juan Ponce de León. </p><p>Con la abundancia de las tiendas, lugares históricos, museos, restaurantes, su belleza antigua y peculiaridad arquitectónica, el Viejo San Juan es uno de los ejes turísticos de la isla. </p><p>El Viejo San Juan es la ciudad más preservada de América desde el siglo XV, es allí donde se puede observar el verdadero estilo de vida y la arquitectura realizada por los españoles de aquellos tiempos. Es un Distrito Histórico Nacional y está incluido en el Registro Nacional de Lugares Históricos como el Distrito Histórico del Viejo San Juan. También es un sitio del patrimonio mundial de la UNESCO. </p>",
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
            thumbnail: url + "zldestacada_thumbnail.avif", 
            img_url: url + "zldetacada", 
            img2: url + "zl2", 
            img3: url + "zl3",  
            descripcion: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan leo quis tellus fringilla ornare. Duis congue tortor ipsum, a molestie nunc mollis ac. Vivamus faucibus eu risus vitae elementum. Aenean cursus nulla nisl, at vehicula nulla molestie ac. Sed vulputate lobortis faucibus. Nunc sapien mauris, sollicitudin vitae nisl nec, dictum vulputate erat. Fusce euismod quis risus at tincidunt. In at diam a felis tincidunt sollicitudin. Fusce varius nisi risus, sodales laoreet dui feugiat nec. Donec pharetra diam eu nulla tristique, id posuere libero ultricies. </p><p>Vivamus congue pharetra erat. Ut a fringilla tortor. Nunc id augue tristique, bibendum eros quis, finibus sapien. Maecenas at porttitor magna. Aliquam libero odio, blandit et dignissim ac, pharetra quis leo. Cras venenatis lorem nisl. Donec aliquam sem odio, a molestie magna lobortis sit amet. Curabitur semper mollis viverra. Nam aliquet, turpis scelerisque euismod fringilla, nisi nisl vestibulum odio, nec blandit elit tortor vitae diam. Duis tincidunt metus vitae sollicitudin mollis.</p><p>Aenean porttitor, risus non placerat finibus, augue enim mollis lacus, vitae lobortis risus nibh ut nunc. In hac habitasse platea dictumst. Nulla sollicitudin augue vel nisi scelerisque vestibulum. Donec lacinia elit id lacus volutpat, eget rhoncus risus sagittis. Pellentesque dapibus lobortis rhoncus. Pellentesque aliquet leo ac tincidunt tempor. Vestibulum sapien erat, viverra ac mauris nec, malesuada accumsan lorem. Nam egestas luctus turpis eu iaculis. Morbi tempor eu libero at tempor. Integer ornare in augue ut viverra. Duis at pretium sem. Etiam quis mauris posuere, blandit lacus nec, finibus tellus. </p>",
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
