import React, { Fragment, useState, useEffect, useContext } from 'react';

import facturaContext from '../../context/facturas/facturaContext';
import FacturaTable from './FacturaTable';
import DatePicker from "react-datepicker";
import Pagination from './Pagination';
import "react-datepicker/dist/react-datepicker.css";

function Facturas(){

      //Extraer restaurantes de state inicial
      const facturasContext = useContext(facturaContext);
      const { mensaje, facturas, obtenerFacturas, facturaActual, eliminarFactura } = facturasContext;
      const [facturasOrdenadas, guardarFacturasOrdenadas] = useState([])
      const [startDate, setStartDate] = useState(new Date());
      const [currentPage, setCurrentPage] = useState(1);
      const [postPerPage, setPostPerPage] = useState(7)

      useEffect(() => {
        obtenerFacturas();
        ordenarFecha()
    }, []); //para que corra solo una vez

    const ordenarFecha = e =>{
      console.log(facturas)
     
      let ordenarFacturas = facturas.sort((a,b) => a.fecha.split('/').reverse().join().localeCompare(b.fecha.split('/').reverse().join()))
      guardarFacturasOrdenadas(ordenarFacturas)

    }
/*
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = facturas.slice(indexOfFirstPost, indexOfLastPost)
*/
    return(
        <Fragment>


        <div id="facturasDashboard" className="container-fluid mt-4">
                
        <table class="table table-hover text-center " id="facturas">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Telefono</th>
      <th scope="col">RFC</th>
      <th scope="col">Fecha</th>
      <th scope="col">Total</th>
      <th scope="col">Estatus</th>
      <th scope="col">Herramientas</th>
    </tr>
  </thead>
  <tbody id="tbody">
   
    {facturas.map((factura,i) => (
      <FacturaTable
      startDate = {startDate}
        factura = {factura}
        i = {i}
      />
    ))}
   {/* <Pagination postPerPage={postPerPage} totalPost={facturas.length} />*/}
    
  </tbody>
</table>
</div>
</Fragment>
    )
}

export default Facturas;