import React from 'react';
import Foto1 from '../../assets/IMG/sugerencias/aguachilenegro.png'
import Foto2 from '../../assets/IMG/sugerencias/cremadepapa.png'
import Foto3 from '../../assets/IMG/sugerencias/crostatamanzana.png'
import Foto4 from '../../assets/IMG/sugerencias/gringabaja.png'
import Foto5 from '../../assets/IMG/sugerencias/hamburguesapescado.png'
import Foto6 from '../../assets/IMG/sugerencias/pulpoalasbrasas.png' 
import Foto7 from '../../assets/IMG/menuplatillos/menu/burritos/gobernador.png'


function Recomendaciones(){
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

    <div class="col-10 m-auto">
      <div class="row">

        <div class="col-md-6">
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
          <div class="content-menu hor">
            <div class="img">
              <img src={Foto1} alt="menu"/>
            </div>
            <ul class="food-list">
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Aguachile negro
                  </div>
                  <div class="subheading">
                  Picosa salsa tatemada de habanero acompañada de jícama, pepino y cebolla morada.                  </div>
                  
                </div>
                <div class="rightcontent">
                $185
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="content-menu hor">
            <div class="img">
              <img src={Foto5} alt="menu"/>
            </div>
            <ul class="food-list">
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Hamburguesa de Pescado
                                    </div>
                  <div class="subheading">
                  Pescado rebosado, con aguacate y un delicioso mix de <i>col slaw</i> con aderezo tártara.
                  </div>
                </div>
                <div class="rightcontent">
                $150

                </div>
              </li>
            </ul>
          </div>
          <div class="content-menu hor">
            <div class="img">
              <img src={Foto4} alt="menu"/>
            </div>
            <ul class="food-list">
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Gringa Baja
                  </div>
                  <div class="subheading">
                  Gratinada con queso, más piña asada, te la recomendamos con pescado al pastor.
                  </div>
                </div>
                <div class="rightcontent">
                $95
                </div>
              </li>
            </ul>
          </div>
          <div class="content-menu hor">
            <div class="img">
              <img src={Foto7} alt="menu"/>
            </div>
            <ul class="food-list">
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Burrito Mar y Tierra
                  </div>
                  <div class="subheading">
                  Camarón y arachera con queso, guacamole, elote y fajitas de chile poblano.
                 <br/>
                  </div>
                </div>
                <div class="rightcontent">
                $190
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    </div>
  </div>
</section>
    );    
}

export default Recomendaciones;