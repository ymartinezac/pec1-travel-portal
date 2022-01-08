
import React from "react";
import Tour from "../../models/tour";


const SnorkelingComponent = React.lazy(() => import('../snorkeling/snorkeling'));
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
                <SnorkelingComponent />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading...</p>}>
                <InfoGeneral />
            </React.Suspense>

            
            
        </main>

    )
  
    
}

export default Home;