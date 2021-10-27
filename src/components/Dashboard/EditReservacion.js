import React, {useState, useContext, useEffect} from 'react';
import reservacionContext from '../../context/reservaciones/reservacionContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditReservacion(){
    
   
    const reservacionesContext = useContext(reservacionContext);
    const {reservacion, actualizarReservacion } = reservacionesContext;

   //Effect que detecta si hay una tarea seleccionada
   useEffect(() =>{
    if(reservacion!== null){
        guardarReservacionAux(reservacion)
    }else{
        guardarReservacionAux({
          nombre: '',
          correo: '',
          comentario: '',
          telefono: '',
          personas: '',
          hora:'',
          fecha:''
        })
    }
}, [reservacion]); //para que este revisando la tarea seleccionada

    const [startDate, setStartDate] = useState(new Date());
    const[error, guardarError] = useState(false)
    const[estado, guardarEstado] = useState('Editar')

    //state para reservacion
  const [reservacionAux, guardarReservacionAux] = useState({
    nombre: '',
    correo: '',
    comentario: '',
    telefono: '',
    personas: '',
    hora:'',
    fecha:''
  });

  const { nombre, correo, comentario, telefono, personas, hora, fecha} = reservacionAux;



  const onChangeReservacionAux= e => {
    guardarReservacionAux({
      ...reservacionAux,
      [e.target.name]: e.target.value
    })
  }

  //cuando el usuario envia una factura
  const onClickEditarReservacion = e => {
    e.preventDefault();

    //validar el nombre
    if (nombre === ''|| correo === ''||comentario === ''||telefono === ''||personas === ''||hora === '') {
      guardarError(true);
      return;
    }

    //agregar al state
    reservacionAux.fecha = startDate;
    reservacion.nombre = nombre;
    reservacion.correo = correo;
    reservacion.comentario = comentario;
    reservacion.personas = personas;
    reservacion.hora = hora;
    reservacion.fecha = reservacionAux.fecha;

    actualizarReservacion(reservacion);
    guardarEstado("Actualizada")

    setTimeout(() =>{
      guardarEstado("Editar")
    }, 5000)
    
    guardarError(false)

    guardarReservacionAux({
        nombre: '',
        correo: '',
        comentario: '',
        telefono: '',
        personas: '',
        hora:'',
        fecha:''
      });
  }

    return(
        <div class="modal fade" id="resevmodal2"  role="dialog" aria-hidden="true">
        <div class="modal-dialog custommodal" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div class="heading">
                Editar una reservacion
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
                    onChange={onChangeReservacionAux}
                    />
                  </div>
                  <div class="col">
                    <input id="wa_phone" type="text" required="" class="form-control" placeholder="Telefono"
                    name="telefono"
                    value={telefono}
                    onChange={onChangeReservacionAux}
                    />
                  </div>
                  <div class="col">
                    <input id="wa_email" type="text" required="" class="form-control" placeholder="Correo"
                    name="correo"
                    value={correo}
                    onChange={onChangeReservacionAux}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <input id="wa_guest" type="text" required="" class="form-control" placeholder="# de personas"
                    name="personas"
                    value={personas}
                    onChange={onChangeReservacionAux}
                    />
                  </div>
                  <div class="col">
                  <DatePicker id="calendario" selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
                  <div class="col">
                      <div class="form-group">
                      <select class="form-select" id="exampleSelect1"
                      name="hora"
                      value={hora}
                      onChange={onChangeReservacionAux}
                      >
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
                  onChange={onChangeReservacionAux}
                  placeholder="¿Celebras algo?"></textarea>
                  {error? <p id="alerta" className="text-center">Todos los campos son obligatorios</p>: null}
      <div className="">
      <button class="btn-content mt-4 "  onClick={onClickEditarReservacion} >
                      
                      {estado === "Editar" ? <span>Editar</span>: <span>Actualizada</span>}
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

export default EditReservacion;