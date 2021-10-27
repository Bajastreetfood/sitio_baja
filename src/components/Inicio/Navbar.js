import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddReservacion from './AddReservacion';

import Logo from '../../assets/elbaja.png'

function Navbar(){

  const [modalShow, setModalShow] = useState(false);
  const mystyle = {
    position: 'relative',
    left: "190%"
  };

  const bandera = e =>{
    localStorage.setItem('bandera', '1');
  }

 
  return(
    <header class="init">
  
  <div class="navbar-default-white navbar-fixed-top">
    <div class="container-fluid">
          
        <div class="row p-3-vh">
            
            <a class="logo centered"  href="/">
            <img class="h-100 init" alt="logo" src={Logo}/>
            <img class="h-100 show" alt="logo" src={Logo}/>
            </a> 
           

            
            <div class="white menu-init" id="main-menu">
            <nav id="menu-center">
              <ul>
                <li> 
                  
                <a href="/">
                Inicio
                </a>
            
                </li>
                <li>
                <Link to={'/Acerca'} onClick={() => bandera()}>
                Acerca
            </Link>
                </li>
                <li>
                <Link to={'/Menu'} onClick={() => bandera()}>
                Menú
            </Link>
                </li>
                
                <li>
                <Link to={'/Factura'} onClick={() => bandera()}>
                Factura
            </Link>
                </li>
               
                <li>
                  <a class="last"  data-toggle="modal" data-target="#resevmodal" href="#" onClick={() => setModalShow(true)}>Reservación</a>
                  <AddReservacion show={modalShow} onHide={() => setModalShow(false)} />
                </li>
                <li>
            <Link to={'/Login'} style={mystyle} id="showside" class="d-none-mobile">
            <i class="fas fa-sign-in-alt"></i>&nbsp; INGRESAR
            </Link>
                </li>
              </ul>
            </nav>
            </div>

            <div class="menu-right centered">
              <ul class="iconright">
                <li>
                  <div id="showmobile"><span class="ti-menu"></span></div>
                </li>
              </ul>
            </div>

            

        </div>
        
    </div>
  </div>
 
</header>
);

    
}

export default Navbar;