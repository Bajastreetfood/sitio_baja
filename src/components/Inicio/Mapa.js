import React from 'react';

function Mapa(){

    const mystyle = {
        border:0,
        width:"100%",
        height:"450px"
      };
    return(
        
        <iframe style={mystyle} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6427991525597!2d-99.17231018461267!3d19.4278336458663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff4a4e1a716b%3A0xa7d72041116816c8!2sBaja%20Streetfood!5e0!3m2!1ses!2smx!4v1622692792281!5m2!1ses!2smx"    allowfullscreen="" loading="lazy"></iframe>
    );
}

export default Mapa;