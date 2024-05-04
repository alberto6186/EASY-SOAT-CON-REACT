import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DatosVehiculoCliente from "./DatosVehiculoCliente";
import InformacionVehiculo from "./InformacionVehiculo";
import Header from "./Header";
import Footer from "./Footer";



 function DatosInformacionVehiculo(){

    
    return(
        <>
    
      <div className="App">
        <Header />
        <InformacionVehiculo />

        <DatosVehiculoCliente />
        
        <Footer />

      </div>
      
    </>
    );

 }

 export default DatosInformacionVehiculo;