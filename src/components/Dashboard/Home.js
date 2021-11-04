import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext'
import GoogleAnalyticsImagen from '../../assets/Google-Analytics-Logo.png'
import FacebookImagen from '../../assets/Facebook.png'
import ElBajaImagen from '../../assets/ElBajaNegro.png'


function Home(){

//Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuario, usuarioAutenticado} = authContext;

  useEffect(() =>{
    usuarioAutenticado();
  }, [])

    return(
       <div class="container-fluid mt-4 mb-3 ">
         <div className="row">
           <div className="col-sm-8">
           {usuario ? <h1>Bienvenido, {usuario.nombre}</h1> : null}
           </div>
           <div className="col-sm-4">
           </div>
         </div>
           <div class="row">
           
               <div class="col-sm-4 mt-5">
               
                    <div className="card text-center" id="tarjetaInicio">
                    <div className="text-center">
                    <img className="card-img-top center-block" id="imagenDashboardInicio" src={GoogleAnalyticsImagen} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Google Analytics</h5>
                      <p className="card-text mt-4">Revisa las estadisticas de la gente que entra a tu sitio web.</p>
                      <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" className="btn btn-primary mt-4">Entrar</a>
                    </div>
                  </div>
                  
               </div>
               <div class="col-sm-4 mt-5">
               
               <div className="card text-center" id="tarjetaInicio">
                 <div className="text-center">
                    <img className=" text-center" id="imagenDashboardInicio2" src={FacebookImagen} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Facebook</h5>
                      <p className="card-text mt-4">Revisa la pagina de facebook del restaurante.</p>
                      <a href="https://www.facebook.com/bajastreetfood"  target="_blank"  className="btn btn-primary mt-4">Entrar</a>
                    </div>
                  </div>
</div>

<div class="col-sm-4 mt-5">
               
               <div className="card text-center" id="tarjetaInicio">
                 <div className="text-center">
                    <img className=" text-center" id="imagenDashboardInicio2" src={ElBajaImagen} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Regresar al inicio</h5>
                      <p className="card-text mt-4">Sal del la parte administrativa de la webapp.</p>
                      <a href="/" className="btn btn-primary mt-4">Entrar</a>
                    </div>
                  </div>
</div>
           </div>
           
       </div>
    )
}

export default Home;