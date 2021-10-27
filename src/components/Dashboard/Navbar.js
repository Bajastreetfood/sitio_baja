import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Logo from '../../assets/Bajablanco.png'

function Navbar(){
  return(
  <nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="/">
    <img class="h-100 init " alt="logo" src={Logo}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      
    </div>
  </div>
</nav>
);
}

export default Navbar;