import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Inicio/Navbar';

import Acerca from './components/Inicio/Acerca';
import Inicio from './components/Inicio/Inicio';
import MenuPagina from './components/Inicio/MenuPagina';
import Factura from './components/Inicio/Factura';
import Login from './components/auth/Login';

import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Dashboard/Home';



import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './rutas/RutaPrivada'

import ReservacionState from './context/reservaciones/reservacionState'
import FacturaState from './context/facturas/facturaState'
import Facturas from './components/Dashboard/Facturas';
import Reservaciones from './components/Dashboard/Reservaciones';
import AR from './components/Inicio/AR';



//Revisar si tenemos token
const token = localStorage.getItem('tokenBaja');
if(token){
  tokenAuth(token);
} 

function App() {
  return (
    <ReservacionState>
      <FacturaState>
     
<AuthState>
  <AlertaState>
    <Router >
      
      <Switch>
      <Route exact path="/" component={(Inicio)} />
      <Route exact path="/AR" component={(AR)} />
      <Route exact path="/Acerca" component={(Acerca)} />
      <Route exact path="/Menu" component={(MenuPagina)} />
      <Route exact path="/Factura" component={(Factura)} />
      <Route exact path="/Login" component={(Login)} />
      <RutaPrivada exact path="/Dashboard" component={(Dashboard)} />
      <RutaPrivada exact path="/Dashboard/Facturas" component={(Facturas)} />
      <RutaPrivada exact path="/Dashboard/Reservaciones" component={(Reservaciones)} />

        </Switch>
      </Router>
      </AlertaState>
      </AuthState>
      </FacturaState>
    </ReservacionState>
  );
}

export default App;
