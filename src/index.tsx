import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/home/home";
import TopNav from "./components/top-nav/top-nav";
import Toggle from "./components/toggle/toggle";
import MobileNav from "./components/mobile-nav/mobile-nav";
import Footer from "./components/footer/footer";
import SobreNosotros from "./components/sobre-nosotros/sobre-nosotros";
import ToursGrid from "./components/tours-grid/tours-grid";
import Tour from "./models/tour";
import TourDetail from "./components/tour-detail/tour-detail";

function App ()  {
    const [navToggle, setNavToggle] = React.useState<boolean>(false);
   
    
    const handleNavToggle = () => {
        setNavToggle(!navToggle);
        
    };

    const [tours, setTour] = React.useState<Tour[]>([
        {
            id: 1,
            nombre: "Bahía Bioluminiscente TOP",
            img_url:  "https://cdn.filestackcontent.com/UjlHivVFRDqtOIqe12C9/convert?cache=true&compress=true&quality=90&w=1000&fit=max", 
            descripcion: "Lorem ipsum",
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
            nombre: "Bosque Tropical El Yunque TOP",
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
            tag: "bestseller"
        },
        {
            id: 4,
            nombre: "Bahía Bioluminiscente",
            img_url:  "https://cdn.filestackcontent.com/UjlHivVFRDqtOIqe12C9/convert?cache=true&compress=true&quality=90&w=1000&fit=max", 
            descripcion: "Lorem ipsum",
            duracion: 6,
            guia: true,
            ratings: [ {puntuacion: 0}, {puntuacion: 3}, {puntuacion: 3}],
            ubicacion: 'Vieques, PR',
            puntoEncuentro: "Terminal de Lanchas de Fajardo",
            fechas: [],
            precio: 79.99,
            tag: "bestseller"
        }, 
        {
            id: 5,
            nombre: "Bosque Tropical El Yunque",
            img_url: "https://images.unsplash.com/photo-1501125351-05a99603ce58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=max&w=1974&q=80&height=200", 
            descripcion: "Lorem ipsum",
            duracion: 7,
            guia: true,
            ratings: [ {puntuacion: 0}, {puntuacion: 0}, {puntuacion: 3}],
            ubicacion: 'Rio Grande, PR',
            puntoEncuentro: "El Yunque National Forest - El Portal",
            fechas: [],
            precio: 39.99,
            tag: "bestseller"
        },
        {
            id: 6,
            nombre: "Cueva Ventana TOP",
            img_url: "https://images.unsplash.com/photo-1579687197117-5d4d12b468cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3131&q=80", 
            descripcion: "Lorem ipsum",
            duracion: 2,
            guia: false,
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
            precio: 79.99,
            tag: "bestseller"
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
            precio: 39.99,
            tag: "bestseller"
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
            tag: "bestseller"
        }
    ])
    return (
            <div>
                <React.StrictMode>
                    <Toggle handleNavToggle={handleNavToggle}/> 
                    { navToggle ? <MobileNav handleNavToggle={handleNavToggle}/> : null}
                    <TopNav />
                    <Router>
                        <Switch>
                            <Route exact path="/" render={(props) => <Home tours={tours} {...props} /> }  />
                            <Route path="/buscar-tours" render={(props) => <ToursGrid tours={tours} {...props} /> }  />
                            <Route path="/sobre-nosotros" component={SobreNosotros} />
                            <Route path="/tours/:id" render={({ match }) => (<TourDetail tour={tours.find((item) => String(item.id) === String(match.params.id))} />)}/>
                        </Switch>   
                    </Router>
                    <Footer />
                </React.StrictMode>
            </div>
       
    )
}

const mount = document.getElementById("app");
ReactDOM.render(<App />, mount);
