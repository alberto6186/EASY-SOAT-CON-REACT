
import React from "react";
import logo from '../img/logo.png';
import '../css/Header.css';

function Header() {
   return (
      <header className="header">
         <nav className="nav">
            <a href="#" className="logo nav-link">
               <img
                  src={logo}
                  alt='Logo de easy'
               />
            </a>
            <ul className="nav-menu">
               <li className="nav-menu-item"><a href="#" className="nav-menu-link nav-link">Consulta tu soat</a></li>
               <li className="nav-menu-item"><a href="#" className="nav-menu-link nav-link convenios" id="convenios">Convenios</a></li>
               <li className="nav-menu-item"><a href="#" className="nav-menu-link nav-link">Login</a></li>
               <li className="nav-menu-item"><a href="#" className="nav-menu-link nav-link">Registrate</a></li>
            </ul>
            <div className="nav-toggle" aria-label="Abrir menu" id="open">
                <span>&#9776;</span>
            </div>
         </nav>
      </header>
   );
}
export default Header;