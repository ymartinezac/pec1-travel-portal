import React from "react";
import { useHistory } from "react-router-dom";


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



const useHover = () => {
    const [isHovered, setHovered] = React.useState(false)
  
    const ref = React.useRef(null)
  
    const handleMouseover = () => setHovered(true)
    const handleMouseout = () => setHovered(false)
  
    React.useEffect(() => {
      if (ref.current) {
        ref.current.addEventListener("mouseover", handleMouseover)
        ref.current.addEventListener("mouseout", handleMouseout)
  
        return () => {
          ref.current.removeEventListener("mouseover", handleMouseover)
          ref.current.removeEventListener("mouseout", handleMouseout)
        }
      }
    }, [ref.current])
  
    return [ref, isHovered]
  }


  export {
    handleClickEnlaces,
    handleClickHome,
    handleClickPresentacion,
    handleClickBuscarTours
  }
  
  