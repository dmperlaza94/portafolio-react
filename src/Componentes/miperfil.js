import React from "react";
import perfil from "../imagenes/perfil.png";
import "bootstrap/dist/css/bootstrap.min.css";

class Perfil extends React.Component {
  render() {
    return (
      <div id="yo" className="contenedor-seccion m-5">
        <h1 className="titulo text-center mb-4"> Sobre mi...</h1>
        <div className="row">
          <div className="container-img col col-12 col-md-6 text-center">
            <img className=" img-fluid rounded" src={perfil} alt="..." />
          </div>
          <div className="container-info col col-12 col-md-6">
            <br />
            <p className="info">
              Hola soy<strong> Diana Paniagua Perlaza </strong> soy
              desarrolladora de software Front-end con enfasis en ReactJS. Me
              apasiona la programacion por este motivo quisiera convertir
              cualquier sitio web en un fenómeno mundial. Espero poder agregar
              valor a tu compañia con mis conocimentos y habilidades.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
