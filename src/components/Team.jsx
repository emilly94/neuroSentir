import React from 'react';
import Img1 from  "../assets/img/team/1.jpg";
import Img2 from "../assets/img/team/2.jpg";

const Team = () =>{
  return(
    <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Nosso time de psicólogos</h2>
                    <h3 class="section-subheading text-muted">Sintam-se acolhido!</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={Img2} alt="..." />
                            <h4>Alessandra Mara Morita</h4>
                            <p class="text-muted">Neuropsicóloga e Psicóloga</p>
                            <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://www.instagram.com/neuro.sentir/"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.google.com/"><i class="far fa-envelope"></i></a>
                            <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=11957362956"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={Img1} alt="..." />
                            <h4>Cristiane dos Santos</h4>
                            <p class="text-muted">Psicóloga e Pedagoga</p>
                            <a class="btn btn-dark btn-social mx-2"  rel="noreferrer" target="_blank" href="https://www.instagram.com/psicrisantos/"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://www.facebook.com/Psicrisantos"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/cristiane-santos-oliveira-265847127/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Quando é percebida em determinada pessoa alguma alteração de ordem neurológica, é importante chamar a atenção para o fato de que não só em casos de transtornos ou distúrbios, mas também quando um indivíduo convive com alguma desordem ocasionada por AVC, traumatismo craniano, situações de demência, entre outras.</p></div>
                </div>
            </div>
        </section>
  );
}
export default Team;