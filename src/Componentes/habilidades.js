import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Habilidad from "../imagenes/Captura.PNG";

class Habilidades extends React.Component {
  render() {
    return (
      <div className=" d-flex justify-content-center ">
        <img
          src={Habilidad}
          className="img-fluid text-center m-auto"
          alt="Responsive image"
        />
      </div>
    );
  }
}

export default Habilidades;
