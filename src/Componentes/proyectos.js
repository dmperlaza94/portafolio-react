import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tributePage from "../imagenes/tribute-page.png";
import landingPage from "../imagenes/landing-page.png";
import tecnicPage from "../imagenes/tecnic-page.png";
import formularyServis from "../imagenes/formulario.png";

class Proyectos extends React.Component {
  render() {
    return (
      <div id="trabajos">
        <h1 className="titulo-pp"> Mis proyectos</h1>
        <p className="parrafo">
          En está sección se encuentra la descripcion de los proyectos que he
          realizado en el trancurso de mi carrera.
        </p>
        <div className="container-proyect">
          <div>
            <a href="https://dmperlaza94.github.io/paginatributo/tributo.html">
              <img src={tributePage} alt="" className="imgProyect"></img>
            </a>
          </div>
          <div>
            <a href="https://dmperlaza94.github.io/Landingpage/index.html">
              <img src={landingPage} alt="" className="imgProyect"></img>
            </a>
          </div>
          <div>
            <a href="https://dmperlaza94.github.io/Landingpage/index.html">
              <img src={tecnicPage} alt="" className="imgProyect"></img>
            </a>
          </div>
          <div>
            <a href="https://dmperlaza94.github.io/Landingpage/index.html">
              <img src={formularyServis} alt="" className="imgProyect"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Proyectos;
