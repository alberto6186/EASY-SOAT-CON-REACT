import React from "react";
import '../css/SeleccionarMetodoPago.css'
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function SeleccionarMetodoPago(){
    return(
        <>
        <Header />
        <div className="aseguradora">
            <h1 className="titulo">Selecionar metodo de pago</h1>
            <p className="titulo-parrafo">Señor usuario seleccione el metodo de pago para finalizar 
            su compra</p>
            <section className="selecion-aseguradora-info">
                <div className="selecion-aseguradora">
                    <select className="form-campo">
                        <option className="form-campo">-- Metodo de Pago --</option>
                        <option>Tarjeta de crédito</option>
                        <option>Tarjeta de débito</option>
                        <option>Transferencia bancaria</option>
                        <option>PayPal</option>
                        <option>Google Pay</option>
                        <option>Apple Pay</option>
                    </select>
                </div>
                <div className="aseguradora-info">
                <div className="recuadro">
                <p>En esta parte de la pantalla se desplegara los campos que debe diligenciar dependiendo el metodo de pago</p>
                <br></br>
                </div>
                   
                    
                      
                </div>
            </section>
            <Link to="/compra-finalizada" className="continuar-pago">
                <input type="submit" value="Finalizar la compra" className="boton-continuar" />
            </Link>
        </div>
        <Footer />
    </>
    );
    
}
export default SeleccionarMetodoPago;