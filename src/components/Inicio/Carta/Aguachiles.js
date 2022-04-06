import React from 'react'


import Foto1 from '../../../assets/IMG/menuplatillos/menu/burritos/gobernador.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/burritos/pollo.png'

export default function Aguachiles() {
    return(
        <div class="col-12 px-0 w-gallery-container">
      <div class="row">
        <div class="col-md-4 w-gallery main lunch dessert">
          <div class="content-menu">
            <div class="img">
            <img src="img/menu/2.png" alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Verde
                  </div>
                  <div class="subheading">
                  Serrano y habanero + pepino, jicama y cebolla morada                  </div>
                </div>
                <div class="rightcontent">
                  $190
                </div>
              </li>
              
              
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery main lunch dinner">
          <div class="content-menu">
            <div class="img">
            <img src="img/menu/2.png" alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Rojo
                  </div>
                  <div class="subheading">
                  Chile chiltepín, clamato + pepino, jícama, cebolla y jitomate cherry                </div>
                </div>
                <div class="rightcontent">
                  $200
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
                    Negro
                  </div>
                  <div class="subheading">
                  Habanero y tomate tatemados + jícama, pepino y cebolla morada                </div>
                </div>
                <div class="rightcontent">
                  $210
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}
