import React from "react"

import auto from '../img/auto.png';
import '../css/Consulta.css';
import DatosInformacionVehiculo from "./DatosInformacionVehiculo";
import { Link } from "react-router-dom";

function Consulta() {

  return (
    <div className="section">
      <h1 className="titulo-consulta">Adquiere tu Soat y aprovecha todos los beneficios que tenemos para ti</h1>
      <div className="secciones">

        <div className="contenido-imagen">
          <h2 className="titulo-imagen">Compra tu Soat con nosotros</h2>
          <div className="imagen">
            <img
              src={auto}
              className='easy-logo'
              alt='Logo de easy'
            />
          </div>
        </div>
        <div className="consulta">
          <h2 className="titulo-imagen">Consulta tu soat</h2>
          <form action="" className="formulario">
            <div className="form-campo">
              <input type="text" id="placa" placeholder="Placa" className="input" />
            </div>
            <div className="form-campo">
              <input type="number" id="identificacion" placeholder="Identificacion" className="input" />
            </div>
            <div className="form-campo">
              <Link to="/infor-consulta"><input type="submit" value="Consultar" className="boton-consulta" /></Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Consulta;

