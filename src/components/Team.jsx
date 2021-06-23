import React from 'react';
import Img1 from  "../assets/img/team/1.jpg";
import Img2 from "../assets/img/team/2.jpg";

const Team = () =>{
  return(
    <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Nosso time de psicologos</h2>
                    <h3 class="section-subheading text-muted">Sinta-se acolhido.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={Img1} alt="..." />
                            <h4>Parveen Anand</h4>
                            <p class="text-muted">Lead Designer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={Img2} alt="..." />
                            <h4>Cristiane dos Santos</h4>
                            <p class="text-muted">Psicóloga e Pedagoga</p>
                            <a class="btn btn-dark btn-social mx-2"  rel="noreferrer" target="_blank" href="https://www.instagram.com/psicrisantos/"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://www.facebook.com/Psicrisantos"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/cristiane-santos-oliveira-265847127/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
  );
}
export default Team;