import React, {useReducer} from 'react';

import facturaContext from './facturaContext';
import facturaReducer from './facturaReducer';
import {FORMULARIO_FACTURA} from '../../types';
import {OBTENER_FACTURAS} from '../../types';
import {AGREGAR_FACTURA} from '../../types';
import {VALIDAR_FORMULARIO} from '../../types';
import {FACTURA_ACTUAL} from '../../types';
import {ELIMINAR_FACTURA} from '../../types';
import {FACTURA_ERROR} from '../../types';



import clienteAxios from '../../config/axios';

const FacturaState = props => {
    const initialState = {
        formulario : false,
        facturas:[],
        errorformulario: false,
        factura: null,
        mensaje: null  
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(facturaReducer, initialState)

    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_FACTURA
        })
    }

    //obtener los facturas
    const obtenerFacturas = async () =>{
        try {
            const resultado = await clienteAxios.get('/api/facturas');

            dispatch({
                type: OBTENER_FACTURAS,
                payload: resultado.data.facturas
            })
        } catch (error) {
            //console.log(error)
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: FACTURA_ERROR,
                payload: alerta
            })
        }
    }

    //Agregar nuevo factura
    const agregarFactura = async factura => {

        try {
            const resultado = await clienteAxios.post('/api/facturas', factura);
            console.log(resultado);
            //Insertar el factura en el state
            dispatch({
                type: AGREGAR_FACTURA,
                payload: resultado.data
            })
        } catch (error) {
            //console.log(error)
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: FACTURA_ERROR,
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

    //Selecciona el factura que el usuario dio click 
    const facturaActual = factura =>{
        dispatch({
            type: FACTURA_ACTUAL,
            payload: factura
        })
    }
  
    //Elimina un factura
    const eliminarFactura = async restauranteId=>{
       try {
           await clienteAxios.delete(`/api/facturas/${restauranteId}`);
        dispatch({
            type: ELIMINAR_FACTURA,
            payload: restauranteId
        })
       } catch (error) {
           //console.log(error)
           const alerta = {
               msg: 'Hubo un error',
               categoria: 'alerta-error'
           }
           dispatch({
               type: FACTURA_ERROR,
               payload: alerta
           })
       }
    }

    return(
        <facturaContext.Provider
            value={{
                formulario: state.formulario,
                facturas: state.facturas,
                errorformulario:state.errorformulario,
                factura: state.factura,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerFacturas,
                agregarFactura,
                mostrarError,
                facturaActual,
                eliminarFactura
            }}
        >
            {props.children}
        </facturaContext.Provider>  
    )
}

export default FacturaState;