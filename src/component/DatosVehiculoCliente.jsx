import React from "react";
import '../css/DatosVehiculoCliente.css';
import { Link } from "react-router-dom";


function DatosVehiculoCliente() {

    
    return (
        <div className="contenido-datos">
            <div className="datos-vehiculo">
                <h2 className="titulo">Datos del Vehiculo</h2>
                
                <div className="datos-vehiculo-inf">
                    <label className="label">Tipo de Vehiculo: </label>
                    <label className="label-texto">xxxxxxxxxx</label>
                </div>
                <div className="datos-vehiculo-inf">
                    <label className="label">Clase: </label>
                    <label className="label-texto">xxxxxxxxx</label>
                </div>
                <div className="datos-vehiculo-inf">
                    <label className="label">Cilindraje: </label>
                    <label className="label-texto">xxxxxxxxx</label>
                </div>
                <div className="datos-vehiculo-inf">
                    <label className="label">Numero Motor: </label>
                    <label className="label-texto">xxxxxxxxx</label>
                </div>
                <div className="datos-vehiculo-inf">
                    <label className="label">Pasajeros: </label>
                    <label className="label-texto">xxxxxxxxx</label>
                </div>
                <div className="datos-vehiculo-inf display-grid">
                    <label className="label">Tipo de Combustible: </label>
                    <label className="label-texto">xxxxxxxxx</label>
                </div>
                <div className="datos-vehiculo-inf">
                    <label className="label">VIN: </label>
                    <label className="label-texto">xxxxxxxxx</label>
                </div>
            </div>
            <div className="formulario-campo">
                
                <h2 className="titulo">Datos del Tomador Soat</h2>
                <form action="" className="formulario">
                    <div className="infor-campo">
                        <input type="text" id="placa" placeholder="Fecha inicio vigencia" />
                    </div>
                    
                    <select className="form-campo">
                        <option className="form-campo">-- Tipo identificacion --</option>
                        <option>Cedula de Ciudadania</option>
                        <option>Nit</option>
                        <option>Cedula de extrangeria</option>
                        <option>Pasaporte</option>
                    </select>
                    
                    <div className="infor-campo"> 
                        <input type="text" id="placa" placeholder="Nro. Identificacion" />
                    </div>
                    <div className="infor-campo">
                        <label className="formulario-texto">Fecha de expediccion</label>
                        <input type="date" id="identificacion" />
                    </div>
                    <div className="infor-campo">
                        <input type="text" id="placa" placeholder="Nombres" />
                    </div>
                    <div className="infor-campo">
                        <input type="number" id="identificacion" placeholder="Apellidos" />
                    </div>
                    <div className="infor-campo">
                        <input type="text" id="identificacion" placeholder="Pais" />
                    </div>
                    <div className="infor-campo">
                        <input type="text" id="identificacion" placeholder="Ciudad de Circulacion" />
                    </div>
                    <div className="infor-campo">
                        <input type="text" id="identificacion" placeholder="Direccion" />
                    </div>
                    <div className="infor-campo">
                        <input type="number" id="identificacion" placeholder="Telefono" />
                    </div>
                    <div className="infor-campo">
                        <input type="email" id="identificacion" placeholder="Email" />
                    </div>

                </form>
            </div>
            <div className="autorizar">
                <input type="checkbox" className="boton-checkeo" />
                <label>Autorizo el uso responsable de mi informacion y acepto terminos y
                    condiciones
                </label>
                <Link to= "/aseguradora">
                <input type="submit" value="Continuar" className="boton-continuar" />
                </Link>
                
            </div>
        </div>
    );
}
export default DatosVehiculoCliente;