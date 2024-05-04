
import React from "react";
import '../css/SeleccionarAseguradora.css';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function SeleccionarAseguradora() {
    return(
        <>
        <Header />
        <div className="aseguradora">
            <h1 className="titulo">Selecionar Aseguradora</h1>
            <p className="titulo-parrafo">Señor usuario seleccione una aseguradora de la lista y verifica las condiciones
                ofrecidas por esta para continuar con el proceso de la compra
            </p>
            <section className="selecion-aseguradora-info">
                <div className="selecion-aseguradora">
                    <select className="form-campo">
                        <option className="form-campo">-- Seleccionar Aseguradora --</option>
                        <option>Seguros Bolívar</option>
                        <option>Seguros SURA</option>
                        <option>Seguros Mundial</option>
                        <option>Liberty Seguros Colombia</option>
                        <option>Allianz Seguros Colombia</option>
                        <option>Seguros del Estado</option>
                        <option>Mapfre Colombia</option>
                        <option>Colpatria Seguros</option>
                        <option>Seguros Falabella</option>
                        <option>Seguros Generales Suramericana</option>        
                    </select>
                </div>
                <div className="aseguradora-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi inventore 
                        aperiam amet. Nemo expedita veniam eum necessitatibus similique. Dignissimos 
                        repellat illum laboriosam asperiores, adipisci harum dolorem nam? Placeat, soluta.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi inventore 
                        aperiam amet. Nemo expedita veniam eum necessitatibus similique. Dignissimos 
                        repellat illum laboriosam asperiores, adipisci harum dolorem nam? Placeat, soluta.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi inventore 
                        aperiam amet. Nemo expedita veniam eum necessitatibus similique. Dignissimos 
                        repellat illum laboriosam asperiores, adipisci harum dolorem nam? Placeat, soluta.</p>
                        <br></br>
                </div>
            </section>
            <Link to= "/metodo-pago" className="continuar-pago">
                <input type="submit" value="Continuar con el pago" className="boton-continuar" />
            </Link>
        </div>
        <Footer />
    </>
    );
    
}

export default SeleccionarAseguradora;