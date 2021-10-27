import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/tacos/marlin.png'
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
                    Pescado Capeado
                  </div>
                  <div class="subheading">
                  Tira de pescado capeado, servido con guacamole, lechuga, crema y salsa mexicana. Desde la Baja a tu plato.
                   </div>
                </div>
                <div class="rightcontent">
                  $45
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Camarón con chorizo
                  </div>
                  <div class="subheading">
                  Deliciosa mezcla de camarones a la plancha con chorizo, aderezado con guacamole
                                   </div>
                </div>
                <div class="rightcontent">
                  $50
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Camarón capeado
                  </div>
                  <div class="subheading">
                  Acompañado de mix de col y aderezo chipotle.
                           </div>
                </div>
                <div class="rightcontent">
                  $50
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
                    Pulpo con chorizo
                  </div>
                  <div class="subheading">
                   Una mezcla excéntrica y deliciosa entre pulpo y chorizo, acompañado de guacamole.
                  </div>
                </div>
                <div class="rightcontent">
                  $55
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Pulpo 
                  </div>
                  <div class="subheading">
                    Delicioso tentáculo de pulpo rebosado en salsa macha, acompañado de <i>col slaw</i> y piña a la plancha.
                  </div>
                </div>
                <div class="rightcontent">
                  $65
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Arrachera con queso 
                  </div>
                  <div class="subheading">
                    Deliciosa arrachera marinada con queso gratinado y láminas de aguacate.
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
              <img src={Foto1} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
            <li>
                <div class="leftcontent">
                  <div class="title">
                    Pescado al pastor
                  </div>
                  <div class="subheading">
                    Pescado blanco marinado al pastor con su clásica piña asada y guacamole.
                  </div>
                </div>
                <div class="rightcontent">
                  $50
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Gobernador
                  </div>
                  <div class="subheading">
                   Mezcla de camarones, queso y crema con un toque de chipotle, servido con frijoles y guacamole.
                  </div>
                </div>
                <div class="rightcontent">
                  $60
                </div>
              </li>
            
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Marlín
                  </div>
                  <div class="subheading">
                    Ahumado al estilo Baja, acompañado de mix de col y láminas de aguacate.
                  </div>
                </div>
                <div class="rightcontent">
                  $45
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