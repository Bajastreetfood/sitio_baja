import React from 'react';

import Foto1 from '../../../assets/IMG/menuplatillos/menu/cocinafria/cevicheperuano.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/cocinafria/tiraditodeatun.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/cocinafria/torremariscos.png'

function CocinaFria(){
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
                  Ceviche Peruano
                  </div>
                  <div class="subheading">
                  Pescado marinado en leche de tigre muy cremosa, acompñado de cebolla morada, camote, elote y aguacate.
                  </div>
                  </div>
                <div class="rightcontent">
                  $185
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Ceviche de Atún
                  </div>
                  <div class="subheading">
                  Atún, jitomate, chile cuaresmeño, cebolla y mango marinado en una mezcla acidita.
                   </div>
                </div>
                <div class="rightcontent">
                  $150
                </div>
              </li>
              
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Aguachile verde
                  </div>
                  <div class="subheading">
                  Proteína de tu elección; camarón, callo de almeja, pulpo o mixto, en una muy picosa mezcla con pepino y jícama.
                  </div>
                </div>
                <div class="rightcontent">
                  $175
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
                    Tártara de Salmón
                  </div>
                  <div class="subheading">
                    Salmón marinado en una cremosa mezcla con cebolla y pepino, sobre una base de aguacate picado.
                  </div>
                </div>
                <div class="rightcontent">
                  $180
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Tártara de Atún
                  </div>
                  <div class="subheading">
                   Lomo de atún en una mezcla cremosa, sobre una base de aguacate picado.
                  </div>
                </div>
                <div class="rightcontent">
                  $160
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Tiradito de Atún
                  </div>
                  <div class="subheading">
                    Láminas de lomo de atún fresco, bañadas en una salsa de soya con miel, acompañado de aguacate, cebolla, supremas de naranja y rodajas de chile habanero.
                    </div>
                </div>
                <div class="rightcontent">
                  $180
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
                    Torre de mariscos
                  </div>
                  <div class="subheading">
                   Mezcla deliciosa de frutos del mar (pulpo, camarón, callo de almeja y pescado) Acompañado de aguacate y una deliciosa salsa negra.
                  </div>
                </div>
                <div class="rightcontent">
                  $300
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Coctelito Baja
                  </div>
                  <div class="subheading">
                    Camarón cocido, en una exquisita salsa de tomate con aguacate, cebolla y pepino picados, con un ligero toque de chile cuaresmeño.
                  </div>
                </div>
                <div class="rightcontent">
                  $90
                </div>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default CocinaFria;