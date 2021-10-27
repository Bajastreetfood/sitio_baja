import React, { Fragment } from 'react';
import Footer from './Footer';

function PreguntasFrecuentes(){
    return(
        <Fragment>
        <section class="breadcumb" aria-label="breadcumb"style={{backgroundImage: `url('img/breadcumb.jpg')`}}>
          <div class="container-fluid">
           <div class="row">
            <div class="col-12">
              <div class="main">
                <div class="bread">
                  <div class="img-icon">
                     <img src="img/breadcumb-icon.png" alt="#"/>
                  </div>
                  <div class="bread-title">Preguntas Frecuentes</div>
                  
                </div>
              </div>
            </div>
           </div>
         </div>
        </section>
        <Footer/>
        </Fragment>
    );
}

export default PreguntasFrecuentes;