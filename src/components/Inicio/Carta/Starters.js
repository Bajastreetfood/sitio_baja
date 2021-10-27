import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/starters/alitasdepulpo.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/starters/chipspulpo.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/starters/popcorncamaron.png'

function Starters(){
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
                    Alitas de Pulpo
                  </div>
                  <div class="subheading">
                  Pulpo crocante sobre una cama de papas gajo, marinado en salsa hot o BBQ, acompañado de bastones de pepino y aderezo Ranch.
                  </div>
                </div>
                <div class="rightcontent">
                  $230
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Pop Corn de Pollo
                  </div>
                  <div class="subheading">
                  Pollo crocante, marinado en salsa hot o BBQ, acompañado de bastones de pepino y aderezo Ranch.
                                    </div>
                </div>
                <div class="rightcontent">
                  $180
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
                    Chips de Pulpo
                  </div>
                  <div class="subheading">
                    Pulpo en salsa macha sobre 9 piezas de papas fritas acompañadas con dip de chipotle y piña.
                  </div>
                </div>
                <div class="rightcontent">
                  $180
                </div>
              </li>
             
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Queso Fundido
                  </div>
                  <div class="subheading">
                    Queso gratinado más <i> 110 g</i> de tu proteína favorita.
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
              <img src={Foto3} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                    Pop Corn de Camarón
                  </div>
                  <div class="subheading">
                    Camarón rebosado en harina crujiente sobre una cama de papas, acompañados de tu salsa favorita.
                  </div>
                </div>
                <div class="rightcontent">
                  $180
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Starters;