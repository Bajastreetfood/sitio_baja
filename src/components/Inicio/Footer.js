import React, { Fragment, useState } from 'react';

import AddReservacion from './AddReservacion';

function Footer(){
  const [modalShow, setModalShow] = useState(false);

    return(
        <Fragment>
    <footer id="Contacto" style={{backgroundImage: `url('img/bgfoodicon.png')`}}>
          <div class="container-fluid">
            <div class="row p-3-vh">
        
              <div class="col-md-4 centered">
                <div class="foo-cont">
                  <div class="title">
                    Dirección
                  </div>
                  <div class="detail">
                    Rio Lerma #184, Cuauhtémoc<br />
                    Ciudad de México
                  </div>
                  <a class="btn" href="https://goo.gl/maps/rtQyngVWvYPCUFje9" target="_blank">Ver en google maps</a>
                </div>
              </div>
        
              <div class="col-md-4">
                <div class="foo-reserv">
                  <div class="title">
                    Horario
                  </div>
                  <div class="detail">
                    <div class="list">
                      <span class="day">Lun-Mar</span>
                      <span class="time">01:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                  <div class="detail">
                    <div class="list">
                      <span class="day">Miércoles</span>
                      <span class="time">01:00 PM - 12:00 AM</span>
                    </div>
                  </div>
                  <div class="detail">
                    <div class="list">
                      <span class="day">Jue-Sab</span>
                      <span class="time">01:00 PM - 02:00 AM</span>
                    </div>
                  </div>
                  <div class="detail">
                    <div class="list">
                      <span class="day">Domingo</span>
                      <span class="time">12:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                  <a class="btn-content mt-4" id="botonReservacionFooter" data-toggle="modal" data-target="#resevmodal" href="#"onClick={() => setModalShow(true)}>
                    <span class="shine"></span>
                    Reservación
                  </a>
                  <AddReservacion show={modalShow} onHide={() => setModalShow(false)} />

                </div>
              </div>
        
              <div class="col-md-4 centered">
                <div class="foo-cont">
                  <div class="title">
                    Contacto
                  </div>
                  <div class="detail">
                  <a href = "mailto:Bajastreetfood@gmail.com" id="linkFooter">Email: Bajastreetfood@gmail.com </a><br />
                  <a href="tel:5568455512" id="linkFooter"> Telefono: 5568455512</a>
                  </div>
                  <a class="btn mb-0" href=" https://wa.me/+525570601724">Mandar whatsapp</a>
                </div>
              </div>
        
            </div>
         </div>
        </footer>
        <div class="subfooter">
          <span>Copyright©2021 Baja Streetfood All Rights Reserved.</span>
        </div>
        </Fragment>
    );
}

export default Footer;