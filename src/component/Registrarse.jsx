import React from "react";
import '../css/Registrarse.css'
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Registrarse = () => {
    return (
        <>
            <Header />
            <div className="registrarse-contenido">
                <h1 className="titulo-registrase">Registrate</h1>
                <p className="inform-registrate">Por favor diligencia este formulario para registrarte</p>
                <form action="" className="formulario">
                    <div className="form-campo">
                        <input type="text" id="placa" placeholder="Nombres" className="input" />
                    </div>
                    <div className="form-campo">
                        <input type="number" id="identificacion" placeholder="Apellidos" className="input" />
                    </div>
                    <div className="form-campo">
                        <input type="email" id="identificacion" placeholder="email" className="input" />
                    </div>
                    <div className="form-campo">
                        <input type="password" placeholder="Password" className="input" />
                    </div>
                    
                    <div className="form-campo">
                        <input type="submit" value="Registrarse" className="boton-registrarse" />
                    </div>
                </form>
                <p className="no-registrado">Ya tienes una cuenta?   <li ><Link to="/login">Ingresa aqui </Link></li></p>
            </div>
            <Footer />
        </>
    );

}
export default Registrarse;