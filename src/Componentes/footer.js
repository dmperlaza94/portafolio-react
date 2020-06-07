import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer mt-auto bg-dark text-primary">
        <div className="containerFooter">
          <h5>Diana Marcela Paniagua © 2020 Copyright </h5>
          <a
            className="icon-redsocial"
            href="https://api.whatsapp.com/send?phone=+573013300959text= Mire%20tu%20portafolio"
          >
            <i className="icono fab fa-whatsapp fa-2x text-primary"></i>
          </a>
          <a
            className="icon-redsocial"
            href="linkedin.com/in/diana-marcela-p-9b6a6883"
          >
            <i className="icono fab fa-linkedin-in fa-2x text-primary"></i>
          </a>

          <a className="icon-redsocial" href="https://github.com/dmperlaza94">
            <i className="icono fab fa-github-alt fa-2x text-primary"></i>
          </a>

          <a className="icon-redsocial" href="dmperlaza94@gmail.com">
            <i class="icono fas fa-envelope fa-2x text-primary"></i>
          </a>
          <a
            className="icon-redsocial"
            href="https://www.freecodecamp.org/fcc9998cf76-9e02-4c3c-81db-95ea821098de"
          >
            <i className="icono fab fa-free-code-camp fa-2x text-primary"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
