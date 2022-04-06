import React from 'react'

import Foto1 from '../../../assets/IMG/menuplatillos/menu/especialidades/atuncostra.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/especialidades/arrachera-surfandturf.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/especialidades/salmonmaracuya.png'


// TO DO:
// Cambiar las fotoss de las pastas

export default function Pastas() {
    return(
        <div class="col-12 px-0 w-gallery-container">
      <div class="row">
        <div class="col-md-4 w-gallery main lunch dessert">
          <div class="content-menu">
            <div class="img">
            <img src="img/menu/2.png" alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Camarones <i>105 g</i>
                  </div>
                  {/* <div class="subheading">
                  Costra de ajonjolí, arroz en vinagreta, miel moztaza y fruta tropical                   </div> */}
                </div>
                <div class="rightcontent">
                  $210
                </div>
              </li>
              
              
              
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery main lunch dinner">
          <div class="content-menu">
            <div class="img">
            <img src="img/menu/2.png" alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                   Pulpo <i>120 g</i>
                  </div>
                  {/* <div class="subheading">
                  252 gr más camarones gobernador y   guarnición a elegir                  </div> */}
                </div>
                <div class="rightcontent">
                  $280
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery lunch dinner dessert">
          <div class="content-menu">
            <div class="img">
            <img src="img/menu/2.png" alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                   Salmón <i>200 g</i>
                  </div>
                  {/* <div class="subheading">
                  Con espárragos término y guarnición a elegir                  </div> */}
                </div>
                <div class="rightcontent">
                  $280
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Opciones de pasta: 
                  </div>
                  <div class="subheading">
                  - Alfredo
                  <br></br>
                  - Cilantro
                  <br></br>
                  - Mac N' Cheese
                  <br></br>
                                     </div>
                </div>
                <div class="rightcontent">
                  
                </div>
              </li>
              
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}
