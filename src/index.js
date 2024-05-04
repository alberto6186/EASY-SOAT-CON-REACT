import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DatosInformacionVehiculo from './component/DatosInformacionVehiculo';
import Registrarse from './component/Registrarse';
import Login from './component/Login';
import SeleccionarAseguradora from './component/SeleccionarAseguradora';
import SeleccionarMetodoPago from './component/SeleccionarMetodoPago';
import FinalizarCompra from './component/FinalizarCompra';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/infor-consulta',
    element: <DatosInformacionVehiculo />
  },
  {
    path: '/registrarse',
    element: <Registrarse />
  },
  ,{
    path: '/login',
    element: <Login />
  },
  {
    path: '/aseguradora',
    element: <SeleccionarAseguradora />
  },
  {
    path: '/metodo-pago',
    element: <SeleccionarMetodoPago />
  },
  {
    path: '/compra-finalizada',
    element: <FinalizarCompra />
  }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


