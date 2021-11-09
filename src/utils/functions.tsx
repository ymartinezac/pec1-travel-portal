
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

  export default {
    handleClickEnlaces,
    handleClickHome,
    handleClickPresentacion,
    handleClickBuscarTours
  }
  
  