import React from 'react';

const Services = () =>{
  return(
    <section class="page-section" id="services">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Serviços</h2>
            <h3 class="section-subheading text-muted">Atendimento de Segunda a Sabado.</h3>
        </div>
        <div class="row text-center">
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-signal fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Online</h4>
                <p class="text-muted">O nosso atendimento online é feito por agendamento fazemos uma dinamica para se sentir a vontade para conversar conosco.</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-people-arrows fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Presencial</h4>
                <p class="text-muted">O nosso atendimento presencial é feito por agendamento e respeitamos o distanciamente social informado pelo ministerio da saude.</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-restroom fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Infantil</h4>
                <p class="text-muted">Atendimento alvo para crianças de 06-12 anos. Agende a sua consulta conosco e venha participar dessa incrivel ajuda psicologica.</p>
            </div>
        </div>
    </div>
</section>
  );
}

export default Services;