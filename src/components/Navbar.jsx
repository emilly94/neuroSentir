import React from 'react';
import logo from "../assets/img/logo.png";

const Navbar = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
    <a class="navbar-brand" href="#page-top"><img src={logo} alt="..." /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li class="nav-item"><a class="nav-link" href="#services"><strong>Serviços</strong></a></li>
                <li class="nav-item"><a class="nav-link" href="#portfolio"><strong>Portfolio</strong></a></li>
                <li class="nav-item"><a class="nav-link" href="#about"><strong>Sobre</strong></a></li>
                <li class="nav-item"><a class="nav-link" href="#team"><strong>Psicologos</strong></a></li>
                {/*<li class="nav-item"><a class="nav-link" href="#contact"><strong>Contato</strong></a></li>*/}
            </ul>
        </div>
    </div>
</nav>
  );
}
export default Navbar;