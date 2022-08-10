import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/burritos/gobernador2.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/burritos/pollo.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/burritos/marlin.png'


function Burritos(){
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
                    Gobernador <i>105 g</i>
                  </div>
                  <div class="subheading">
                  Mayonesa-chipotle, lechuga, arroz y guacamole                  </div>
                </div>
                <div class="rightcontent">
                  $190
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Arrachera <i>120 g</i>
                  </div>
                  <div class="subheading">
                  Lechuga, esquites, jitomate, aguacate, queso y mayonesa chipotle                 </div>
                </div>
                <div class="rightcontent">
                  $170
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
                    Pollo <i>100 g</i>
                  </div>
                  <div class="subheading">
                  Mayonesa-chipotle, lechuga, esquites, jitomate, aguacate y queso                  </div>
                </div>
                <div class="rightcontent">
                  $150
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
                    Marlín <i>100 g</i>
                  </div>
                  <div class="subheading">
                  Mix de coles, piña, mayonesa chipotle + guacamole                  </div>
                </div>
                <div class="rightcontent">
                  $160
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Burritos;