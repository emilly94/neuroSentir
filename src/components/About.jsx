import React from "react";
import Img1 from "../assets/img/navbar-logo.svg";
import Img2 from "../assets/img/about/2.jpg";
import Img3 from "../assets/img/about/3.jpg";
import Img4 from "../assets/img/about/4.jpg";

const About = () => {
  return (
    <section class="page-section" id="about">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Sobre Neurosentir</h2>
          <h3 class="section-subheading text-muted">
            Clínica de Psicologia e Neuropsicologia.
          </h3>
        </div>
        <ul class="timeline">
          <li>
            <div class="timeline-image">
              <img class="rounded-circle img-fluid" src={Img1} alt="img1" />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="subheading">O que é avaliação Neuropsicologia</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  É a aplicação de testes que tem como finalidade avaliar as
                  funções mentais, por exemplo: atenção, memória,linguagem,
                  raciocínio, dentre outros. Além de avaliar todas essasfunções
                  cognitivas, mapeia também aspectos emocionais e da
                  personalidade.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <img class="rounded-circle img-fluid" src={Img2} alt="..." />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="subheading">Visão</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Acreditamos no acolhimento, onde nosso obetivo é oferecer um
                  espaço em potencial,através das Ciências humanas, delineando
                  caminhos para identificações de causas,com propostas
                  interventivas e terapeuticas...
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-image">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-hands fa-stack-1x fa-inverse"></i>
                </span>
              </div>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="subheading">Missão</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Nossa missão é acolher deforma eficiente e satisfatória, com
                  ética e respeito, visando o cuidado integral do ser humano na
                  sua diversidade,subjetividade e ambiente, de uma sociedade
                  baseada na equidade.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <img class="rounded-circle img-fluid" src={Img4} alt="..." />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="subheading">Valores</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  Temos como valores a ética como principio fundamental,
                  buscando de forma constante o aprimoramento tecnico
                  cientifico, como agente transformador de questões pessoais e
                  sociais...
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>
                Seja parte
                <br />
                Da nossa
                <br />
                Historia!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
