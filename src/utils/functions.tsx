
import { useHistory } from "react-router-dom";


  let history = useHistory();

export function handleClickHome() {
    history.push("/");
  }
export function handleClickBuscarTours() {
    history.push("/buscar-tours");
  }
  
export function handleClickPresentacion() {
    history.push("/presentacion");
  }
export function handleClickEnlaces() {
    history.push("/enlaces");
  }


  