import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import mask from '../../assets/diving-mask-snorkel.svg';
import { useInView, InView } from 'react-intersection-observer';

const Snorkeling = () => {
    const [ref, inView, entry] = useInView({
        threshold: 0,
      });
    return (
        <section ref={ref} className={inView ? "snorkel visible" : "snorkel invisible"} >
                <h1>Sumérgete en nuestros <span>snorkeling tours</span></h1>
                <LazyLoadImage className="snorkel-svg" src={mask} alt="snorkel mask" width="275" height="340" />
             
                
            </section> 

    )
  
    
}


const Component = () => {
 
    <InView as="div" >
    <h2>Plain children are always rendered. Use onChange to monitor state.</h2>
  </InView>
  };
export default Snorkeling;