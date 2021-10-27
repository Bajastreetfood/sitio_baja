import React from 'react';

import Foto1 from '../../assets/IMG/promociones/cerveza3x2.png'
import Foto2 from '../../assets/IMG/promociones/cumpleaños.png'
import Foto3 from '../../assets/IMG/promociones/primerarondadoble.png'
import Foto4 from '../../assets/IMG/promociones/tacoday.png'

function NuevosPlatillos(){
    return(
      <>
<section aria-label="section" id="nuevosPlatillosDesktop" class="content-col section">
 <div class="container-fluid">
   <div class="row p-3-vh">
    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto1} alt="#"/>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
        
        <div class="heading line">
        3x2 Cerveza de barril:
        </div>
        <div class="desc">
        Las mejores marcas en cerveza de barril al 3x2 para disfrutar con tus platillos.<br></br> 
        </div>
        
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
        
        <div class="heading line">
        Cumpleaños Baja:
        </div>
        <div class="desc">
        Nada mejor que celebrar una fecha importante al puro estilo Baja con las mejores promociones para el cumpleañero.
        <br></br> - 2 a 6 personas: La casa invita el postre. <br></br> -7 a 20 personas: Invitamos los alimentos del cumpleañero.<br></br> + 21 personas: Botella de regalo.
        </div>
        
      </div>
    </div>
    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto2} alt="#"/>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="container-fluid">
   <div class="row p-3-vh">
    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto3} alt="#"/>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
        
        <div class="heading line">
        Primera Ronda Doble:
        </div>
        <div class="desc">
        Aprovecha la promoción en nuestra coctelería y destilados seleccionados,<br></br> la primera ronda ¡la invita la casa!
        </div>
        
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
        
        <div class="heading line">
        Lunes de Taco Day: 
        </div>
        <div class="desc">
        Disfruta todos los lunes de la mejor promoción de la semana y come <br></br> ¡todos los tacos que quieras!<br></br> por tan sólo $190.
        </div>
     
      </div>
    </div>
    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto4} alt="#"/>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>





<section aria-label="section" id="nuevosPlatillosMovil" class="content-col section">
 <div class="container-fluid">
   <div class="row p-3-vh">
    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto1} alt="#"/>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
       
        <div class="heading line">
        3x2 Cerveza de barril:
        </div>
        <div class="desc">
        Las mejores marcas en cerveza de barril al 3x2 para disfrutar con tus platillos.<br></br> 
        </div>
        
      </div>
    </div>

    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto2} alt="#"/>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
        
        <div class="heading line">
        Cumpleaños Baja:
        </div>
        <div class="desc">
        Nada mejor que celebrar una fecha importante al puro estilo Baja con las mejores promociones para el cumpleañero
        <br></br> - 2 a 6 personas: la casa invita el postre <br></br> -7 a 20 personas: invitamos los alimentos del cumpleañero,<br></br> + 21 personas: botella de regalo
        </div>
        
      </div>
    </div>
    
    </div>
  </div>
  <div class="container-fluid">
   <div class="row p-3-vh">
    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto3} alt="#"/>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
        
        <div class="heading line">
        Primera Ronda Doble:
        </div>
        <div class="desc">
        Aprovecha la promoción en nuestra coctelería y destilados seleccionados, la primera ronda ¡la invita la casa!
        </div>
        
      </div>
    </div>

    <div class="col-md-6">
      <div class="content-col pb-0">
        <div class="img section">
          <img src={Foto4} alt="#"/>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-5 centered">
      <div class="content-col pb-md-0">
        
        <div class="heading line">
        Lunes de Taco Day: 
        </div>
        <div class="desc">
        Disfruta todos los lunes de la mejor promoción de la semana y come ¡todos los tacos que quieras! por tan sólo $190.
        </div>
     
      </div>
    </div>
   
    </div>
  </div>
</section>
</>

    );
}

export default NuevosPlatillos;