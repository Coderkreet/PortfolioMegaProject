import React, { useEffect } from 'react'
import ServicesSection from '../ServicesSection'
import FooterSection from '../FooterSection'
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
<section data-aos="fade-up" id="particles-js" className="blog-detail pattern gap ServiceImg" >
      <div className="container">
        <div className="blog-detail-data gap no-bottom">
          <h2>Our Services</h2>
          <ul>
            <li><a className="magic-hover magic-hover__square" href="index.html"><i className="fa-solid fa-house"></i>home</a></li>
            <li><a className="magic-hover magic-hover__square" href="#"><span>/</span>Services</a></li>
          </ul>
        </div>
      </div>
    </section>
    <div style={{ marginTop:"40px" }}>
    <ServicesSection/>
    <FooterSection/>
    </div>
 
    </div>
  )
}

export default Services
