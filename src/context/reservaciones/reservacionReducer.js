import {FORMULARIO_RESERVACION, ELIMINAR_RESERVACION} from '../../types';
import {OBTENER_RESERVACIONES} from '../../types';
import {AGREGAR_RESERVACION} from '../../types';
import {VALIDAR_FORMULARIO} from '../../types';
import {RESERVACION_ACTUAL} from '../../types';
import {RESERVACION_ERROR} from '../../types';
import {ACTUALIZAR_RESERVACION} from '../../types';

export default (state,action) =>{
    switch(action.type){
        case FORMULARIO_RESERVACION:
            return{
                ...state,
                formulario: true
            }
        case OBTENER_RESERVACIONES:
            console.log(action.payload)
            return{
                ...state,
                reservaciones: action.payload
            }
        case AGREGAR_RESERVACION:
            return{
                ...state,
                reservaciones: [...state.reservaciones, action.payload],
                formulario: false,
                errorformulario: false
            }
            case VALIDAR_FORMULARIO:
                return{
                    ...state,
                    errorformulario: true
                }
            case RESERVACION_ACTUAL:
                return{
                    ...state,
                    reservacion: action.payload
                }
                case ACTUALIZAR_RESERVACION:
            return{
                ...state,
                reservaciones: state.reservaciones.map(reservacion => reservacion._id === action.payload._id 
                    ? action.payload
                    : reservacion)
            }
                case ELIMINAR_RESERVACION:
                    return{
                        ...state,
                        reservaciones: state.reservaciones.filter(reservacion => reservacion._id !== action.payload),
                        reservacion: null

                    }
                    case RESERVACION_ERROR:
                        return{
                            ...state,
                            mensaje: action.payload
                        }
        default:
            return state;
    }
}