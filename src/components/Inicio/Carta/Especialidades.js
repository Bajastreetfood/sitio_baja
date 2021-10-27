import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/especialidades/atuncostra.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/especialidades/arrachera-surfandturf.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/especialidades/salmonmaracuya.png'

function Especialidades(){
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
                    Atún Costra
                  </div>
                  <div class="subheading">
                  Steak de atún con una costra de ajonjolí, cortado en láminas, acompañado con arroz, espárragos al ajillo y los sabores cítricos del Baja.
                   </div>
                </div>
                <div class="rightcontent">
                  $220
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Filete de pescado en mantequilla de limón
                  </div>
                  <div class="subheading">
                Filete de pescado rebosado en una mezcla de avellanas y mantequiella de limón, acompañado de ensalada o verduras horneadas.
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
                    Arrachera Surf & Turf
                  </div>
                  <div class="subheading">
                    Arrachera <i>premium</i> aderezada con camarones en mantequilla de limón, acompañada de ensalada o verduras horneadas.
                  </div>
                </div>
                <div class="rightcontent">
                  $195
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Chile relleno de Mariscos
                  </div>
                  <div class="subheading">
                    Chile poblano relleno de <i>250 g</i> de camarón y queso, bañado en la salsa secreta de la Baja, con guarnición de arroz.
                  </div>
                </div>
                <div class="rightcontent">
                  $220
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
                    Lomo de Salmón de Maracuyá
                  </div>
                  <div class="subheading">
                    Salmón a la planca bañado en una deliciosa salsa de maracuyá, acompañado de arroz y espárragos al ajillo, más ensalada o verduras al horno
                  </div>
                </div>
                <div class="rightcontent">
                  $260
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Especialidades;