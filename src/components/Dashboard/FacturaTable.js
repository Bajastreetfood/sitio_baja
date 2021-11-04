import React, {useContext} from 'react';

import facturaContext from '../../context/facturas/facturaContext';
import { useHistory } from "react-router-dom";


function FacturaTable({factura, i}){

    //Extraer restaurantes de state inicial
    const facturasContext = useContext(facturaContext);
    const { mensaje, facturas, obtenerFacturas, facturaActual, eliminarFactura, actualizarFactura } = facturasContext;
    let history = useHistory();
    

    const onClickEliminarFactura = e =>{
        eliminarFactura(factura._id)
    }

    const cambiarEstado = e =>{
      if(factura.estatus === 'pendiente'){
        factura.estatus = "realizada"
        actualizarFactura(factura);
      }
      else if(factura.estatus === 'realizada'){
        factura.estatus = "pendiente"
        actualizarFactura(factura);
      }
    }

    return(
        
        <tr>
      <th scope="row">{i+1}</th>
      <td>{factura.nombre}</td>
      <td>{factura.correo}</td>
      <td>{factura.telefono}</td>
      <td>{factura.rfc}</td>
      <td>
        {
        (new Date(factura.fecha).toLocaleDateString('en-GB'))
        
      
      }</td>
      <td>${factura.total}</td>
      <td onClick={cambiarEstado}><a href="javascript:void(0)" id="facturaEstatus">{factura.estatus}</a></td>
      <td className="d-flex justify-content-center">
<button type="button" class="btn btn-danger" onClick={onClickEliminarFactura}>Eliminar</button>

      </td>
    </tr>
    
    );
}

export default FacturaTable;