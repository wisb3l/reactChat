import React, { PureComponent } from 'react';
import logo from "../../images/logo/logo.png";

import Iconos from '../../resources/fontawesome/css/font-awesome.css'

export default class Header extends PureComponent { 
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
      <div className="HeaderWrapper">
        <div className="controlVentana col">
          <i className="fa fa-times"></i>
          <i className="fa fa-minus"></i>
          <i className="fa fa-plus"></i>
        </div>
        <div className=" col">
          <h2 className="margin0"><strong className="nombreChat">MiChat.com</strong></h2>
          
        </div>
        <div className="opciones col">
          <i className="fa fa-search"></i>
          <i className="fa fa-th"></i>
          <i className="fa fa-cog"></i>
          <select name="" id="">
            <option value="Sin grupo">Sin grupo</option>
            <option value="Amigos">Amigos</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Club">Club</option>
            <option value="Taller">Taller</option>
            <option value="Gloval">Global</option>
          </select>
          <img className="logoChat" src={logo} alt=""/>

        </div>
      </div>
    );
  }
}