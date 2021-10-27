import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/botanas/dedosdequeso.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/botanas/papaschili.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/botanas/pescadillas.png'

function Snacks(){
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
                    Dedos de queso
                  </div>
                  <div class="subheading">
                  Delicioso queso gouda empanizado y acompañado de salsa marinara.
                   </div>
                </div>
                <div class="rightcontent">
                  $140
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Papas Gajo / Francesa
                  </div>
                  <div class="subheading">
                   Con delicioso aderezo ranch y chipotle.
                  </div>
                </div>
                <div class="rightcontent">
                  $70
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Aguacate
                  </div>
                  
                </div>
                <div class="rightcontent">
                  $35
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
                  Pescadilla
                  </div>
                  <div class="subheading">
                  Tradicional quesadilla frita, pídela de:<br></br> - Pulpo con chorizo <br></br>- Pescado <br></br>- Marlín
                  </div>
                </div>
                <div class="rightcontent">
                  $28
                </div>
              </li>
              
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Proteína Extra
                  </div>
                  
                </div>
                <div class="rightcontent">
                  $60
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Guacamole
                  </div>
                  
                </div>
                <div class="rightcontent">
                  $45
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
                  Papas Chili
                  </div>
                  <div class="subheading">
                  Crujientes papas a la francesa bañadas con una mezcla chili, crema, queso amarillo, cheddar, tocino frito y chile cuaresmeño.
                  </div>
                </div>
                <div class="rightcontent">
                  $160
                </div>
              </li>
              
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Ingrediente Extra
                  </div>
                  
                </div>
                <div class="rightcontent">
                  $15
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Salsa Tatemada Extra
                  </div>
                  
                </div>
                <div class="rightcontent">
                  $15
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Snacks;