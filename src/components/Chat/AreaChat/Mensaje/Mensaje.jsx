import React, { PureComponent } from 'react';

export default class Mensaje extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className={this.tipoMensaje()} key={this.props.key}>
        <div className="imagenContactoChat col col1">
          <img className="contactImage " src={this.props.avatar} alt="" />
        </div>
        <div className="mensajeChat col col8">
          <div className="mensajeBox">
            <div className="textoMensaje">
              <p className="mensaje">{this.props.texto}</p>
            </div>
            <div className="estadoMensaje">
              <span className="horaMensajeEnviado">{this.props.hora}</span>
              {this.completarEstado()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  tipoMensaje(){
    if(this.props.tipo==="enviado"){
      return "mensajeEnviado"
    }else if (this.props.tipo==="recibido") {
      return "mensajeRecibido"
    }
  }

  completarEstado() {
    if (this.props.estado === "enviado") {
      return (
        <span>
          <i className="fa fa-check estadoEspera"></i>
        </span>
      );
    } else if (this.props.estado === "entregado") {
      return (
        <span>
          <i className="fa fa-check estadoOK"></i>
          <i className="fa fa-check estadoEspera"></i>
        </span>
      );
    } else {
      return (
        <span>
          <i className="fa fa-check estadoOK"></i>
          <i className="fa fa-check estadoOK"></i>
        </span>
      );
    }
  }

}

