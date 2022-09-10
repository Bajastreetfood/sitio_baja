import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Foto1 from '../../../assets/IMG/menuplatillos/menu/especialidades/atuncostra.png'
import Foto2 from '../../../assets/IMG/menuplatillos/menu/especialidades/arrachera-surfandturf.png'
import Foto3 from '../../../assets/IMG/menuplatillos/menu/especialidades/salmonmaracuya.png'

function Especialidades() {
  return (
    <div class="col-12 px-0 w-gallery-container">
      <div class="row">
        <div class="col-md-4 w-gallery main lunch dessert">
          <div class="content-menu">
            <div class="img">
              <img src={Foto1} alt="menu" />
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Atún Costra <i>200 g</i>
                  </div>
                  <div class="subheading">
                    Costra de ajonjolí, arroz en vinagreta, miel moztaza y fruta tropical
                    <Link to='/AR'>
                    <button type="button" class="btn btn-outline-dark"> <span class="material-icons">view_in_ar</span> Probar en AR</button>  
            </Link>   
                  </div>
                </div>
                <div class="rightcontent">
                  $235
                </div>
              </li>

              <li>
                <div class="leftcontent">
                  <div class="title">
                    Brochetas de Marlín <i>180 g</i>
                  </div>
                  <div class="subheading">
                    Pimientos, jitomate cherry, cebolla y arroz                                   </div>
                </div>
                <div class="rightcontent">
                  $170
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Sierra a la Plancha <i>250 g</i>
                  </div>
                  <div class="subheading">
                    Sazonada estilo italiano con guarnicion a elegir </div>
                </div>
                <div class="rightcontent">
                  $230
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 w-gallery main lunch dinner">
          <div class="content-menu">
            <div class="img">
              <img src={Foto2} alt="menu" />
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Arrachera Surf & Turf <i>250 g</i>
                  </div>
                  <div class="subheading">
                    252 gr más camarones gobernador y   guarnición a elegir                  </div>
                </div>
                <div class="rightcontent">
                  $250
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Pescado en mantequilla de limón <i>180 g</i>
                  </div>
                  <div class="subheading">
                    150  g de filete empanizado de avellana y guarnición a elegir</div>
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
              <img src={Foto3} alt="menu" />
            </div>
            <ul class="food-list autoheight-1">
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Lomo de Salmón de Maracuyá <i>200 g</i>
                  </div>
                  <div class="subheading">
                    Con espárragos término y guarnición a elegir                  </div>
                </div>
                <div class="rightcontent">
                  $290
                </div>
              </li>
              <li>
                <div class="leftcontent">
                  <div class="title">
                    Pulpo a las Brasas <i>250 g</i>
                  </div>
                  <div class="subheading">
                    En salsa macha, esparragos al ajillo + arroz en blanco y negro                   </div>
                </div>
                <div class="rightcontent">
                  $465
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