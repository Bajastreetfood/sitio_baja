import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/tacos/gobernador.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/tacos/pescadocapeado.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/tacos/pulpo.png'


function Tacos(){
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
                    Pescado Capeado <i>50 g</i>
                  </div>
                  <div class="subheading">
                  Con guacamole, lechuga, crema y salsa mexicana                   </div>
                </div>
                <div class="rightcontent">
                  $50
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Aguacate Capeado <i>70 g</i>
                  </div>
                  <div class="subheading">
                  Con lechuga, crema y salsa mexicana	                                   </div>
                </div>
                <div class="rightcontent">
                  $45
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Camarón capeado <i>45 g</i>
                  </div>
                  <div class="subheading">
                  Con mix de coles y aderezo mayonesa chipotle	                           </div>
                </div>
                <div class="rightcontent">
                  $55
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
                    Pulpo <i>40 g</i>
                  </div>
                  <div class="subheading">
                  Tentáculo en salsa macha con piña, col,cebolla y cilantro                  </div>
                </div>
                <div class="rightcontent">
                  $70
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Arrachera con queso <i>60 g</i>
                  </div>
                  <div class="subheading">
                  Con costra de quesos y aguacate	                  </div>
                </div>
                <div class="rightcontent">
                  $50
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Pescado al pastor <i>100 g</i>
                  </div>
                  <div class="subheading">
                  Con piña, guacamole, cebolla morada y cilantro	                  </div>
                </div>
                <div class="rightcontent">
                  $55
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
                    Gobernador <i>60 g</i>
                  </div>
                  <div class="subheading">
                  Camarones, queso, pimientos y cebolla	                  </div>
                </div>
                <div class="rightcontent">
                  $75
                </div>
              </li>
            
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Marlín <i>60 g</i>
                  </div>
                  <div class="subheading">
                  Con aguacate y mix de coles	   
                                 </div>
                </div>
                <div class="rightcontent">
                  $50
                </div>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Tacos;