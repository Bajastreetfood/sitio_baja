import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/burgers/hamburguesa-2.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/burgers/hamburguesa-camaron.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/burgers/HAMBURGUESA-MARYTIERRA.png'


function Burgers(){
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
                    Camarón
                  </div>
                  <div class="subheading">
                  Camarones empanizados con costra de queso, mix de col, mayonesa chipotle, jitomate y aguacate.
                   </div>
                </div>
                <div class="rightcontent">
                  $170
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Arrachera
                  </div>
                  <div class="subheading">
                    Jugosa arrachera con aros de cebolla rebosada crujiente y un toque de aderezo tártara.
                  </div>
                </div>
                <div class="rightcontent">
                  $160
                </div>
              </li>




              
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery main lunch dinner">
          <div class="content-menu">
            <div class="img">
              <img src={Foto3} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                  Mar y Tierra
                  </div>
                  <div class="subheading">
                  Deliciosa hamburguesa de arrachera molida con camarones tempura mas deliciosa capa de queso fundido.
                                    </div>
                </div>
                <div class="rightcontent">
                  $210
                </div>
              </li>
             
             
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery lunch dinner dessert">
          <div class="content-menu">
            <div class="img">
              <img src="img/menu/3.png" alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Atún
                  </div>
                  <div class="subheading">
                    Atún fresco en costra de ajonjolí con piña a la plancha, acompañado de cebolla caramelizada con habanero y guacamole.
                  </div>
                </div>
                <div class="rightcontent">
                  $170
                </div>
              </li>
            
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Burgers;