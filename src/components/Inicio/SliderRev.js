import React from 'react';
import Foto1 from '../../assets/IMG/carrusel/1.png'
import Foto2 from '../../assets/IMG/carrusel/2.png'
import Foto3 from '../../assets/IMG/carrusel/3.png'

function SliderRev() {
    return(
<section id="Inicio" class="no-top no-bottom" aria-label="section-slider">
<div class="fullwidthbanner-container">
<div id="revolution-slider-full">
              <ul>

                  <li data-transition="fade" data-slotamount="10" data-masterspeed="1200" data-delay="5000">
                      
                      <img src={Foto1} alt="" data-start="0" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-bgfit="100" data-bgfitend="100" data-bgpositionend="center center"/>
                      <div class="tp-caption slide-big-heading  sft"
                          data-x="center"
                          data-y="270"
                          data-speed="800"
                          data-start="400"
                          data-easing="easeInOutExpo"
                          data-endspeed="450">
                           <span id="tituloslider">
                           Caliente y listo para servir:
                               </span>
                      </div>

                      <div class="tp-caption slide-sub-heading sft"
                          data-x="center"
                          data-y="350"
                          data-speed="1000"
                data-start="800"
                data-easing="easeOutExpo"
                          data-endspeed="400">
                          <span id="subtituloslider">Variedad de platillos en nuestro menú listos para que disfrutes de lo mejor en mariscos y carnes.</span>
                      </div>


                  </li>
                  
                  <li data-transition="fade" data-slotamount="10" data-masterspeed="1200" data-delay="5000">
                      
                      <img src={Foto2} alt="" data-start="0" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-bgfit="100" data-bgfitend="100" data-bgpositionend="center center"/>
                      <div class="tp-caption slide-big-heading sft"
                          data-x="center"
                          data-y="270"
                          data-speed="800"
                          data-start="400"
                          data-easing="easeInOutExpo"
                          data-endspeed="450">
                          <span id="tituloslider">La mejor experiencia en degustación:</span>
                      </div>

                      <div class="tp-caption slide-sub-heading sft"
                          data-x="center"
                          data-y="350"
                          data-speed="1000"
                data-start="800"
                data-easing="easeOutExpo"
                          data-endspeed="400">
                          <span id="subtituloslider">Deleitate con el sabor y sazón de la cocina Baja.</span>
                      </div>

                      

                  </li>

                  <li data-transition="fade" data-slotamount="10" data-masterspeed="1200" data-delay="5000">
                      
                      <img src={Foto3} alt="" data-start="0" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-bgfit="100" data-bgfitend="100" data-bgpositionend="center center"/>
                      <div class="tp-caption slide-big-heading sft"
                          data-x="center"
                          data-y="270"
                          data-speed="800"
                          data-start="400"
                          data-easing="easeInOutExpo"
                          data-endspeed="450">
                           <span id="tituloslider">Platillos y experiencia de calidad:</span>
                      </div>

                      <div class="tp-caption slide-sub-heading sft"
                          data-x="center"
                          data-y="350"
                          data-speed="1000"
                data-start="800"
                data-easing="easeOutExpo"
                          data-endspeed="400">
                         <span id="subtituloslider">Cuidamos y mantenemos los más altos estándares de calidad para tu visita.</span> 
                      </div>

                      

                  </li>
                 
              </ul>
              <div class="tp-bannertimer hide"></div>
</div>
</div>
</section>

    );

}

export default SliderRev;