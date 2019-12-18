import React, { PureComponent } from 'react';
import Contacto from './Contacto/Contacto';

export default class Contactos extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      listaContactos: props.listaContactos
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ContactosWrapper">
        <div className="row-fluid">
          <div className="borderDarkgrey padding5 col col8">
            <i className='fa fa-search' />
            <input type="search" className="noBorder" name="" id="" placeholder="Buscar..." />
          </div>
          <div className="borderDarkgrey padding5 botonIcon col col1">
            <i className='fa fa-edit' title="Editar contacto" />
          </div>
        </div>
        <div id="listaContactos" className="row-fluid">
          {
            this.state.listaContactos.map(e => 
              <Contacto 
                key={e.id} 
                id={e.id} 
                nombre={e.nombre}
                avatar={e.avatar}
                estado={e.estado}
                mensajeEstado={e.mensajeEstado}
                hora={e.hora}
                cantMensajes={e.cantMensajes}
                itemRender={this.props.itemRender}
              />
            )
          }
        </div>
      </div>
    );
  }
}