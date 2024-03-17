import React from 'react'
import  quit  from "../img/quote-1.png";
import { FaAngleLeft, FaAngleRight, FaFacebook, FaInstagram, FaPlay, FaPlayCircle, FaTwitter } from 'react-icons/fa';
import About_Section from '../About_Section';
import REsumeSection from '../REsumeSection';
import FooterSection from '../FooterSection';

// css file 
import "../css/anitabs.css"
import "../css/style.css"
import "../css/color.css"
import "../css/responsive.css"
import "../css/nice-select.css"
import "../css/perfect-scrollbar.css"
import { Col, Container, Row } from 'react-bootstrap';

const about = () => {
  

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
        About Us
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
            <span>/</span> About
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

<About_Section/>
<REsumeSection/>

<div className="clients-data">
            <Container>
                <Row className="client-logo">
                    <Col lg={3} className="item">
                        <div className="clients-color">
                            <img alt="clients" src="https://via.placeholder.com/278x128" />
                        </div>
                    </Col>
                    <Col lg={3} className="item">
                        <div className="clients-color">
                            <img alt="clients" src="https://via.placeholder.com/278x128" />
                        </div>
                    </Col>
                    <Col lg={3} className="item">
                        <div className="clients-color">
                            <img alt="clients" src="https://via.placeholder.com/278x128" />
                        </div>
                    </Col>
                    <Col lg={3} className="item">
                        <div className="clients-color">
                            <img alt="clients" src="https://via.placeholder.com/278x128" />
                        </div>
                    </Col>
                    <Col lg={3} className="item">
                        <div className="clients-color">
                            <img alt="clients" src="https://via.placeholder.com/278x128" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

<FooterSection/>
    </div>
  )
}

export default about
