import React from 'react';
import { link } from 'react-router-dom';

export default function Mulai(){
    return(
        <React.Fragment>

    <nav id="navbarBinar" class="navbar navbar-expand-lg static-top">
        <div class="container">
            <a class="square" href="index.html"></a>
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
    <div class="offcanvas offcanvas-end" data-bs-dismiss="offcanvas" tabindex="-1" id="offcanvasExample" aria-label="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">BCR</h5>
            <button type="button" class="btn-close text-reset" data-backdrop="false" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav mx-auto w-100 justify-content-end">                   
                <li class="nav-item">
                    <a class="nav-link" >Our Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Why Us</a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link">Testimonial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <button class="btn btn-sm btn-success">Register</button>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div data-bs-target="#navbarBinar" data-bs-offset="0"  tabindex="0">
        
        <div class="hero container-fluid">
          <div class="row">
              <div class="col-lg-6 col-12">
                  <h1 class="text-kiri-top text-left pt-5 ml-5">Sewa & Rental Mobil Terbaik di kawasan Purbalingga</h1>
                  <p class="text-kiri ml-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button class="text-kiri mt-2 ml-5 btn btn-md btn-success zoom">Mulai Sewa Mobil</button>
              </div>
              <div class="col-lg-6 col-12">
                  <img class="img-hero" src="/assets/img_car.svg" alt="car-image" />
              </div>
          </div>
        </div>
    </div>
    
    <div class="container container-form d-flex justify-content-center pb-2" style="
    position: relative;
    margin-top: -61px!important;
    z-index: 3;
    background-color: white;
    box-shadow: 0 0 13px rgba(33,33,33,.2); 
    border-radius: 10px;">
        
            <div class="row">
                <div class="col">
                    <div class="m-2" >
                        <label for="tipeDriver" style="font-size: 14px;">Tipe Driver</label>
                        <div class="input-group mb-3">
                            <select class="form-control" id="tipeDriver">
                                <option disabled selected hidden>Pilih Tipe Driver</option>
                                <option value="denganSopir">Dengan Sopir</option>
                                <option value="tanpaSopir">Tanpa Sopir (Lepas Kunci)</option>
                                <label class="input-group-text" for="inputGroupSelect02">Options</label>
                            </select>
                            
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">&#xF077;</span>
                            </div>
                        </div>
                        
                    </div> 
                </div>
                <div class="col">
                    <div class="m-2" >
                        <label>Tanggal</label>
                        <div class="input-group mb-3">
                            <input class="form-control" type="date" id="filterDate">
                        </div>
                        
                    </div>
                </div>
                <div class="col">
                    <div class="m-2" >
                        <label>Waktu</label>
                            <div class="input-group mb-3">
                                <input class="form-control" type="time" id="filterTime">
                                
                            </div>
                    
                    </div>
                </div>
                <div class="col">
                    <div class="m-2" >
                        <label>Jumlah Penumpang</label>
                        <div class="input-group mb-3">
                            <input class="form-control" type="number" id="filterCapacity" placeholder="Jumlah Pnp">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">&#xf500;</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col" style="margin-top: 23px;">
                    <div class="btn-form btn-filter-car m-2" style="margin-left: 70px!important;">
                        <label for="btnForm"></label>
                        <button id="load-btn" class="btn btn-success" type="submit">Cari Mobil</button>
                    </div>
                </div>
                <div class="col" style="margin-top: 23px;">
                    <div class="btn-form m-2" style="margin-left: 70px!important;">
                        <label for="btnReset"></label>
                        <button id="clear-btn" class="btn btn-danger">Reset</button>
                    </div>
                </div>
            </div>
            
            <button id="load-btn">Cari</button>
            <button id="clear-btn">Reset</button>
    </div>
    

    <div class="row">
        <div class="text-center pt-3" style="display:none;" id="errorMsg"></div>
    </div>
    <div class="container">
        <div class="row mt-5" id="cars-container"></div>
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
                                <div class="p-1"><a href="https://www.facebook.com/"><img src="/assets/icon_facebook.svg" /></a></div>
                                <div class="p-1"><a href="https://www.instagram.com/"><img src="/assets/icon_instagram.svg" /></a></div>
                                <div class="p-1"><a href="https://www.twitter.com/"><img src="/assets/icon_twitter.svg" /></a></div>
                                <div class="p-1"><a href="https://mail.google.com/"><img src="/assets/icon_mail.svg" /></a></div>
                                <div class="p-1"><a href="https://twitch.com/"><img src="/assets/icon_twitch.svg" /></a></div>
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
        <p class="text-center mt-5">Rehantu</p>
        </div>
    </footer>
        </React.Fragment>
    );
    
}