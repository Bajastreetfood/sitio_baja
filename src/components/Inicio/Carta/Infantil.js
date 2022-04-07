import React from 'react'


import Foto1 from '../../../assets/IMG/menuplatillos/menu/infantil/dedos.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/infantil/tiras.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/ensaladas/ensalada-mango.png'


export default function Infantil() {
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
                    Dedos de Pescado <i>150 g</i>
                  </div>
                  <div class="subheading">
                  Con papas y ensalada                  </div>
                </div>
                <div class="rightcontent">
                  $130
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
                    Tiras de Pollo <i>150 g</i>
                  </div>
                  <div class="subheading">
                 Con papas y ensalada                   </div>
                </div>
                <div class="rightcontent">
                  $120
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
                    Pasta con pollo <i>130 g</i>
                                      </div>
                  <div class="subheading">
                 A la plancha, Alfredo o Mc N´ Cheese                 </div>
                </div>
                <div class="rightcontent">
                  $130
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}
