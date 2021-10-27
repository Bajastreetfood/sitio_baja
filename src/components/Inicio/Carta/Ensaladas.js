import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/ensaladas/ensaladabaja.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/ensaladas/ensalada-quesodecabra.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/ensaladas/ensalada-mango.png'




function Ensaladas(){
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
                    Baja
                  </div>
                  <div class="subheading">
                  Con lechuga, jitomate, aguacate, rábano, manzana, pepino, jícama, cítricos y semillas frescas, servida con <i> 150 g</i> de pechuga de pollo o arrachera con aderezo <i>honey-mustard</i>
                   </div>
                </div>
                <div class="rightcontent">
                  $140
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Atún
                  </div>
                  <div class="subheading">
                  Mix de lechugas frescas, aguacate y supremas de naranja, con un delicioso <i>steak</i> de atún fresco en costra de ajonjolí y aderezo de soya.
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
              <img src={Foto3} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Mango
                  </div>
                  <div class="subheading">
                   Mezcla de lechugas, aguacate, espinaca, jitomate, cebolla, chile y mango, complementada con una vinagreta cítrica.
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
              <img src={Foto2} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Espinacas y Queso de Cabra
                  </div>
                  <div class="subheading">
                    Mix de espinaca y lechuga aderezada con una vinagreta de miel, acompañado con queso fresco de cabra.
                  </div>
                </div>
                <div class="rightcontent">
                  $140
                </div>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Ensaladas;