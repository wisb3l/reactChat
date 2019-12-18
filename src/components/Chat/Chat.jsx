import React, { PureComponent } from 'react';
import usuario from '../../images/usuario/2.jpg';
import AreaChat from './AreaChat/AreaChat';


export default class Chat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      mensaje:""
    };
  }

  render() {

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ChatWrapper">
        <div id="areaChatContainer" className="areaChat" key="areaChatContainer">
          <AreaChat key="contenedorareaChat"
            usuario={usuario}
            contactoSeleccionado={this.props.itemSeleccionado}
            listaContactos={this.props.listaContactos}
          />
        </div>
        <div className="areaWrite">
          <form onSubmit={this.onSubmit}>
            <div className="chatContainer">
              <i className="fa fa-plus"></i>
              <input 
                onChange={this.onChange} 
                value={this.state.mensaje} 
                className="inputChat" type="text" 
                placeholder="Escriba algo" />
              <i className="fa fa-smile-o"></i>
              <button type="submit"><strong>Enviar</strong></button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onChange = e =>{
    this.setState({
      mensaje: e.target.value
    })
  }

  onSubmit= e => {
    const a= new Date();
    const hora=a.getHours()+":"+a.getMinutes();
    this.props.actualizarListaMensajes("enviado", hora, "enviado", this.state.mensaje );
    this.setState({
      mensaje: ""
    })
    e.preventDefault();
  }
  
  completarEstado() {
    //const estado = "enviado";
    //const estado="entregado";
    const estado="leido";
    if (estado === "enviado") {
      return (
        <span>
          <i className="fa fa-check estadoEspera"></i>
        </span>
      );
    } else if (estado === "entregado") {
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

