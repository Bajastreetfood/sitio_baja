import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/ensaladas/baja.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/ensaladas/ensenada.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/ensaladas/atun.png'




function Ensaladas(){
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
                    Baja <i>120 g</i>
                  </div>
                  <div class="subheading">
                  Mix de lechugas, jitomate, aguacate, rabano, manzana, pepino, jícama, aderezo citrico y pollo, arrachera o camarón                   </div>
                </div>
                <div class="rightcontent">
                  $150
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
                    Ensenada <i>120 g</i>
                  </div>
                  <div class="subheading">
                  Lechugas, aguacate, jitomate cherry, crutones, nuez y mix de coles + pollo, arrachera o camarón                   </div>
                </div>
                <div class="rightcontent">
                  $190
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
                    De Atún <i>200 g</i>
                                      </div>
                  <div class="subheading">
                  En costra de ajonjoli, con mix de lechugas, aguacate y supremas de naranja                  </div>
                </div>
                <div class="rightcontent">
                  $230
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Ensaladas;