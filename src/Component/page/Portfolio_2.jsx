import React from 'react'
import FooterSection from '../FooterSection'
import { FaArrowLeft, FaArrowRight, FaCalendar, FaCheck, FaInfo, FaLayerGroup, FaRestroom, FaTag } from 'react-icons/fa'

const Portfolio_2 = () => {
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
        Portfolio Details
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
            <span>/</span> Our Portfolio
          </a>
        </li>
        <li>
          <a className="magic-hover magic-hover__square" href="#">
            <span>/</span> Portfolio Details 2
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="blog-details-one gap no-bottom">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-6"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="photography portfolio-two">
          <span>Photography, Design, Ideas</span>
          <h3>Brand Consistency</h3>
          <ul className="client-info">
            <li className="client-data">
              <i className="icon-info" ><FaInfo/> </i>
              <div>
                <h4>Client:</h4>
                <h6>Envato Stuido</h6>
              </div>
            </li>
            <li className="client-data">
              <i className="icon-tag" ><FaTag/></i>
              <div>
                <h4>Category:</h4>
                <h6>Portfolio, Photos</h6>
              </div>
            </li>
            <li className="client-data">
              <i className="icon-calendar" > <FaCalendar/></i>
              <div>
                <h4>Date:</h4>
                <h6>Start: December 10, 2021 End: June 12, 2025</h6>
              </div>
            </li>
            <li className="client-data">
              <i className="icon-layers" > <FaLayerGroup/></i> 
              <div>
                <h4>Resources:</h4>
                <h6>PSD Document Vector File Document</h6>
              </div>
            </li>
            <a
              href="pdf/orix.pdf"
              className="magic-hover magic-hover__square button load button--moema button--text-thick button--text-upper button--size-s"
              target="_blank"
            >
              <i className="fa-solid fa-download" />
              Download CV
            </a>
          </ul>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori sit
            amet co a t ut labore ilms Lorem ipsumolor sit amet co adipiscing
            elit sed do eusm od orem ipsum dolor sit amet co adipiscing elit sed
            do eusmoori sit amet co at ut labore ilms Lorem ipsumolor sit amet
            co adipisc od cididun ut labore ut la sit amet co adipiscing elit
            sed do eusm odcididunt ut lisum dolor sit amet co orem ipsum dolor
            sit amet co adipiscing elit sed do eusmoori sit amet co adi moori
            sit ang.
            <br />
            <br />
            ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
            labore ut ri sit amet co adipiscing elit sed do eusm odcididunt ut
            ling elitsed do eusm nt ut labore ut labore ilms. od cididLorem
            ipsum dolor sit amet co adipiscing met co adipiscing elit sed.
          </p>
          <div className="provide portfolio-data">
            <h3>What We Provide</h3>
            <ul>
              <li>
              <i className="fa-solid fa-check" ><FaCheck/></i>
                Dedication to client satisfaction
              </li>
              <li>
              <i className="fa-solid fa-check" ><FaCheck/></i>
                Teamwork and collabration
              </li>
              <li>
              <i className="fa-solid fa-check" ><FaCheck/></i>
                Being leader in our profession
              </li>
              <li>
              <i className="fa-solid fa-check" ><FaCheck/></i>
                Teamwork and collabration
              </li>
              <li>
              <i className="fa-solid fa-check" ><FaCheck/></i>
                Pride in our works and excellences
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="col-lg-6"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div className="img-data-portfolio img-size-one hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/636x627" />
          </figure>
        </div>
        <div className="img-data-portfolio img-size-one hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/636x627" />
          </figure>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="img-data-portfolio hover06">
              <figure>
                <img alt="img" src="https://via.placeholder.com/306x306" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-data-portfolio hover06">
              <figure>
                <img alt="img" src="https://via.placeholder.com/306x306" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="prev-work gap no-top">
  <div className="container">
    <div className="prev-work-one">
      <a className="magic-hover magic-hover__square" href="#">
        <i className="fa-solid fa-arrow-left" > <FaArrowLeft/></i>
        prev-work
      </a>
      <a className="magic-hover magic-hover__square padingg" href="#">
        Next Work
        <i className="fa-solid fa-arrow-left" > <FaArrowRight/></i>
      </a>
    </div>
  </div>
</div>

<FooterSection/>
    </div>
  )
}

export default Portfolio_2
