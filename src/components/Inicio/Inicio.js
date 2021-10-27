import React, { Fragment } from 'react';
import SliderRev from './SliderRev';
import NuevosPlatillos from './NuevosPlatillos'
import Menu from './Menu'
import Equipo from './Equipo'
import Mapa from './Mapa';
import Footer from './Footer';
import Recomendaciones from './Recomendaciones';
import Navbar from './Navbar';

function Inicio(){ 
    return(
        <Fragment>
        <Navbar/>
        <SliderRev/>
        <NuevosPlatillos/>
        <Recomendaciones />
        
        <Mapa/>
        <Footer />
        </Fragment>
    );

}

export default Inicio;