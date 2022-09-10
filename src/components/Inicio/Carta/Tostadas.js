import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/tostadas/aguachile.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/tostadas/cerritos.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/tostadas/tostadaatun.png'

function Tostadas(){
    return(
        <div class="col-12 px-0 w-gallery-container">
      <div class="row">
        <div class="col-md-4 w-gallery main lunch dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto2} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                  Cerritos <i>100 g</i>
                  </div>
                  <div class="subheading">
                  Pescado blanco, guacamole, mayonesa chipotle, aguacate y salsa de habanero
                                    </div>
                </div>
                <div class="rightcontent">
                  $110
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Pulpo <i>50 g</i>
                  </div>
                  <div class="subheading">
                  En escabeche de nopal y salsa tatemada de habanero                   </div>
                </div>
                <div class="rightcontent">
                  $110
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Camarón <i>60 g</i>
                  </div>
                  <div class="subheading">
                  Mayonesa-chipotle, pepino, salsa     mexicana y ponzu                                    </div>
                </div>
                <div class="rightcontent">
                  $110
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
                  Atún <i>80 g</i>
                  </div>
                  <div class="subheading">
                  Mayonesa-chipotle, aguacate, ajonjolí y poro frito
                  </div>
                </div>
                <div class="rightcontent">
                  $95
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Peruana <i>100 g</i>
                  </div>
                  <div class="subheading">
                  Pescado blanco, aguacate, crema, queso parmesano, grano de elote y camote
                  </div>
                </div>
                <div class="rightcontent">
                  $110
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Señora Tostada de Atún <i>150 g</i>
                  </div>
                  <div class="subheading">
                  supremas de naranja, aguacate, ajonjolí y aderezo balsámico
                  </div>
                </div>
                <div class="rightcontent">
                  $180
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery lunch dinner dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto1} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Aguachile <i>60 g</i>
                  </div>
                  <div class="subheading">
                  Serrano y habanero + pepino, jícama y cebolla morada                  </div>
                </div>
                <div class="rightcontent">
                  $115
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Marlín <i>80 g</i>
                  </div>
                  <div class="subheading">
                  Mayonesa-chipotle, mix de coles,   aguacate y salsa tatemada de habanero                  </div>
                </div>
                <div class="rightcontent">
                  $110
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Vegetariana
                  </div>
                  <div class="subheading">
                  Jicama, mango, manzana, pepino, aguacate y salsa mexicana                  </div>
                </div>
                <div class="rightcontent">
                  $80
                </div>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Tostadas;