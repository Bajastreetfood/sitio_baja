import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/starters/alitasdepulpo.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/starters/chipspulpo.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/starters/popcorncamaron2.png'

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
                    Alitas de Pulpo <i>150 g</i>
                  </div>
                  <div class="subheading">
                  Con papas gajo, aderezo Ranch y salsa hot o BBQ	                  </div>
                </div>
                <div class="rightcontent">
                  $250
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Pop Corn de Pollo <i>350 g</i>
                  </div>
                  <div class="subheading">
                  Con aderezo Ranch y salsa hot o BBQ                                    </div>
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
                    Chips de Pulpo <i>100 g</i>
                  </div>
                  <div class="subheading">
                  Con salsa macha y aderezo mayonesa-chipotle	                  </div>
                </div>
                <div class="rightcontent">
                  $195
                </div>
              </li>
             
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Pescadillas (1pz) <i>40 g</i>
                  </div>
                  <div class="subheading">
                    Con lechuga, crema y guacamole.
                    - Marlín
                    - Pescado blanco
                  </div>
                </div>
                <div class="rightcontent">
                  $35
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
                  Con papas gajo, aderezo Ranch y salsa hot o BBQ                  </div>
                </div>
                <div class="rightcontent">
                  $195
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Quesadillas de Pulpo con Chorizo (3pz) <i>100 g</i>
                  </div>
                  <div class="subheading">
                    Con lechuga, crema y guacamole.
                    - Marlín
                    - Pescado blanco
                  </div>
                </div>
                <div class="rightcontent">
                  $135
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