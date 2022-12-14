import React from "react";
import { link } from 'react-router-dom';

export default function Home(){
   
        return(
            <React.Fragment>
        <div>
            
            <nav id="navbarBinar" class="navbar navbar-expand-lg static-top">
            <div class="container">
            <a class="square" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
            </button>          
            <div class="collapse navbar-collapse" id="navbarsSupportedContent">
                <ul class="navbar-nav mx-auto w-100 justify-content-end">                   
                    <li class="nav-item">
                        <a class="nav-link" href="#Ourservice">Our Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Whyus">Why Us</a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Testimonial">Testimonial</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Faq">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <button class="btn btn-sm btn-success">Register</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>    
    </nav>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-label="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">BCR</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav mx-auto w-100 justify-content-end">                   
                <li class="nav-item">
                    <a class="nav-link" href="#Ourservice">Our Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Whyus">Why Us</a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Testimonial">Testimonial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Faq">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <button class="btn btn-sm btn-success">Register</button>
                    </a>
                </li>
            </ul>
        </div>
    </div>


    <div data-bs-spy="scroll" data-bs-target="#navbarBinar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        
      <div class="hero container-fluid">
        <div class="row">
            <div class="col-lg-6 col-12">
                <h1 class="text-kiri-top text-left pt-5 ml-5">Sewa & Rental Mobil Terbaik di kawasan Purbalingga</h1>
                <p class="text-kiri ml-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <button class="text-kiri mt-2 ml-5 btn btn-md btn-success zoom" > <link to="Mulai" >Mulai Sewa Mobil</link> Mulai Sewa Mobil</button>
            </div>
            <div class="col-lg-6 col-12">
                <img src="img_car.svg" class="img-hero"  className="cars" alt="car-image" />
            </div>
        </div>
      </div>
   
    <div id="Ourservice" class="our-service container">
        <div class="row">
            <div data-aos="fade-right" class="col-lg-6 col-12">
                <img class="img-service" src="assets/img_service.svg" alt="Iamge-service"/>
            </div>
            <div data-aos="fade-left" class="col-lg-6 col-12">
                <h2 class="header-text-service">Best Car Rental for any kind of trip in Purbalingga!</h2>
                <p>Sewa mobil di Purbalingga bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ol class="list-group">
                    <li class="list-group-item border-0">
                        <p><img src="assets/check.svg"></img>&nbsp Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    </li>
                    <li class="list-group-item border-0">
                        <p><img src="assets/check.svg"></img>&nbsp Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    </li>
                    <li class="list-group-item border-0">
                        <p><img src="assets/check.svg"></img>&nbsp Sewa Mobil Jangka Panjang Bulanan</p>
                    </li>
                    <li class="list-group-item border-0">
                        <p><img src="assets/check.svg"></img>&nbsp Gratis Antar - Jemput Mobil di Bandara</p>
                    </li>
                    <li class="list-group-item border-0">
                        <p><img src="assets/check.svg"></img>&nbsp Layanan Airport Transfer / Drop In Out</p>
                    </li>
                </ol>
            </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" id="Whyus" class="container">
        <div class="row px-5 text-why-us">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div class="container-card row g-4 px-5">
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-us-card mx-auto card">
                    <div class="card-body">
                      <img src="assets/thumb.svg"></img>
                      <p class="card-subtitle pt-3">Mobil Lengkap</p>
                      <p class="text-card pt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-us-card mx-auto card">
                    <div class="card-body">
                        <img src="assets/tag.svg"></img>
                        <p class="card-subtitle pt-3">Harga Murah</p>
                        <p class="text-card pt-3">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-us-card mx-auto card">
                    <div class="card-body">
                        <img src="assets/clock.svg"></img>
                        <p class="card-subtitle pt-3">Layanan 24 Jam</p>
                        <p class="text-card pt-3">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-us-card mx-auto card">
                    <div class="card-body">
                        <img src="assets/profesional.svg"></img>
                        <p class="card-subtitle pt-3">Sopir Profesional</p>
                        <p class="text-card pt-3">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div data-aos="fade-up" id="Testimonial" class="container">
        <div class="row text-center pb-3 pt-5">
            <h1>Testimonial</h1>
        </div>
        <div class="row text-center pb-5">
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div class="container pb-5">
        <div class="owl-carousel owl-theme">
            <div>
                <div class="card card-testimoni mt-4 mx-auto border-0">
                    <div class="card-body">
                        <div class="row mt-3">
                            <div class="col-lg-3 col-12 mt-4">
                                <img class="testi-img" src="assets/foto.jpeg"/>
                            </div>
                            <div class="col-lg-8 col-12 px-5">
                                <h6>??? ??? ??? ??? ???</h6>
                                <p class="card-text">???Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod???</p>
                                <h5>John Dee 30, Bromo</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card card-testimoni mt-4 mx-auto border-0">
                    <div class="card-body">
                        <div class="row mt-3">
                            <div class="col-lg-3 col-12 mt-4">
                                <img class="testi-img" src="assets/foto.jpeg"/>
                            </div>
                            <div class="col-lg-8 col-12 px-5">
                                <h6>??? ??? ??? ??? ???</h6>
                                <p class="card-text">???Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod???</p>
                                <h5>John Dee 31, Bromo</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card card-testimoni mt-4 mx-auto border-0">
                    <div class="card-body">
                        <div class="row mt-3">
                            <div class="col-lg-3 col-12 mt-4">
                                <img class="testi-img" src="assets/foto.jpeg"/>
                            </div>
                            <div class="col-lg-8 col-12 px-5">
                                <h6>??? ??? ??? ??? ???</h6>
                                <p class="card-text">???Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod???</p>
                                <h5>John Dee 32, Bromo</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card card-testimoni mt-4 mx-auto border-0">
                    <div class="card-body">
                        <div class="row mt-3">
                            <div class="col-lg-3 col-12 mt-4">
                                <img class="testi-img" src="assets/foto.jpeg"/>
                            </div>
                            <div class="col-lg-8 col-12 px-5">
                                <h6>??? ??? ??? ??? ???</h6>
                                <p class="card-text">???Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod???</p>
                                <h5>John Dee 33, Bromo</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" class="row sewa-mobil">
            <div class="card big-card mx-auto border-0">
                <div class="card-body text-center">
                   <h1 class="header-card">Sewa Mobil di Purbalingga Sekarang!</h1>
                   <p class="text-big-card px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed auctor ante, at mattis ligula. Cras feugiat luctus purus in ullamcorper. Donec porta lacus at risus scelerisque eleifend.</p>
                   <div class="mt-5">
                        <button type="button" class="btn btn-success">Mulai Sewa Mobil</button>
                   </div>
                </div>
              </div>
        </div>
    </div>

    <div id="Faq" class="container">
        <div class="row container-accordion px-5 pt-5">
            <div data-aos="fade-right" class="col-lg-6 col-12">
                <div class="text-faq">
                <h1 class="pb-3">Frequently Asked Question</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            </div>
            <div data-aos="fade-left" class="col-lg-6 col-12">
                <div class="container right-accordion">
                    <div class="accordion" id="myAccordion">
                        <div class="accordion-item accord-faq">
                            <h2 class="accordion-header" id="headingOne">
                                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"  data-bs-target="#collapseOne" aria-controls="collapseOne"   >Apa saja syarat yang dibutuhkan?</button>									
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accord-faq mt-4 border-top">
                            <h2 class="accordion-header" id="headingTwo">
                                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Berapa hari minimal sewa mobil lepas kunci?</button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accord-faq mt-4 border-top">
                            <h2 class="accordion-header" id="headingThree">
                                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Berapa hari sebelumnya sabaiknya booking sewa mobil?</button>                     
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accord-faq mt-4 border-top">
                            <h2 class="accordion-header" id="headingFour">
                                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">Apakah Ada biaya antar-jemput?</button>                     
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse multi-collapse" data-bs-parent="#myAccordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accord-faq mt-4 border-top">
                            <h2 class="accordion-header" id="headingFive">
                                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">Bagaimana jika terjadi kecelakaan</button>                     
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat risus nunc, nec euismod orci finibus a. Donec at felis vel urna aliquet sodales eu et sem. Aliquam auctor eros ac augue mollis, non luctus ante varius. Vivamus vitae vehicula nunc. Ut facilisis dapibus sodales. Proin quis lorem id ligula pretium placerat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container container-footer pt-5 p-5">
            <div class="row mx-auto">
                <div class="col-md-3 col-sm-6 col-xs-12 ">
                    <ul class="list-group p-0">
                        <li class="list-group-item border-0"><p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p></li>
                        <li class="list-group-item border-0"><p>binarcarrental@gmail.com</p></li>
                        <li class="list-group-item border-0"><p>081-233-334-808</p></li>
                      </ul>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <ul class="list-group p-0">
                        <li class="list-group-item border-0"><a href="#Ourservice">Our services</a></li>
                        <li class="list-group-item border-0"><a href="#Whyus">Why Us</a></li>
                        <li class="list-group-item border-0"><a href="#Testimonial">Testimonial</a></li>
                        <li class="list-group-item border-0"><a href="#Faq">FAQ</a></li>
                      </ul>             
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <ul class="list-group p-0">
                        <li class="list-group-item border-0"><p>Connect with us</p></li>
                        <li class="list-group-item border-0">
                            <div class="d-flex flex-row">
                                <div class="p-1"><a href="https://www.facebook.com/"><img src="assets/icon_facebook.svg" /></a></div>
                                <div class="p-1"><a href="https://www.instagram.com/"><img src="assets/icon_instagram.svg" /></a></div>
                                <div class="p-1"><a href="https://www.twitter.com/"><img src="assets/icon_twitter.svg" /></a></div>
                                <div class="p-1"><a href="https://mail.google.com/"><img src="assets/icon_mail.svg" /></a></div>
                                <div class="p-1"><a href="https://twitch.com/"><img src="assets/icon_twitch.svg" /></a></div>
                              </div>
                        </li>
                      </ul>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <ul class="list-group p-0">
                        <li class="list-group-item border-0"><p>Copyright Binar 2022</p></li>
                        <li class="list-group-item border-0"><a class="square-2" href="#"></a></li>
                    </ul>    
                </div>
            </div>
        </div>
        <div class="text-bottom">
        <p class="text-center mt-5">Rehan Nur Setiawan</p>
        </div>
    </footer>

    </div>
    </div>
    </React.Fragment>

        );
        
        
    }


