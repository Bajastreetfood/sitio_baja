import React, {Fragment, useState, useContext, useEffect} from 'react';
import Footer from './Footer';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './Navbar';
import facturaContext from '../../context/facturas/facturaContext';
import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';


function Factura(){

  useEffect(() => {
    if(localStorage.getItem('bandera') == 1)
    {
      window.location.reload();
      localStorage.setItem('bandera', '0');
    }
  }, [])

  //obtener el state del formulario
  const facturasContext = useContext(facturaContext);
  const {agregarFactura } = facturasContext;

  
  const [startDate, setStartDate] = useState(new Date());
  const[error, guardarError] = useState(false)
  const[estado, guardarEstado] = useState('Pedir Factura')

  //state para restaurante
  const [factura, guardarFactura] = useState({
    nombre: '',
    correo: '',
    rfc: '',
    estatus: 'pendiente',
    telefono: '',
    total: '',
    fecha:''
  });

  //extraer de factura
  const { nombre, correo, rfc, estatus, telefono, total, fecha } = factura;

  //Lee los contenidos del input
  const onChangeFactura = e => {
    guardarFactura({
      ...factura,
      [e.target.name]: e.target.value
    })
  }
  //cuando el usuario envia una factura
  const onSubmitFactura = e => {
    e.preventDefault();

    //validar el nombre
    if (nombre === ''|| correo === ''||rfc === ''||telefono === ''||total === '') {
      guardarError(true);
      return;
    }

    //agregar al state
    factura.fecha = startDate
    agregarFactura(factura);

    send('service_o974apx', 'intento2', factura, 'user_AzkZ6oW545KUsTfsLoXOr')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });

    //Reiniciar el form
    guardarFactura({
      nombre: '',
      correo: '',
      rfc: '',
      estatus: 'pendiente',
      telefono: '',
      total: '',
      fecha:''
    })
    guardarEstado("Enviada")

    setTimeout(() =>{
      guardarEstado("Pedir Factura")
    }, 5000)
  }

    return(
        <Fragment>
          <Navbar/>
        <section class="breadcumb" aria-label="breadcumb"id="Factura">
          <div class="container-fluid">
           <div class="row">
            <div class="col-12">
              <div class="main">
                <div class="bread">
                  <div class="img-icon">
                     <img src="img/breadcumb-icon.png" alt="#"/>
                  </div>
                  <div class="bread-title">Factura</div>
                  
                </div>
              </div>
            </div>
           </div>
         </div>
        </section>
        <section aria-label="section" id="SeccionFactura" class=" s-top">
 <div class="container-fluid">
   <div class="row p-3-vh">
    <div class="col-12 text-center">
      <div class="main-content">
        <div class="heading">
          <div class="title">
            Pide tu factura a Baja Streetfood
          </div>
        </div>
        <div class="desc m-auto">
        Ponemos a la disposición de nuestros clientes el siguiente formulario para solicitar la factura de su consumo. Agradecemos tu visita.
       </div>
      </div>
    </div>
   </div>
 </div> 
</section>

        <div id="factura" className="container-fluid">
          <div className="row">
            <div className="col-sm-2">

            </div>
         <div className="col-sm-8">
              
            
        
        <form >
  <fieldset>
  

  <div class="form-group ">
      <div >
      <label for="exampleInputPassword1" class="form-label mt-4 mb-4">¿Cuando nos visitaste?</label>
      <br/>
      <DatePicker locale="es-MX"  selected={startDate} onChange={(date) => setStartDate(date)} />

      </div>
     
    </div>
   
  <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Nombre Completo:</label>
      <input type="text" class="form-control" id="exampleInputEmail1"
      name="nombre"
      value={nombre}
      onChange={onChangeFactura}
      placeholder="Nombre Completo"
      required/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Correo Electronico</label>
      <input type="email" class="form-control" id="exampleInputEmail1" 
      name="correo"
      value={correo}
      onChange={onChangeFactura}
      placeholder="Correo Electronico"
      required/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">RFC:</label>
      <input type="text" class="form-control" id="exampleInputEmail1"
      name="rfc"
      value={rfc}
      onChange={onChangeFactura}
      placeholder="RFC"
      required/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Telefono:</label>
      <input type="text" class="form-control" id="exampleInputEmail1"
      name="telefono"
      value={telefono}
      onChange={onChangeFactura}
      placeholder="Telefono"
      required/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Monto $:</label>
      <input type="text" class="form-control" id="exampleInputEmail1"
      name="total"
      value={total}
      onChange={onChangeFactura}
      placeholder="$"
      required/>
    </div>
    
    {error? <p id="alerta">Todos los campos son obligatorios</p>: null}
    <div className="">
    <button class="btn-content mt-4 "  onClick={onSubmitFactura} >
    {estado === "Pedir Factura" ? <span>Pedir Factura</span>: <span>Enviada</span>}
                    
                  </button>    
    </div>
    <br />
    <br/>
  </fieldset>
</form>
</div>
<div className="col-sm-2">

</div>
</div>
</div>

        <Footer/>
        </Fragment>
    );
}

export default Factura;