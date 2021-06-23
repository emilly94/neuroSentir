import React from 'react';

const Footer = () => {
  return(
    <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; Website 2021</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://www.instagram.com/neuro.sentir/" ><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://www.facebook.com/Neurosentir-102386804488452/?ref=page_internal"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="mailto:cristiane@neurosentir.com?subject=Ola%20again"><i class="far fa-envelope"></i></a>
                        <a class="btn btn-dark btn-social mx-2" rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=11957362956"><i class="fab fa-whatsapp"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
  );
}
export default Footer;