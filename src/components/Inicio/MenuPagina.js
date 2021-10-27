import React, {Fragment, useState, useEffect} from 'react';
import Footer from './Footer';
import Sugerencias from './Carta/Sugerencias';
import Starters from './Carta/Starters';
import Sopas from './Carta/Sopas';
import CocinaFria from './Carta/CocinaFria';
import Especialidades from './Carta/Especialidades';
import Burritos from './Carta/Burritos';
import Burgers from './Carta/Burgers';
import Tacos from './Carta/Tacos';
import Ensaladas from './Carta/Ensaladas';
import Vegetariano from './Carta/Vegetariano';
import Snacks from './Carta/Snacks';
import Postres from './Carta/Postres';
import Tostadas from './Carta/Tostadas';
import Bebidas from './Carta/Bebidas';
import Navbar from './Navbar';



function MenuPagina(){
  const [eleccion, guardarEleccion] = useState('Sugerencias');

const prueba = aux =>{
  console.log("entre")
  guardarEleccion(aux);
  localStorage.setItem('eleccion', aux);
}
useEffect(() => {
  if(localStorage.getItem('bandera') == 1)
  {
    window.location.reload();
    localStorage.setItem('bandera', '0');
    localStorage.setItem('eleccion', '');
  }
  prueba(localStorage.getItem('eleccion'))
}, [])




    return(
        <Fragment>
          <Navbar/>
<section class="breadcumb" aria-label="breadcumb" id="MenuPagina">
  <div class="container-fluid">
   <div class="row">
    <div class="col-12">
      <div class="main">
        <div class="bread">
          <div class="img-icon">
             <img src="img/breadcumb-icon.png" alt="#"/>
          </div>
          <div class="bread-title">Menu</div>
          
        </div>
      </div>
    </div>
   </div>
 </div>
</section>


<section id="Menu" aria-label="section" class="s-bot s-top">
 <div class="container-fluid">
   <div class="row p-3-vh">
    <div class="col-12 text-center">
      <div class="main-content">
        <div class="heading">
          <div class="title l-1">
            Descubre nuestro menú
          </div>
        </div>
        <div class="desc m-auto">
        Descubre nuestra variedad de platillos individuales y para compartir, con ingredientes frescos y de la mejor calidad.
        </div>
      </div>
    </div>

    <div id="menuDesktop" class="col-12 text-center">
      <ul id="filter-porto">
      <li class={eleccion === "Sugerencias" ? ("filt-projects-w selected"):("filt-projects-w")}>
      <span onClick={() => prueba('Sugerencias')}>Sugerencias</span>
        </li>
        <li class={eleccion === "Starters" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Starters')}>Starters</span>
        </li>
        <li class={eleccion === "Sopas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Sopas')}>Sopas</span>
        </li>
        <li class={eleccion === "Tostadas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Tostadas')}>Tostadas</span>
        </li>
        <li class={eleccion === "CocinaFria" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('CocinaFria')}>Cocina Fría</span>
        </li>
        <li class={eleccion === "Especialidades" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Especialidades')}>Especialidades</span>
        </li>
        <li class={eleccion === "Burritos" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Burritos')}>Burritos</span>
        </li>
        <li class={eleccion === "Burgers" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Burgers')}>Burgers</span>
        </li>
        <li class={eleccion === "Tacos" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Tacos')}>Tacos</span>
        </li>
        <li class={eleccion === "Ensaladas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Ensaladas')}>Ensaladas</span>
        </li>
        <li class={eleccion === "Vegetariano" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Vegetariano')}>Vegetariano</span>
        </li>
        <li class={eleccion === "Snacks" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Snacks')}>Snacks</span>
        </li>
        <li class={eleccion === "Postres" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Postres')}>Postres</span>
        </li>
        {/*<li class={eleccion === "Bebidas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Bebidas')}>Bebidas</span>
        </li>
    */}
      </ul>
    </div>
    <div className="row">
    <div id="menuMovil" class="col-6 text-center">
      <ul id="filter-porto">
      <li class={eleccion === "Sugerencias" ? ("filt-projects-w selected"):("filt-projects-w")}>
      <span onClick={() => prueba('Sugerencias')}>Sugerencias</span>
        </li>
        <li class={eleccion === "Starters" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Starters')}>Starters</span>
        </li>
        <li class={eleccion === "Sopas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Sopas')}>Sopas</span>
        </li>
        <li class={eleccion === "Tostadas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Tostadas')}>Tostadas</span>
        </li>
        <li class={eleccion === "CocinaFria" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('CocinaFria')}>Cocina Fría</span>
        </li>
        <li class={eleccion === "Especialidades" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Especialidades')}>Especialidades</span>
        </li>
        <li class={eleccion === "Burritos" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Burritos')}>Burritos</span>
        </li>
        </ul>
        </div>

        <div id="menuMovil" class="col-6 text-center">
        <ul id="filter-porto">
        <li class={eleccion === "Burgers" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Burgers')}>Burgers</span>
        </li>
        <li class={eleccion === "Tacos" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Tacos')}>Tacos</span>
        </li>
        <li class={eleccion === "Ensaladas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Ensaladas')}>Ensaladas</span>
        </li>
        <li class={eleccion === "Vegetariano" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Vegetariano')}>Vegetariano</span>
        </li>
        <li class={eleccion === "Snacks" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Snacks')}>Snacks</span>
        </li>
        <li class={eleccion === "Postres" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Postres')}>Postres</span>
        </li>
        {/*<li class={eleccion === "Bebidas" ? ("filt-projects-w selected"):("filt-projects-w")}>
        <span onClick={() => prueba('Bebidas')}>Bebidas</span>
        </li>
    */}
      </ul>
    </div>
    </div>

      {eleccion === 'Sugerencias' &&
    <Sugerencias/>
    }
     {eleccion === 'Starters' &&
      <Starters/>
    }
     {eleccion === 'Sopas' &&
      <Sopas/>
    }
     {eleccion === 'Tostadas' &&
      <Tostadas/>
    }
     {eleccion === 'CocinaFria' &&
      <CocinaFria/>
    }
     {eleccion === 'Especialidades' &&
      <Especialidades/>
    }
     {eleccion === 'Burritos' &&
      <Burritos/>
    }
     {eleccion === 'Burgers' &&
      <Burgers/>
    }
     {eleccion === 'Tacos' &&
      <Tacos/>
    }
    {eleccion === 'Ensaladas' &&
      <Ensaladas/>
    }
    {eleccion === 'Vegetariano' &&
      <Vegetariano/>
    }
    {eleccion === 'Snacks' &&
      <Snacks/>
    }
    {eleccion === 'Postres' &&
      <Postres/>
    }
    {eleccion === 'Bebidas' &&
      <Bebidas/>
    }

    
    
    

   </div>
 </div> 
</section>


<Footer/>
</Fragment>
    );
}

export default MenuPagina;