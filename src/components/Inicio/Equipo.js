import React from 'react';

function Equipo(){
    return(
<section id="Equipo" aria-label="section" class="s-img s-bot" style={{backgroundImage: `url('img/bgfoodicon.png')`}}>
 <div class="container-fluid">
   <div class="row p-3-vh">

    <div class="col-12 text-center">
      <div class="main-content">
        <div class="heading">
          <div class="title l-1">
            Nuestro Equipo
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <div id="owl-team" class="owl-carousel owl-theme">

        <a class="item" href="#">
          <div class="listteam">
            <div class="bgimg">
              <img src="img/team/1.jpg" alt="team"/>
            </div>
            <div class="detail">
              <div class="listdetail">
                <div class="name">Cocina</div>
                <div class="jobtitle">South Chef</div>
              </div>
            </div>
          </div>
        </a>

        <a class="item" href="#">
          <div class="listteam">
            <div class="bgimg">
              <img src="img/team/2.jpg" alt="team"/>
            </div>
            <div class="detail">
              <div class="listdetail">
                <div class="name">Barra</div>
                <div class="jobtitle">North Chef</div>
              </div>
            </div>
          </div>
        </a>

        <a class="item" href="#">
          <div class="listteam">
            <div class="bgimg">
              <img src="img/team/3.jpg" alt="team"/>
            </div>
            <div class="detail">
              <div class="listdetail">
                <div class="name">Staff</div>
                <div class="jobtitle">CEO D'bento</div>
              </div>
            </div>
          </div>
        </a>


      </div>
    </div>



   </div>
 </div>
</section>

    );
}

export default Equipo;