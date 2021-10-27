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
                    Arroz Baja
                  </div>
                  <div class="subheading">
                  Arroz hecho con todo el sabor de la Baja, acompañado de <i>150 g</i>  de camarones al ajillo. </div>
                </div>
                <div class="rightcontent">
                  $110
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
                  Caldo de Camarón
                  </div>
                  <div class="subheading">
                    Calientito caldo con camarones cocidos, finas papas y zanahorias.
                                    </div>
                </div>
                <div class="rightcontent">
                  $50
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
                    Sopa Azteca de Mariscos
                  </div>
                  <div class="subheading">
                    Mariscos combinados en una sopa azteca tradicional.
                  </div>
                </div>
                <div class="rightcontent">
                  $85
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