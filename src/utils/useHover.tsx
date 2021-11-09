import React from "react";

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
  
  export default useHover;