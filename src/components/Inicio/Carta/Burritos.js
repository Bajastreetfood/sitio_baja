import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/burritos/gobernador.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/burritos/pollo.png'


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
                    Gobernador
                  </div>
                  <div class="subheading">
                  Burrito gigante con nuestra mezcla gobernador, arroz, frijoles y guacamole.
                  </div>
                </div>
                <div class="rightcontent">
                  $170
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Arrachera
                  </div>
                  <div class="subheading">
                    Arrachera marinada, en un relleno clásico de lechuga, elote, queso, aguacate y aderezo de chipotle.
                 </div>
                </div>
                <div class="rightcontent">
                  $160
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
                    Pollo
                  </div>
                  <div class="subheading">
                    Pechuga de pollo crocante, con un relleno de lechuga, elote, aguacate y aderezo chipotle.
                  </div>
                </div>
                <div class="rightcontent">
                  $140
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Pescado
                  </div>
                  <div class="subheading">
                    Pescado blanco rebosado, en un relleno de lechuga, fajitas de chile poblano, queso, guacamole y mayonesa chipotle.
                  </div>
                </div>
                <div class="rightcontent">
                  $140
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
                    Marlín
                  </div>
                  <div class="subheading">
                    Nuestra receta de marlín ahumado con piña, mix de col, guacamole y mayonesa chipotle.
                  </div>
                </div>
                <div class="rightcontent">
                  $145
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