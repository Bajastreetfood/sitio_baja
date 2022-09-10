import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/burgers/hamburguesa-2.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/burgers/arrachera.png'
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
                    Camarón <i>90 g</i>
                  </div>
                  <div class="subheading">
                  Camarones empanizados, aderezo   mayonesa-chipotle, coles, jitomate, aguacate y queso                   </div>
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
              <img src={Foto3} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                  Mar y Tierra <i>195 g</i>
                  </div>
                  <div class="subheading">
                  Arrachera, camarones capeados, lechuga jitomate y mostaza                                    </div>
                </div>
                <div class="rightcontent">
                  $240
                </div>
              </li>
             
             
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery lunch dinner dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto2} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                    Arrachera <i>150 g</i>
                  </div>
                  <div class="subheading">
                  Con aros capeados, queso, lechuga y jitomate                  </div>
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
    );
}

export default Burgers;