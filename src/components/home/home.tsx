
import React from "react";
import Tour from "../../models/tour";
import TourCard from "../tour-card/tour-card";
import { NavLink } from "react-router-dom";


const Snorkeling = React.lazy(() => import('../snorkeling/snorkeling'));
const InfoGeneral = React.lazy(() => import('../info-general/info-general'));
const TopTours = React.lazy(() => import('../top-tours-grid/top-tours-grid'));

const Home: React.FC<{tours: Tour[]}> = ({ tours }) => {
    window.scrollTo(0, 0);
   
    return (
        <main className="home-main">
            <section className="main-landing">
                <div>
                    <h1>Puerto Rico</h1>
                    <h2>Isla del Encanto</h2>
                </div>
            </section>
          
            <React.Suspense fallback={<p>Loading...</p>}>
                <TopTours tours={tours} />
               
            </React.Suspense>
      
            
            <React.Suspense fallback={<p>Loading...</p>}>
                <Snorkeling />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading...</p>}>
                <InfoGeneral />
            </React.Suspense>

            
            
        </main>

    )
  
    
}

export default Home;