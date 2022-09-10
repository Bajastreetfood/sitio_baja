import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/sopas/arrozbaja.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/sopas/aztecademariscos.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/sopas/caldocamaron.png'

function Sopas(){
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
                    Arroz Baja <i>105 g</i>
                  </div>
                  <div class="subheading">
                  Con camarones al ajillo en arroz blanco con fruta tropical </div>
                </div>
                <div class="rightcontent">
                  $120
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
                  Caldo de Camarón Chico <i>45 g</i>
                  </div>
                  <div class="subheading">
                  Tradicional con papas y zanahoria                                    </div>
                </div>
                <div class="rightcontent">
                  $60
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Caldo de Camarón Grande <i>120 g</i>
                  </div>
                  <div class="subheading">
                  Tradicional con papas y zanahoria                                    </div>
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
              <img src={Foto2} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Sopa Azteca de Mariscos <i>90 g</i>
                  </div>
                  <div class="subheading">
                  Pulpo y camarón, terminada con crema, aguacate y guajillo	
                  </div>
                </div>
                <div class="rightcontent">
                  $120
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Crema del Día <i>230 ml</i>
                  </div>
                  <div class="subheading">
                  Pregunta por el sabor del día	                  </div>
                </div>
                <div class="rightcontent">
                  $60
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Sopas;