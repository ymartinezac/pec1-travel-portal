import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import mask from '../../assets/diving-mask-snorkel.svg';

const Snorkeling = () => {
    return (
        <section className="snorkel">
                <h1>Sumérgete en nuestros <span>snorkeling tours</span></h1>
                <LazyLoadImage className="snorkel-svg" src={mask} alt="snorkel mask" width="275" height="340" />
             
                
            </section> 

    )
  
    
}

export default Snorkeling;