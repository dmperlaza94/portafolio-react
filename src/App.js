import React from "react";
import "./index.css";
import Menu from "./Componentes/Nav-bar";
import Footer from "./Componentes/footer";
import Habilidades from "./Componentes/habilidades";
import Proyectos from "./Componentes/proyectos";
import Educacion from "./Componentes/educacion";
import Perfil from "./Componentes/miperfil";

function App() {
  return (
    <div>
      <Menu />
      <Habilidades />
      <Perfil />
      <Educacion />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
