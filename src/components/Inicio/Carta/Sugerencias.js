import React from 'react';

import Foto1 from '../../../assets/IMG/sugerencias/cremadepapa.png'
import Foto2 from '../../../assets/IMG/sugerencias/hamburguesapescado.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/burritos/gobernador.png'

function Sugerencias(){
    return(
        <div class="col-12 px-0 w-gallery-container">
      <div class="row">
        <div class="col-md-4 w-gallery main lunch dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto1} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Crema de Papa
                  </div>
                  <div class="subheading">
                  Aderezada con tocino espolvoreado y queso cheddar, con pan de ajo para acompañar. </div>
                </div>
                <div class="rightcontent">
                  $50
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Pulpo a las Brasas
                  </div>
                  <div class="subheading">
                  Elaborado con una salsa macha artesanal con semillas acompañado de arroz negro y blanco con espárragos al ajillo.                  </div>
                </div>
                <div class="rightcontent">
                  $380
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery main lunch dinner">
          <div class="content-menu">
            <div class="img">
              <img src={Foto2} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                    Hamburguesa de Pescado
                  </div>
                  <div class="subheading">
                    Pescado rebosado, con aguacate y un delicioso mix de <i>col slaw</i> con aderezo tártara
                  </div>
                </div>
                <div class="rightcontent">
                  $150
                </div>
              </li>
            <li>
                <div class="leftcontent">
                  <div class="title">
                  Aguachile negro
                  </div>
                  <div class="subheading">
                  Picosa salsa tatemada de habanero acompañada de jícama, pepino y cebolla morada, con la proteína de tu elección (callo de almeja, camarón, pulpo o mixto).                  </div>
                </div>
                <div class="rightcontent">
                  $195
                </div>
              </li>
              
             
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery lunch dinner dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto3} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                    Burrito Mar y Tierra
                  </div>
                  <div class="subheading">
                    Camarón y arachera con queso, guacamole, elote y deliciosas fajitas de chile poblano.
                  </div>
                </div>
                <div class="rightcontent">
                  $190
                </div>
              </li>
            <li>
                <div class="leftcontent">
                  <div class="title">
                    Gringa Baja
                  </div>
                  <div class="subheading">
                    Gratinada con queso, más piña asada y la protéina que elijas (marlín, arrachera, camarón con chorizo, pulpo con chorizo o pescado al pastor).
                  </div>
                </div>
                <div class="rightcontent">
                  $105
                </div>
              </li>
              
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Sugerencias;