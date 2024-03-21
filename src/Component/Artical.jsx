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


const Artical = () => {
  


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
                                        
                                        <div class="item zoom-slider-img" style={{width : "600px"}}>
                                        <img src="https://cdn1.vectorstock.com/i/1000x1000/67/65/business-concept-background-article-writing-word-vector-38866765.jpg" alt="img" style={{width : "300px"}} />
                                        <div class="zoom-slider-data" style={{height : "300px"}} >
                                            <span>December 5, 2023</span><div class="dodgap"></div><span>  John Smith</span>
                                                <h5><a class="magic-hover magic-hover__square" href="blog-details-2.html">Interview Photographer Mark 
                                                    Seliger Agency</a></h5>
                                                    <div>{testiMonialDetail.detail}</div>

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
};

export default Artical;