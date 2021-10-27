import React from 'react';

function Bebidas(){
    return(
        <div class="col-12 px-0 w-gallery-container">
      <div class="row">
        <div class="col-md-4 w-gallery main lunch dessert">
          <div class="content-menu">
            <div class="img">
              <img src="img/menu/1.png" alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Camarón
                  </div>
                  <div class="subheading">
                  Camarones salteados con aceite de ajo y deliciosa costra de queso, acompañada de aguacate y aderezo tártara.
                   </div>
                </div>
                <div class="rightcontent">
                  $160
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Mar y Tierra
                  </div>
                  <div class="subheading">
                  Deliciosa hamburguesa de arrachera con camarones tempura, acompañado de crocantes bastones de camote frito estilo Baja.
                                    </div>
                </div>
                <div class="rightcontent">
                  $210
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
                    Arrachera
                  </div>
                  <div class="subheading">
                    Jugosa arrachera con aros de cebolla rebosada crujiente y un toque de aderezo tártara.
                  </div>
                </div>
                <div class="rightcontent">
                  $160
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
                    Atún
                  </div>
                  <div class="subheading">
                    Atún fresco en costra de ajonjolí con piña a la plancha, acompañado de cebolla caramelizada con habanero y guacamole.
                  </div>
                </div>
                <div class="rightcontent">
                  $170
                </div>
              </li>
            
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Bebidas;