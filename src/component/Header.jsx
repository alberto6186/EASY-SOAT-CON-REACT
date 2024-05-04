
import React from "react";
import logo from '../img/logo.png';
import '../css/Header.css';
import { Link } from "react-router-dom";


function Header() {
   return (
      <header className="header">
         
         <nav className="nav">
            <Link to="/" className="logo nav-link">
               <img
                  src={logo}
                  alt='Logo de easy'
               />
            </Link>
            <ul className="nav-menu">
               <li className="nav-menu-item"><Link to="/"className="nav-menu-link nav-link">Consulta tu soat</Link></li>
               <li className="nav-menu-item"><a href="#" className="nav-menu-link nav-link convenios" id="convenios">Convenios</a></li>
               <li className="nav-menu-item"><Link to="/login" className="nav-menu-link nav-link">Login</Link></li>
               <li className="nav-menu-item"><Link to="/registrarse" className="nav-menu-link nav-link">Registrate</Link></li>
            </ul>
            <div className="nav-toggle" aria-label="Abrir menu" id="open">
                <span>&#9776;</span>
            </div>
         </nav>
      </header>
   );
}
export default Header;