import React, { Fragment, useEffect } from 'react';
import Footer from './Footer'
import Navbar from './Navbar';




function Acerca(){

  useEffect(() => {
    if(localStorage.getItem('bandera') == 1)
    {
      window.location.reload();
      localStorage.setItem('bandera', '0');
    }
  }, [])


    return(

        <Fragment>
          <Navbar/>
<section id="Acerca" class="breadcumb" aria-label="breadcumb">
  <div class="container-fluid">
   <div class="row">
    <div class="col-12">
      <div class="main">
        <div class="bread">
          <div class="img-icon">
             <img src="img/breadcumb-icon.png" alt="#"/>
          </div>
          <div class="bread-title">Acerca</div>
          
        </div>
      </div>
    </div>
   </div>
 </div>
</section>

<section aria-label="section" class="s-bot s-top">
 <div class="container-fluid">
   <div class="row p-3-vh">
    <div class="col-12 text-center">
      <div class="main-content">
        <div class="heading">
          <div class="title">
            Bienvenido a Baja Streetfood
          </div>
        </div>
        <div class="desc m-auto">
        Nacimos en el año 2016 en el corazón de la CDMX, inspirados en la cocina de mar típica en Baja California hemos logrado integrar sus sabores con los de la Ciudad de México, llevando al paladar de nuestros comensales con la preparación de los mariscos de manera poco típica en la ciudad. Los clientes que gustan de nuestra comida cubren un espectro amplio, predominando los adultos jóvenes, quienes degustan nuestros platillos acompañándolos de nuestra mixología inspirada en playas de la península de la Baja. 
        </div>
      </div>
    </div>

   
    
    
   </div>
 </div> 
</section>

<Footer/>
</Fragment>
    );
}

export default Acerca;