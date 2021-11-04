import React, {Fragment, useState, useContext} from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reservacionContext from '../../context/reservaciones/reservacionContext';
import axios from 'axios'
import emailjs from 'emailjs-com';

import { send } from 'emailjs-com';

function Addreservacion(){

  //obtener el state del formulario
  const reservacionesContext = useContext(reservacionContext);
  const {agregarReservacion } = reservacionesContext;

  const [startDate, setStartDate] = useState(new Date());
  const[error, guardarError] = useState(false)
  const[estado, guardarEstado] = useState('Agendar')


  //state para reservacion
  const [reservacion, guardarReservacion] = useState({
    nombre: '',
    correo: '',
    comentario: '',
    telefono: '',
    personas: '',
    hora:'',
    fecha:''
  });
  const { nombre, correo, comentario, telefono, personas, hora, fecha } = reservacion;

  const onChangeReservacion= e => {
    guardarReservacion({
      ...reservacion,
      [e.target.name]: e.target.value
    })
  }

  //cuando el usuario envia una factura
  const onSubmitReservacion = e => {
    e.preventDefault();

    //validar el nombre
    if (nombre === ''|| correo === ''||comentario === ''||telefono === ''||personas === ''||hora === '') {
      guardarError(true);
      return;
    }

    

    //agregar al state
    reservacion.fecha = startDate
    agregarReservacion(reservacion);
    guardarEstado("Enviada")

    setTimeout(() =>{
      guardarEstado("Agendar")
    }, 5000)
    
    guardarError(false)

    send('service_o974apx', 'intento1', reservacion, 'user_AzkZ6oW545KUsTfsLoXOr')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });

    //Reiniciar el form
    guardarReservacion({
      nombre: '',
      correo: '',
      comentario: '',
      telefono: '',
      personas: '',
      hora:'',
      fecha:''
    })
   

  }

    return(
      
    <div class="modal fade" id="resevmodal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog custommodal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="heading">
              Agenda una reservacion
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="modalform">
               <div class="form-row">
                <div class="col">
                  <input id="wa_name" type="text" required="" class="form-control" placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeReservacion}
                  />
                </div>
                <div class="col">
                  <input id="wa_phone" type="text" required="" class="form-control" placeholder="Telefono"
                  name="telefono"
                  value={telefono}
                  onChange={onChangeReservacion}
                  />
                </div>
                <div class="col">
                  <input id="wa_email" type="text" required="" class="form-control" placeholder="Correo"
                  name="correo"
                  value={correo}
                  onChange={onChangeReservacion}
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <input id="wa_guest" type="text" required="" class="form-control" placeholder="# de personas"
                  name="personas"
                  value={personas}
                  onChange={onChangeReservacion}
                  />
                </div>
                <div class="col">
                <DatePicker  id="calendario" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div class="col">
                    <div class="form-group">
                    <select class="form-select" id="exampleSelect1"
                    name="hora"
                    value={hora}
                    onChange={onChangeReservacion}
                    >
                      <option>Horario:</option>
                      <option>12:00</option>
                      
                      <option>13:00</option>
                      
                      <option>14:00</option>
                      
                      <option>15:00</option>
                      
                      <option>16:00</option>
                      
                      <option>17:00</option>
                      
                      <option>18:00</option>
                      
                      <option>19:00</option>
                      
                      <option>20:00</option>
                      
                      <option>21:00</option>
                       
                      <option>22:00</option>
                      

                    
                      
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea rows="10" cols="50" required="" class="form-control" id="message-text"
                name="comentario"
                value={comentario}
                onChange={onChangeReservacion}
                placeholder="¿Celebras algo?"></textarea>
                {error? <p id="alerta" className="text-center">Todos los campos son obligatorios</p>: null}
    <div className="">
    <button class="btn-content mt-4 "  onClick={onSubmitReservacion} >
                    
                    {estado === "Agendar" ? <span>Agendar</span>: <span>Enviada</span>}
                  </button>    
    </div>
              </div>
              <div id="text-info"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Addreservacion;