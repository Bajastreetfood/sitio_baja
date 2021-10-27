import React, {useContext, useState} from 'react'
import reservacionContext from '../../context/reservaciones/reservacionContext';

import EditReservacion from './EditReservacion';


function CardReservaciones({reservacion, startDate}){

  const [modalShow2, setModalShow2] = useState(false);

  //Extraer restaurantes de state inicial
  const reservacionesContext = useContext(reservacionContext);
  const { mensaje, reservaciones, reservacionActual, obtenerReservaciones, eliminarReservacion } = reservacionesContext;


  var aux = (new Date(reservacion.fecha).toLocaleDateString('en-US'))
  var aux2 = (new Date(startDate).toLocaleDateString('en-US'))
  var bandera = false

  if(aux === aux2){
    bandera = true
  }
  const onClickEliminarReservacion = e =>{
    eliminarReservacion(reservacion._id)
}



if(bandera){

  return(

      
    <div className="col-sm-3 mt-3" key={reservacion._id}> 
                    <div class="card">
                <div class="card-body">
                <h4 class="card-title">{reservacion.nombre}</h4>
                <h6 class="card-subtitle mb-2 text-muted">{(new Date(reservacion.fecha).toLocaleDateString('en-GB'))} {reservacion.hora}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{reservacion.personas} personas</h6>
                <h6 class="card-subtitle mb-2 text-muted">{reservacion.correo} {reservacion.telefono}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{reservacion.comentario}</h6>
                    <span className="d-flex justify-content-left mt-4"><button
                    data-toggle="modal" data-target="#resevmodal2"
                    onClick={() => reservacionActual(reservacion)}
                    type="button" class="btn btn-primary"
                    >Modificar</button>&nbsp;
                    <EditReservacion
                    
                    ></EditReservacion>

                    <button type="button" class="btn btn-danger" onClick={() => onClickEliminarReservacion(reservacion)}>Eliminar</button></span>
                </div>
                </div>
                </div>
  );

}
else{
  return( <span></span>)
 
}

    
}

export default CardReservaciones;