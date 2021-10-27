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
                  Tostada Cerritos
                  </div>
                  <div class="subheading">
                  Deliciosas láminas de pescado cocido en limón sobre una cama de aguacate, con mayonesa de chipotle y salsa habanero tatemado.
                                    </div>
                </div>
                <div class="rightcontent">
                  $95
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Tostada de Pulpo
                  </div>
                  <div class="subheading">
                  Pulpo en escabeche de nopal y salsa de habanero tatemada.
                   </div>
                </div>
                <div class="rightcontent">
                  $99
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Tostada de Camarón
                  </div>
                  <div class="subheading">
                  Exquisitos camarones marinados al limón con eneldo, sobre una cama de pepino, acompañados de aguacate, dip de chipotle y salsa mexicana.
                                    </div>
                </div>
                <div class="rightcontent">
                  $95
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
                    Tostada de Atún
                  </div>
                  <div class="subheading">
                    Atún fresco marinado en aceite de ajonjolí, sobre una cama de aderezo de chipotle súper cremoso, acompañado de aguacate y poro frito.
                  </div>
                </div>
                <div class="rightcontent">
                  $95
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Tostada Peruana
                  </div>
                  <div class="subheading">
                    Deliciosos trozos de pescado en limón, bañado con crema para batir y queso parmesano, sobre una cama de aguacate, coronado con un toque de poro frito
                  </div>
                </div>
                <div class="rightcontent">
                  $95
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
                    Tostada de Aguachile
                  </div>
                  <div class="subheading">
                    Camarones marinados en limón, más nuestra exquisita y muy picante salsa de aguachile verde.
                  </div>
                </div>
                <div class="rightcontent">
                  $95
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Tostada de Marlín
                  </div>
                  <div class="subheading">
                    Nuestra exquisita receta de marlín ahumado con mix de col, aguacate, aderezo de chipotle y un toque de salsa de habanero tatemado.
                  </div>
                </div>
                <div class="rightcontent">
                  $90
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