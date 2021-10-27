import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext'



function Home(){

//Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuario, usuarioAutenticado} = authContext;

  useEffect(() =>{
    usuarioAutenticado();
  }, [])

    return(
       <div class="container-fluid mt-4 mb-3">
           <div class="row">
               <div class="col-sm-8">
               {usuario ? <h1>Bienvenido, {usuario.nombre}</h1> : null}

               </div>
               <div class="col-sm-4">

</div>
           </div>
           
       </div>
    )
}

export default Home;