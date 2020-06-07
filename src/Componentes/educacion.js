import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="img-edu">
          <img
            src={this.props.rutaimagen}
            className="rounded mx-auto d-block card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            <strong>Año de culminacion: </strong>
            {this.props.añoculminacion}
          </p>
          <p class="card-text">
            <strong>Institucion: </strong>
            {this.props.instituto}
          </p>
          <p class="card-text">
            <strong> Intensidad: </strong>
            {this.props.time}
          </p>
        </div>
      </div>
    );
  }
}

class Educacion extends React.Component {
  render() {
    return (
      <div className="padre-educa">
        <h1 className="titulo-pp">Formacion Academica</h1>
        <p className="parrafo">
          En está sección se encuentra una breve descripcion de mi formacion
          academica, indicando las fechas, el lugar en el que los he realizado y
          su duracion.
        </p>
        <div className="row">
          <div className="col-2 text-center">
            <Card
              rutaimagen="https://img.icons8.com/cotton/64/000000/laptop-coding.png"
              title="Bootcamp Desarrollo Web Front-end"
              instituto="Academia Geek"
              añoculminacion="En curso"
              time="240 horas"
            />
          </div>
          <div className="col-2">
            <Card
              rutaimagen="https://img.icons8.com/dusk/64/000000/student-center.png"
              title="Tecnologa en producción"
              instituto="ITM"
              añoculminacion="2016"
              time="6 semestres"
            />
          </div>
          <div className="col-2">
            <Card
              rutaimagen="https://img.icons8.com/dusk/64/000000/school.png"
              title="Bachiller Academico"
              instituto="Institucion Educativa Loma Hermosa"
              añoculminacion="2010"
              time=" 6 años"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Educacion;
