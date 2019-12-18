import React, { PureComponent } from 'react';

export default class Contacto extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      nombre:props.nombre,
      id:props.id,
      avatar:props.avatar,
      estado:props.estado,
      mensajeEstado:props.mensajeEstado,
      hora:props.hora,
      cantMensajes:props.cantMensajes,
      direccion:"",
      descripcion:""
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ContactoWrapper" onClick={this.props.itemRender.bind(this,this.state.id)}>
        <div className="contenedorAvatar  col col2">
          <img src={this.state.avatar} alt="" className="contactImage" />
        </div>
        <div className="floatRight descCont height83 col col7-4">
          <div className="row-fluid alinDesc">
            <div className="floatLeft col col6-5">
              <div className="row-fluid">
                <p className="nombre margin0 col">{this.state.nombre}</p>
                <i className="col fa fa-circle" title={this.tituloEstado()} style={this.colorEstado()}></i>
              </div>
              <div className="row-fluid">
                <p className="mensajeEst">{this.state.mensajeEstado}</p>
              </div>
            </div>
            <div className=" col col2 floatRight marginR20">
              <div className="row-fluid floatRight">
                <p className="horaConect floatRight">{this.state.hora}</p>
              </div>
              <div className="row-fluid floatRight">
                <div className="floatRight" style={this.cantMensajes()}>{this.state.cantMensajes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  cantMensajes(){
    return{
      backgroundColor: this.state.cantMensajes!==0?"#807fc8" : "white",
      color: "white",
      borderRadius:  "50%",
      textAlign: "center",
      width:  "20px",
      height:  "20px",
      opacity: 0.5
    }
  }

  colorEstado(){
    return{
      color: this.state.estado==="conectado"?"green": this.state.estado==="ausente"?"orange":"red",
    }
  }

  tituloEstado(){
    if (this.state.estado==="conectado") {
      return "Conectado"
    }else if (this.state.estado==="ausente") {
      return "Ausente"
    }else{
      return "Desconectado"
    }
  }
}