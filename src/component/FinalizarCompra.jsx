import React from "react";
import auto from '../img/auto.png';
import '../css/FinalizarCompra.css';
import Header from "./Header";
import Footer from "./Footer";

function FinalizarCompra() {
    return (
        <>
        <Header />
        <h1 className="titulo-compra">Felicidades por su compra</h1>
            <div className="contenido-compra">
                <section className="contenido-imagen"> 
                    <div className="imagen">
                        <img
                            src={auto}
                            className='easy-logo'
                            alt='Logo de easy'
                        />
                        <p className="mensaje">Su SOAT fue generado exitosamente y enviado a su correo electronico.</p>
                    <br></br>
                    <p className="mensaje">A continuacion puede imprimirlo si lo desea, al igual que su factura en los 
                        siguientes enlaces
                    </p>
                    </div>
                </section>
                <section className="final-compra">
                    <div className="finalizar-compra">
                        <button className="boton-finalizar">Imprimir Soat</button>
                    </div>
                    <div className="finalizar-compra">
                        <button className="boton-finalizar">Imprimir factura</button>
                    </div>
                    <p className="mensaje">Estimado cliente si no desea imprimir su factura o SOAT inmediatamente, 
                        siempre podra consultar en su correo o a traves de nuestro menu de consulta
                    </p>
                    <br></br>
                    <div className="finalizar-compra">
                        <button className="boton-finalizar">Nueva compra</button>
                    </div>
                    <div className="finalizar-compra">
                        <button className="boton-finalizar">Salir</button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default FinalizarCompra;