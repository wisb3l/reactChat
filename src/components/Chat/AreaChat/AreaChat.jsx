import React, { PureComponent } from 'react';
import Mensaje from '../../Chat/AreaChat/Mensaje/Mensaje'

export default class AreaChat extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      this.props.listaContactos[this.props.contactoSeleccionado.id-1].mensajes.map(e => 
        <Mensaje 
          tipo={e.tipo}
          avatar={e.tipo==="enviado"?this.props.usuario:this.props.contactoSeleccionado.avatar}
          hora={e.hora}
          estado={e.estado}
          texto={e.texto}
        /> 
      )
    );
  }
}