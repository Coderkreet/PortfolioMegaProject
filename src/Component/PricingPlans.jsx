import React from 'react'
import { FaCheck, FaRocket } from 'react-icons/fa'
import "./css/anitabs.css"
import "./css/style.css"
import "./css/color.css"
import "./css/responsive.css"
import "./css/nice-select.css"
import "./css/perfect-scrollbar.css"

import  dots  from "./img/dots.png";

import FooterSection from './FooterSection'
const PricingPlans = () => {
  return (
    <div>
<section
  id="particles-js"
  className="blog-detail pattern gap"
  style={{ backgroundImage: "url(https://via.placeholder.com/1920x530)" }}
>
  <div className="container">
    <div className="blog-detail-data gap no-bottom">
      <h2 data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
        Pricing Plans
      </h2>
      <ul data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
        <li>
          <a className="magic-hover magic-hover__square" href="index.html">
            <i className="fa-solid fa-house" />
            home
          </a>
        </li>
        <li>
          <a className="magic-hover magic-hover__square" href="#">
            <span>/</span>Pricing Plans
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="pricing-plans gap">
  <div className="container">
    <div className="row">
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="pricing-plans-tabla">
          <div
            className="basic-package home2"
        
          >
            <h5>Premium Package</h5>
            <h3>
              $350 <span>/ month</span>
            </h3>
          </div>
          <div className="rocket">
          <span className="icon-rocket" > <FaRocket/></span>
            <ul>
              <li>
              <i className="fa-solid fa-check" ><FaCheck/></i>
                Website Design
              </li>
              <li>
                            <i className="fa-solid fa-check" ><FaCheck/></i>

                Graphic Designing
              </li>
              <li>
                            <i className="fa-solid fa-check" ><FaCheck/></i>

                Web Development
              </li>
              <li>
                            <i className="fa-solid fa-check" ><FaCheck/></i>

                Business Consulting
              </li>
            </ul>
            <a
              href="#"
              className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
            >
              Select Now
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div className="pricing-plans-tabla">
          <div
            className="basic-package home2"
            
          >
            <h5>Business Packages</h5>
            <h3>
              $470 <span>/ month</span>
            </h3>
          </div>
          <div className="rocket">
          <span className="icon-rocket" > <FaRocket/></span>
            <ul>
              <li>
                            <i className="fa-solid fa-check" ><FaCheck/></i>

                Website Design
              </li>
              <li>
                            <i className="fa-solid fa-check" ><FaCheck/></i>

                Graphic Designing
              </li>
              <li>
                            <i className="fa-solid fa-check" ><FaCheck/></i>

                Web Development
              </li>
              <li>
                            <i className="fa-solid fa-check" ><FaCheck/></i>

                Business Consulting
              </li>
            </ul>
            <a
              href="#"
              className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
            >
              Select Now
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={400}
        data-aos-duration={500}
      >
        <div className="pricing-plans-tabla">
          <div
            className="basic-package home2"
          >
            <h5>Premium Package</h5>
            <h3>
              $650 <span>/ month</span>
            </h3>
          </div>
          <div className="rocket">
          <span className="icon-rocket" > <FaRocket/></span>
            <ul>
              <li style={{ display:"flex", paddingRight:"20px"}} >
                             <i className="fa-solid fa-check" ><FaCheck/></i>

                Website Design
              </li>
              <li style={{ display:"flex", paddingRight:"20px"}} >
                             <i className="fa-solid fa-check" ><FaCheck/></i>

                Graphic Designing
              </li>
              <li style={{ display:"flex", paddingRight:"20px"}} >
                             <i className="fa-solid fa-check" ><FaCheck/></i>

                Web Development
              </li>
              <li style={{ display:"flex", paddingRight:"20px"}} >
                             <i className="fa-solid fa-check" ><FaCheck/></i>

                Business Consulting
              </li>
            </ul>
            <a
              href="#"
              className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
            >
              Select Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="creative-together gap no-top"
  data-aos="fade-up"
  data-aos-delay={200}
  data-aos-duration={300}
>
  <div className="container">
    <div
      className="gap contact-info-home-two"
      style={{ backgroundImage: "url(https://via.placeholder.com/1290x530)" }}
    >
      <h2>Let's Create Something Creative Together</h2>
      <p>We can't wait to hear from making something beautiful and new! </p>
      <a
        href="javascript:void(0)"
        className="lightbox-toggle magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
      >
        <i className="fa-solid fa-download" />
        Start Consulting
      </a>
    </div>
  </div>
</section>


<section className="gap no-top">
  <div className="container">
    <div
      className="hading"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={300}
    >
      <img alt="dots" src={dots}/>
      <p>student Pricing Plans</p>
      <h2>assignments packages</h2>
    </div>
    <div className="row">
      <div
        className="col-xl-6 col-lg-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="pricing-plans-tabla two">
          <div
            className="basic-package home2"
          >
            <h5>Premium Package</h5>
            <h3>
              $350 <span>/ month</span>
            </h3>
            <i className="icon-rocket" > <FaRocket/></i>
          </div>
          <div className="rocket">
            <ul>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Website Design
              </li>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Graphic Designing
              </li>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Web Development
              </li>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Business Consulting
              </li>
            </ul>
            <a
              href="#"
              className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
            >
              Select Now
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-xl-6 col-lg-12"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div className="pricing-plans-tabla two">
          <div
            className="basic-package home2"
          >
            <h5>Premium Package</h5>
            <h3>
              $350 <span>/ month</span>
            </h3>
            <i className="icon-rocket" > <FaRocket/></i>
          </div>
          <div className="rocket">
            <ul>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Website Design
              </li>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Graphic Designing
              </li>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Web Development
              </li>
              <li>
                              <i className="fa-solid fa-check" ><FaCheck/></i>

                Business Consulting
              </li>
            </ul>
            <a
              href="#"
              className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
            >
              Select Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<FooterSection/>



    </div>
  )
}

export default PricingPlans
