import React from "react";
import '../css/InformacionVehiculo.css'

function InformacionVehiculo() {

  return (
    <div className="informacion-soat">
      <div className="informacion-vehiculo">
        <div className="informacion-texto">
          <label>Placa:  </label>
          <label>Bmb29E</label>
        </div>
        <div className="informacion-texto">
          <label>Marca:  </label>
          <label>Honda</label>
        </div>
        <div className="informacion-texto">
          <label>Linea:  </label>
          <label>Cb110</label>
        </div>
        <div className="informacion-texto">
          <label>Modelo:  </label>
          <label>2016</label>
        </div>

      </div>
      <div className="valor-pagar">
        <div className="informacion-texto">
          <label>Valor a Pagar:  $</label>
          <label>400000</label>
        </div>
      </div>
    </div>
  );

}
export default InformacionVehiculo;