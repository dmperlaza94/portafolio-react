import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <svg
              className="bi bi-briefcase"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
              />
              <path
                fill-rule="evenodd"
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
              />
            </svg>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sobre mi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Educacion
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mis proyectos
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;