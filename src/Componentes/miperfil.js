import React from "react";
import perfil from "../imagenes/perfil.png";
import "bootstrap/dist/css/bootstrap.min.css";

class Perfil extends React.Component {
  render() {
    return (
      <div className="contenedor-seccion">
        <div className="container-padre">
          <div className="container-img">
            <img className="imagen-cuerpo" src={perfil} alt="..." />
          </div>
          <div className="container-info">
            <h1 className="titulo"> Sobre mi...</h1>
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
