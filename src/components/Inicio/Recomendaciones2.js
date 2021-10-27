import React from 'react';
import Foto1 from '../../assets/IMG/sugerencias/aguachilenegro.png'
import Foto2 from '../../assets/IMG/sugerencias/cremadepapa.png'
import Foto3 from '../../assets/IMG/sugerencias/crostatamanzana.png'
import Foto4 from '../../assets/IMG/sugerencias/gringabaja.png'
import Foto5 from '../../assets/IMG/sugerencias/hamburguesapescado.png'
import Foto6 from '../../assets/IMG/sugerencias/pulpoalasbrasas.png' 
import Foto7 from '../../assets/IMG/menuplatillos/menu/burritos/gobernador.png'


function Recomendaciones2(){
    return(
        <section id="recomendaciones" aria-label="section" class="s-img " style={{backgroundImage: `url('img/bgfoodicon.png')`}}>
        <div class="container-fluid">
          <div class="row p-3-vh">
       
           <div class="col-12 text-center">
             <div class="main-content">
               <div class="heading">
                 <div class="title l-1">
                   Sugerencias del Chef
                 </div>
               </div>
             </div>
           </div>
           <div class="row">
           <div class="col-12 m-auto">
               <div className="col-1">

               </div>
               <div class="col-md-5">
          <div class="content-menu hor">
            <div class="img">
              <img src={Foto2} alt="menu"/>
            </div>
            <ul class="food-list">
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Crema de Papa
                  </div>
                  <div class="subheading">
                  Aderezada con tocino espolvoreado y queso cheddar, con pan de ajo para acompañar. 
                  </div>
                </div>
                <div class="rightcontent">
                $45
                </div>
              </li>
            </ul>
          </div>
          </div>
          <div class="col-md-5">
          <div class="content-menu hor">
            <div class="img">
              <img src={Foto6} alt="menu"/>
            </div>
            <ul class="food-list">
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Pulpo a las Brasas
                  </div>
                  <div class="subheading">
                  Elaborado con una salsa macha artesanal con semillas, arroz negro y espárragos al ajillo.                  </div>
                  
                </div>
                <div class="rightcontent">
                $350
                </div>
              </li>
            </ul>
          </div>
          </div>
               <div className="col-1">

               </div>
               </div>
           </div>
           </div>
  </div>
</section>
    );    
}

export default Recomendaciones2;