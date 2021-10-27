import React, {useContext} from 'react';

import facturaContext from '../../context/facturas/facturaContext';


function FacturaTable({factura, i}){

    //Extraer restaurantes de state inicial
    const facturasContext = useContext(facturaContext);
    const { mensaje, facturas, obtenerFacturas, facturaActual, eliminarFactura } = facturasContext;

    const onClickEliminarFactura = e =>{
        eliminarFactura(factura._id)
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
      <td>{factura.estatus}</td>
      <td className="d-flex justify-content-center">
      <button type="button" class="btn btn-primary">Modificar</button>&nbsp;
<button type="button" class="btn btn-danger" onClick={onClickEliminarFactura}>Eliminar</button>

      </td>
    </tr>
    
    );
}

export default FacturaTable;