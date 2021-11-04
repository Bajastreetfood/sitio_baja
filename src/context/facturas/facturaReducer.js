import {FORMULARIO_FACTURA, ELIMINAR_FACTURA} from '../../types';
import {OBTENER_FACTURAS} from '../../types';
import {AGREGAR_FACTURA} from '../../types';
import {VALIDAR_FORMULARIO} from '../../types';
import {FACTURA_ACTUAL} from '../../types';
import {FACTURA_ERROR} from '../../types';
import {ACTUALIZAR_FACTURA} from '../../types';


export default (state,action) =>{
    switch(action.type){
        case FORMULARIO_FACTURA:
            return{
                ...state,
                formulario: true
            }
        case OBTENER_FACTURAS:
            console.log(action.payload)
            return{
                ...state,
                facturas: action.payload
            }
        case AGREGAR_FACTURA:
            return{
                ...state,
                facturas: [...state.facturas, action.payload],
                formulario: false,
                errorformulario: false
            }
            case VALIDAR_FORMULARIO:
                return{
                    ...state,
                    errorformulario: true
                }
            case FACTURA_ACTUAL:
                return{
                    ...state,
                    factura:action.payload
                }

                case ACTUALIZAR_FACTURA:
                    return{
                        ...state,
                        facturas: state.facturas.map(factura => console.log(factura)
                            ? action.payload
                            : factura)
                    }
                case ELIMINAR_FACTURA:
                    return{
                        ...state,
                        facturas: state.facturas.filter(factura => factura._id !== action.payload),
                        factura: null

                    }
                    case FACTURA_ERROR:
                        return{
                            ...state,
                            mensaje: action.payload
                        }
        default:
            return state;
    }
}