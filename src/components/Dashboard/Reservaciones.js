import React, { Fragment, useEffect, useContext, useState } from 'react';
import CardReservaciones from './CardReservaciones';
import reservacionContext from '../../context/reservaciones/reservacionContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function Reservaciones(){

    //Extraer restaurantes de state inicial
    const reservacionesContext = useContext(reservacionContext);
    const { mensaje, reservaciones, obtenerReservaciones, eliminarReservacion, reservacionActual } = reservacionesContext;

    const [startDate, setStartDate] = useState(new Date());
    const [modalShow2, setModalShow2] = useState(false);
    
    

    useEffect(() => {
      obtenerReservaciones();
  }, []); //para que corra solo una vez


  const onClickEliminarReservacion = reservacion =>{
    eliminarReservacion(reservacion._id)
}


    return(
        <Fragment>
            <div id="reservacionesDashboard" className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-9">

                    </div>
                    <div className="col-md-2">
                        <span>
                    <DatePicker id="calendario" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </span>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <div className="row">
            {reservaciones.map(reservacion => (     
                
                  <CardReservaciones
                  reservacion = {reservacion}
                  startDate = {startDate}
                  />

                 
               

            ))}
            </div>
        </div>
        </Fragment>
    );
}

export default Reservaciones;