import React, {useReducer} from 'react';

import reservacionContext from './reservacionContext';
import reservacionReducer from './reservacionReducer';
import {FORMULARIO_RESERVACION} from '../../types';
import {OBTENER_RESERVACIONES} from '../../types';
import {AGREGAR_RESERVACION} from '../../types';
import {VALIDAR_FORMULARIO} from '../../types';
import {RESERVACION_ACTUAL} from '../../types';
import {ELIMINAR_RESERVACION} from '../../types';
import {RESERVACION_ERROR} from '../../types';
import {ACTUALIZAR_RESERVACION} from '../../types';



import clienteAxios from '../../config/axios';

const ReservacionState = props => {
    const initialState = {
        formulario : false,
        reservaciones:[],
        errorformulario: false,
        reservacion: null,
        mensaje: null  
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(reservacionReducer, initialState)

    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_RESERVACION
        })
    }

    //obtener los reservaciones
    const obtenerReservaciones = async () =>{
        try {
            const resultado = await clienteAxios.get('/api/reservaciones');

            dispatch({
                type: OBTENER_RESERVACIONES,
                payload: resultado.data.reservaciones
            })
        } catch (error) {
            //console.log(error)
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: RESERVACION_ERROR,
                payload: alerta
            })
        }
    }

    //Agregar nuevo reservacion
    const agregarReservacion = async reservacion => {

        try {
            const resultado = await clienteAxios.post('/api/reservaciones', reservacion);
            console.log(resultado);
            //Insertar el reservacion en el state
            dispatch({
                type: AGREGAR_RESERVACION,
                payload: resultado.data
            })
        } catch (error) {
            //console.log(error)
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: RESERVACION_ERROR,
                payload: alerta
            })
        }
    }

    //valida el formlario por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el reservacion que el usuario dio click 
    const reservacionActual = reservacion =>{
        dispatch({
            type: RESERVACION_ACTUAL,
            payload: reservacion
        })
    }
  
    //Elimina un reservacion
    const eliminarReservacion = async reservacionId=>{
       try {
           await clienteAxios.delete(`/api/reservaciones/${reservacionId}`);
        dispatch({
            type: ELIMINAR_RESERVACION,
            payload: reservacionId
        })
       } catch (error) {
           //console.log(error)
           const alerta = {
               msg: 'Hubo un error',
               categoria: 'alerta-error'
           }
           dispatch({
               type: RESERVACION_ERROR,
               payload: alerta
           })
       }
    }

    //Edita o modifica una reservacion
    const actualizarReservacion = async reservacion =>{
        console.log(reservacion);
       try {
           const resultado = await clienteAxios.put(`/api/reservaciones/${reservacion._id}`,reservacion);
           console.log(resultado)
        dispatch({
            type: ACTUALIZAR_RESERVACION,
            payload: resultado.data.reservacion
        })
       } catch (error) {
           console.log(error)
       }
    }

    return(
        <reservacionContext.Provider
            value={{
                formulario: state.formulario,
                reservaciones: state.reservaciones,
                errorformulario:state.errorformulario,
                reservacion: state.reservacion,
                mensaje: state.mensaje,
                actualizarReservacion,
                mostrarFormulario,
                obtenerReservaciones,
                agregarReservacion,
                mostrarError,
                reservacionActual,
                eliminarReservacion
            }}
        >
            {props.children}
        </reservacionContext.Provider>  
    )
}

export default ReservacionState;