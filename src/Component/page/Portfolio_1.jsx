import React from 'react'
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight, FaCalendar, FaCheck, FaInfo, FaRegStopCircle, FaTag } from 'react-icons/fa'
import FooterSection from '../FooterSection'

const Portfolio_1 = () => {
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
            <span>/</span> Portfolio Details 1
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>


<section className="blog-details-one gap no-bottom">
  <div className="container">
    <div
      className="blog-details-one-data"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={300}
    >
      <div className="img-data">
        <img alt="blog-img" src="https://via.placeholder.com/1296x633" />
      </div>
    </div>
    <div className="row gap no-bottom">
      <div
        className="col-xl-8 col-lg-6 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="photography">
          <span>Photography, Design, Ideas</span>
          <h3>Brand Consistency</h3>
          <p>
            Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori sit
            amet co adipiscing elit sed do eusm t ut labore ilms Lorem ipsumolor
            sit amet co adipiscing elit sed do eusm odcididunt ut lausm od
            cididL orem ipsum dolor sit amet co adipiscing elit sed do eusmoori
            sit amet co adipiscing elit sed do eusmt ut labore ilms Lorem
            ipsumolor sit amet co adipisc od cididun ut labore ut labore ilms
            Lorem ipsum ori sit amet co adipiscing elit sed do eusm odcididunt
            ut lisum dolor sit amet co adipiscing elit sed do eus orem ipsum
            dolor sit amet co adipiscing elit sed do eusmoori sit amet co
            adipiscing elit sed do eusmt moori sit ang.Lorem ipsumolor sit amet
            co adipisc.
            <br />
            <br />
            ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
            labore ut labore ilms ilLorem ipsum ri sit amet co adipiscing elit
            sed do eusm odcididunt ut ling elitsed do eusm od cididunt ut labore
            ilmu nt ut labore ut labore ilms. od cididLorem ipsum dolor sit amet
            co adipiscing elit sed do eusmoori sit a met co adipiscing elit sed.
          </p>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <ul className="client-info">
          <li className="client-data">
            <i className="icon-info" > <FaInfo/></i>
            <div>
              <h4>Client:</h4>
              <h6>Envato Stuido</h6>
            </div>
          </li>
          <li className="client-data">
            <i className="icon-tag" > <FaTag/></i>
            <div>
              <h4>Category:</h4>
              <h6>Portfolio, Photos, Agency</h6>
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
            <i className="icon-layers" > <FaRegStopCircle/></i>
            <div>
              <h4>Resources:</h4>
              <h6>PSD Document Vector File Document</h6>
            </div>
          </li>
          <li>
            <a
              href="pdf/orix.pdf"
              className="magic-hover magic-hover__square button load button--moema button--text-thick button--text-upper button--size-s"
              target="_blank"
            >
              <i className="fa-solid fa-download" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="img-data-portfolio hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/416x483" />
          </figure>
        </div>
        <div className="img-data-portfolio hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/416x369" />
          </figure>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div className="img-data-portfolio hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/416x369" />
          </figure>
        </div>
        <div className="img-data-portfolio hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/416x483" />
          </figure>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={400}
        data-aos-duration={500}
      >
        <div className="img-data-portfolio hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/416x483" />
          </figure>
        </div>
        <div className="img-data-portfolio hover06">
          <figure>
            <img alt="img" src="https://via.placeholder.com/416x369" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="provide-section gap no-top">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 p-0">
        <div className="provide">
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
      <div className="col-lg-8 p-0">
        <div className="profile-provide-img hover06">
          <figure>
            <img alt="profile" src="https://via.placeholder.com/880x541" />
          </figure>
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
      <a className="padingg magic-hover magic-hover__square" href="#">
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

export default Portfolio_1
