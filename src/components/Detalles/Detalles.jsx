import React, { PureComponent } from 'react';

export default class Detalles extends PureComponent { 
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
      <div className="DetallesWrapper">
        <div className="avatarContactoDet">
          <img className="contactImageDetalles" src={this.props.itemSeleccionado.avatar} alt=""/>
          <h2>{this.props.itemSeleccionado.nombre}</h2>
        </div>
        <div className="lugarContactoDet">
          <i className="fa fa-map-marker col"></i>
          <h4 className="col">{this.props.itemSeleccionado.direccion}</h4>
        </div>
        <div className="descripcionContactoDet">
          <h6 >{this.props.itemSeleccionado.descripcion}</h6>
        </div>
      </div>
    );
  }
}

