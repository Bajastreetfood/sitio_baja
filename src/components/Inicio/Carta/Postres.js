import React from 'react';


import Foto1 from '../../../assets/IMG/menuplatillos/menu/postres/carpaccionmango.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/postres/chimichanga.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/postres/pastel.png'


function Postres(){
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
                    Chimichanga de Nutella / Fresa
                  </div>
                  <div class="subheading">
                  Tortilla de harina frita enrollada con un centro de queso crema.
                   </div>
                </div>
                <div class="rightcontent">
                  $110
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                  Pay Helado de Limón
                  </div>
                  
                </div>
                <div class="rightcontent">
                  $90
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery main lunch dinner">
          <div class="content-menu">
            <div class="img">
              <img src={Foto1} alt="menu"/>
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Carpaccio de Mango
                  </div>
                  <div class="subheading">
                    Cama de mango marinada en salsa de maracuyá, acompañada de helado de vainilla y blue berry.
                  </div>
                </div>
                <div class="rightcontent">
                  $110
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
                   Pastel del Día
                  </div>
                  
                </div>
                <div class="rightcontent">
                  $120
                </div>
              </li>
              {/* <li>
                <div class="leftcontent">
                  <div class="Subheading">
                   En la compra de cualquier postre, por <b>$20</b> más agrega un café:
                  </div>
                  <div class="subheading">
                  - americano <br></br>
                  - expresso <br></br>
                  - capuccino <br></br>
                  - late <br></br>
                  - mokaccino
                    </div>
                </div>
                
              </li> */}
            </ul>
          </div>
        </div>
       
      </div>
    </div>
    );
}

export default Postres;