import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/vegetariano/hamburguesa.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/vegetariano/taco-aguacatecapeado.png'



function Vegetariano(){
    return(
        <div class="col-12 px-0 w-gallery-container">
      <div class="row">
        <div class="col-md-4 w-gallery main lunch dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto2} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Taco de Aguacate Capeado
                  </div>
                  <div class="subheading">
                  Aguacate capeado sobre una tortilla de maíz, acompañado de salsa mexicana, lechuga y crema.
                   </div>
                </div>
                <div class="rightcontent">
                  $45
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Tostada Vegetariana
                  </div>
                  <div class="subheading">
                  Delicioso ceviche 100% vegano con mango, jícama, manzana, aguacate y salsa mexicana.
                  </div>
                </div>
                <div class="rightcontent">
                  $70
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
                    Chile Relleno de Queso
                  </div>
                  <div class="subheading">
                   Chile poblano capeado relleno de queso gratinado, bañado con la salsa secreta de la Baja, acompañado de arroz.
                  </div>
                </div>
                <div class="rightcontent">
                  $160
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Burrito Vegetariano
                  </div>
                  <div class="subheading">
                   Burrito relleno de una mezcla de aguacate, rajas, queso y vegetales.
                  </div>
                </div>
                <div class="rightcontent">
                  $125
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery lunch dinner dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto1} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Hamburguesa Vegetariana
                  </div>
                  <div class="subheading">
                    Con un centro de aguacate capeado, fajitas de chile poblano, queso, lechuga, jitomate y aderezo tártara.
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

export default Vegetariano;