import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from '../../image/user-one.png';
import './Testimonial.css'
import "./css/anitabs.css"
import "./css/style.css"
import "./css/color.css"
import "./css/responsive.css"
import "./css/nice-select.css"
import "./css/perfect-scrollbar.css"
const Slider = () => {
    const ArticalDetails = [
        {
            name: 'Rekob Ramya',
            date : 'December 5, 2023',
            description: 'Interview Photographer Mar kSeliger Agency ',
            address: 'USA',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg',
            detail : 'This article from timesofindia.indiatimes.com discusses the IT industry, including its services, e-commerce, software, and hardware products, and Indias potential for a digital economy of $1 trillion by 2025'

        },
        {
            name: 'Rekob Ramya',
            date : 'December 5, 2023',
            description: 'Interview Photographer Mar kSeliger Agency ',
            address: 'USA',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg',
                        detail : 'This article from timesofindia.indiatimes.com discusses the IT industry, including its services, e-commerce, software, and hardware products, and Indias potential for a digital economy of $1 trillion by 2025'

        },
        {
            name: 'Rekob Ramya',
            date : 'December 5, 2023',
            description: 'Interview Photographer Mar kSeliger Agency ',
            address: 'USA',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg',
            detail : 'This article from timesofindia.indiatimes.com discusses the IT industry, including its services, e-commerce, software, and hardware products, and Indias potential for a digital economy of $1 trillion by 2025'

        },
    
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                            
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                ArticalDetails.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={""} />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    ArticalDetails.map(testiMonialDetail => {
                                        return (
                                            
                                          <div class="col-lg-20 item" style={{width :"30rem"}}>
                                          <div class="to-present">
                                            <span>2016 to 2018</span>
                                            <h6>Graphic Designer</h6>
                                            <div class="envato-studio">
                                              <h4>Envato Studio</h4>
                                              <p>Lorem ipsum indolor st amet, cmetc ur
                                                locing elit, sedi dinm indolo  sum ind ol
                                                m indolor st amet, cmetcilmes.</p>
                                            </div>
                                          </div>
                                        </div>
                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider
