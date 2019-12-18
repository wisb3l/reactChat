import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Contactos from './components/Contactos/Contactos';
import Detalles from './components/Detalles/Detalles';

import listaContactos from './data/contactos'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      listaContactos: listaContactos,
      itemSeleccionado:listaContactos[0],
    };
  }

  render() {
    return (
      <div className="contenedor" key="contenedor">
        <Header/>
        <div className="col3 col margin0 floatLeft"  key="contenedorContactos">
          <Contactos 
            listaContactos={this.state.listaContactos} 
            itemRender={this.itemRender}
          />
        </div>
        <div className="col5 col margin0"  key="contenedor">
          <Chat  key="contenedoChat"
            itemSeleccionado={this.state.itemSeleccionado} 
            actualizarListaMensajes={this.actualizarListaMensajes} 
            listaContactos={this.state.listaContactos}
          />
        </div>
        <div className="col2 col margin0 floatRight" key="contenedorDetalles">
          <Detalles itemSeleccionado={this.state.itemSeleccionado}/>
        </div>
      </div>
    );
  }

  actualizarListaMensajes=(tipo,hora,estado,texto)=>{
    const nuevoMensaje = {
      tipo:tipo,
      hora:hora,
      estado:estado,
      texto:texto
    }

    var nuevaLista=this.state.listaContactos;
    nuevaLista[this.state.itemSeleccionado.id-1].mensajes.push(nuevoMensaje);

    this.setState({
      listaContactos: nuevaLista,
    })
  }

  itemRender=(id)=>{
    var item
    const lista=this.state.listaContactos;
    for(var i in lista){
      if(lista[i].id===id){
        item=lista[i];
        break;
      }
    }
    this.setState({itemSeleccionado:item})
  }
}