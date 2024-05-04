
import React from "react";
import '../css/Login.css';
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <> 
        <Header />
            <div className="registrarse-contenido">
                <h1 className="titulo-registrase">Bienvenidos a EasySoat</h1>

                <form action="" className="formulario">
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
                <p className="no-registrado">No tienes una cuenta?   <li ><Link to="/registrarse">Registrate aqui </Link></li></p>
               
            </div>
            <Footer />

        </>
    )
}
export default Login;