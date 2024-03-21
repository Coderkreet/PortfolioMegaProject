import React, { useState } from 'react'
import FooterSection from '../FooterSection'
import REsumeSection from '../REsumeSection'
import ServicesSection from '../ServicesSection'
import About_Section from '../About_Section'
import  dots  from "../img/dots.png";
import home2 from "../img/home-2.jpg"
import OrixLogo from "../img/orix-logo.png"
import OrixLogoblak from "../img/black-logo.png"





// css file 
import "../css/anitabs.css"
import "../css/style.css"
import "../css/color.css"
import "../css/responsive.css"
import "../css/nice-select.css"
import "../css/perfect-scrollbar.css"
import { FaBars, FaCheck, FaDownload, FaRocket } from 'react-icons/fa'
import Artical from '../Artical'
import NumberCounter from './NumberCounter'
import { Link } from 'react-router-dom'
import ProjectSection from '../ProjectSection'

const Home_2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIshome] = useState(false);
  const [isPortfolio, setPortfolio] = useState(false);
  const [isBlog, setBlog] = useState(false);
  const [isPages, setPages] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleBlog = () => {
    setBlog(!isBlog);
  };
  const togglePages = () => {
    setPages(!isPages);
  };
  const togglehome = () => {
    setIshome(!isHome);
  };
  const togglrPortfolio = () => {
    setPortfolio(!isPortfolio);
  };
  return (
    <div>
  <header className="two for" id="stickyHeader">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-2">
        <div className="logo-icon">

          <Link className="magic-hover magic-hover__square" to="/">
            <img className="light" src={OrixLogo} alt="logo" />
            <img className="drak" src={OrixLogoblak} alt="logo" />
          </Link>
          <a
            href="javascript:void(0)"
            className="bar-menu magic-hover magic-hover__square"
          >
            <i className="fa-solid fa-bars" onClick={toggleMenu} ><FaBars/></i>
          </a>
        </div>
      </div>
      <div className="col-xl-7">
        <div className="menu-bar">
          <nav>
            <ul>
              <li className="menu-item-has-children">
                <Link className="magic-hover magic-hover__square" href="#">
                  Home
                </Link>
                <ul>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="index.html"
                    >
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="index-2.html"
                    >
                      Home 2{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="index-3.html"
                    >
                      Home 3{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="magic-hover magic-hover__square"
                  href="services.html"
                >
                  services
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link className="magic-hover magic-hover__square" href="#">
                  Portfolio
                </Link>
                <ul>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="portfolio-details-1.html"
                    >
                      Portfolio 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="portfolio-details-2.html"
                    >
                      Portfolio 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="portfolio-details-3.html"
                    >
                      Portfolio 3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link className="magic-hover magic-hover__square" href="#">
                  Blog
                </Link>
                <ul>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="blog-details-1.html"
                    >
                      Blog Details 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="blog-details-2.html"
                    >
                      Blog Details 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link className="magic-hover magic-hover__square" href="#">
                  Pages
                </Link>
                <ul>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="about.html"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="magic-hover magic-hover__square"
                      href="404.html"
                    >
                      404
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="magic-hover magic-hover__square"
                  href="contact.html"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="extras">
          <a
            href="javascript:void(0)"
            className="bar-menu magic-hover magic-hover__square"
          >
            <i className="fa-solid fa-bars" onClick={toggleMenu}><FaBars/></i>
          </a>
          <a
            href="pdf/orix.pdf"
            className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
            target="_blank"
          >
            <i className="fa-solid fa-download" > <FaDownload/></i>
            Download CV
          </a>
        </div>
      </div>
      <div className="menu-wrap">
        <div className="menu-inner ps ps--active-x ps--active-y">
          <span className="menu-cls-btn">
            <i className="cls-leftright" />
            <i className="cls-rightleft" />
          </span>
          <div className="contact-info">
            <a className="magic-hover magic-hover__square" href="index.html">
              <img src={OrixLogo} alt="logo" />
            </a>
            <h5>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction.
            </h5>
            <div className="e-mail">
              <div className="icon-box">
                <i className="fa-solid fa-envelope" />
              </div>
              <div>
                <h6>Phone No</h6>
                <a
                  className="magic-hover magic-hover__square"
                  href="mailto:username@domain.com"
                >
                  username@domain.com
                </a>
              </div>
            </div>
            <div className="e-mail">
              <div className="icon-box">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <h6>Email Address</h6>
                <a
                  className="magic-hover magic-hover__square"
                  href="callto:+(123)4567890"
                >
                  +(123) 456 7890
                </a>
              </div>
            </div>
            <div className="e-mail">
              <div className="icon-box">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div>
                <h6>Location</h6>
                <a
                  className="magic-hover magic-hover__square"
                  href="javascript:void(0)"
                >
                  Block Street No 2101 USA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} id="mobile-nav" style={{ display: "block" }}>
    <div className="mobile-nav-img-data">
      <a className="magic-hover magic-hover__square" href="index.html">
        <img alt="logo" src={OrixLogoblak} />
      </a>
    </div>
    <ul>
    <li className={`menu-item-has-children ${isHome ? 'active' : ''}`} onClick={togglehome} >
        <Link
          className="magic-hover magic-hover__square"
        
        >
          <i className="icon-home" /> Home
        </Link>
        <ul className="sub-menu">
          <li>
            <Link className="magic-hover magic-hover__square" to="/">
              Home 1
            </Link>
          </li>
          <li>
            <Link className="magic-hover magic-hover__square" to="/Home_2">
              Home 2
            </Link>
          </li>
          <li>
            <Link className="magic-hover magic-hover__square" to="/Home_3">
              Home 3
            </Link>
          </li>
          <li>
            <Link className="magic-hover magic-hover__square" to="/Home_4">
              Home 4 ( Light )
            </Link>
          </li>
          <li>
            <a
              className="magic-hover magic-hover__square"
              href="/"
            >
              Home 4 ( Dark )
            </a>
          </li>
        </ul>
      </li>
      <li>
        <Link className="magic-hover magic-hover__square" to="/About">
          <i className="icon-user" /> About
        </Link>
      </li>
      <li className={`menu-item-has-children ${isPortfolio ? 'active' : ''}`} onClick={togglrPortfolio}>
        <a
          className="magic-hover magic-hover__square"
          href="JavaScript:void(0)"
        >
          <i className="icon-briefcase" /> Portfolio
        </a>
        <ul className="sub-menu">
          <li>
            <Link
              className="magic-hover magic-hover__square"
              
              to="Portfolio_1"
            >
              Portfolio Details 1
            </Link>
          </li>
          <li>
            <Link
              className="magic-hover magic-hover__square"
              to="Portfolio_2"
            >
              Portfolio Details 2
            </Link>
          </li>
          <li>
            <Link
              className="magic-hover magic-hover__square"

              href="Portfolio_3"
            >
              Portfolio Details 3
            </Link>
          </li>
        </ul>
      </li>
      <li className={`menu-item-has-children ${isBlog ? 'active' : ''}`} onClick={toggleBlog} >
        <Link
          className="magic-hover magic-hover__square"
          href="JavaScript:void(0)"
        >
          <i className="icon-layers" />
          Blog
        </Link>
        <ul className="sub-menu">
          <li>
            <Link className="magic-hover magic-hover__square" to="/OurBlog">
              Our Blog
            </Link>
          </li>
          <li>
            <Link
              className="magic-hover magic-hover__square"
              to="/BlogDetails_1"
            >
              Blog Details 1
            </Link>
          </li>
          <li>
            <Link
              className="magic-hover magic-hover__square"
              to="/BlogDetails_2"
            >
              Blog Details 2
            </Link>
          </li>
        </ul>
      </li>
      <li className={`menu-item-has-children ${isPages ? 'active' : ''}`} onClick={togglePages} >
        <Link
          className="magic-hover magic-hover__square"
          href="JavaScript:void(0)"
        >
          <i className="icon-folder" /> Pages
        </Link>
        <ul className="sub-menu">
          <li>
            <Link className="magic-hover magic-hover__square" to="/Services">
              Services
            </Link>
          </li>
          <li>
            <Link
              className="magic-hover magic-hover__square"
              to ="/Services_Details"
            >
              Services Details
            </Link>
          </li>
          <li>
            <Link
              className="magic-hover magic-hover__square"
              to="/PricingPlans"
            >
              Pricing Plans
            </Link>
          </li>
          <li>
            <a className="magic-hover magic-hover__square" href="work">
              404
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="magic-hover magic-hover__square" href="contact.html">
          <i className="icon-envelope-open" /> Contact
        </a>
      </li>
    </ul>
    <a
      className="magic-hover magic-hover__square"
      href="JavaScript:void(0)"
      id="res-cross"
      onClick={toggleMenu}
    />
    <a
      href="pdf/orix.pdf"
      className="magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
      target="_blank"
    >
      <i className="fa-solid fa-download" > <FaDownload/></i>
      Download CV
    </a>
  </div>
</header>


<>
  <section className="hero-section-two">
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={300}
        >
          <div className="user-data two">
            <h2>Hello I Am</h2>
            <h1>Willimes Parker</h1>
            <p>
              Graphic Designer, HTML Coder, PHP Programmer and Project Manager
            </p>
            <a
              href="javascript:void(0)"
              className="lightbox-toggle magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s"
            >
              Start Consulting
            </a>
            <span>Available for Freelance</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="home-two-img">
            <img alt="girl" src="https://via.placeholder.com/410x515" />
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="data-time-two">
            <div className="count-time two">
              <h2
                className="timer count-title count-number"
                data-to={12}
                data-speed={2000}
              >
                      <NumberCounter end={17} duration={800} />
              </h2>
              <span>+</span>
            </div>
            <h6>Years Working Experience</h6>
          </div>
          <div className="data-time-two boder">
            <div className="count-time two">
              <h2
                className="timer count-title count-number"
                data-to={10}
                data-speed={2000}
              >
                      <NumberCounter end={10} duration={600} />
              </h2>
              <span>k</span>
            </div>
            <h6>Happy Satisfied Customers</h6>
          </div>
        </div>
      </div>
    </div>
  </section>

<ServicesSection/>
 
 <ProjectSection/>
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
          className="lightbox-toggle  magic-hover magic-hover__square button download  button--moema button--text-thick button--text-upper button--size-s"
        >
          <i className="fa-solid fa-download" />
          Start Consulting
        </a>
      </div>
    </div>
  </section>
<REsumeSection/>
  {/* Working part */}
  <section
    className="gap no-bottom"
    data-aos="fade-up"
    data-aos-delay={200}
    data-aos-duration={300}
  >
    <div className="container">
      <div className="hading">
      <img alt="dots" src={dots} />

        <p>News &amp; Blog</p>
        <h2>Recent Articles</h2>
      </div>
     <Artical/>
    </div>
  </section>
  <section className="pricing-plans gap no-bottom">
    <div className="container">
      <div className="row">
        <div
          className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={300}
        >
          <div className="hading">
            <p>Work Packages</p>
            <h2>Pricing Plans</h2>
            <h6>
              Lorem ipm dolor amet, cons magm maiores Ipsa dolor sitmagnam
              maores. Lorem ipm dolor amet, cons magm maiores Ipsa dolor sitma.
            </h6>
          </div>
        </div>
        <div className="offset-xl-1 col-xl-7 ">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="pricing-plans-tabla">
                <div
                  className="basic-package home2"
                  style={{ backgroundImage: `${home2}` }}
                >
                  <h5>Basic Package</h5>
                  <h3>
                    $350 <span>/ month</span>
                  </h3>
                </div>
                <div className="rocket">
                  <span className="icon-rocket" ><FaRocket/> </span>
                  <ul>
                    <li>
                      <i className="fa-solid fa-check" > <FaCheck/></i>
                      Website Design
                    </li>
                    <li>
                    <i className="fa-solid fa-check" > <FaCheck/></i>
                      Graphic Designing
                    </li>
                    <li>
                    <i className="fa-solid fa-check" > <FaCheck/></i>
                      Web Development
                    </li>
                    <li>
                    <i className="fa-solid fa-check" > <FaCheck/></i>
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
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="pricing-plans-tabla">
                <div
                  className="basic-package home2"
                  style={{ backgroundImage: `${home2}` }}
                >
                  <h5>Premium Package</h5>
                  <h3>
                    $650 <span>/ month</span>
                  </h3>
                </div>
                <div className="rocket">
                  <span className="icon-rocket" > <FaRocket/></span>
                  <ul>
                    <li>
                    <i className="fa-solid fa-check" > <FaCheck/></i>
                      Website Design
                    </li>
                    <li>
                    <i className="fa-solid fa-check" > <FaCheck/></i>
                      Graphic Designing
                    </li>
                    <li>
                    <i className="fa-solid fa-check" > <FaCheck/></i>
                      Web Development
                    </li>
                    <li>
                    <i className="fa-solid fa-check" > <FaCheck/></i>
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
      </div>
    </div>
  </section>
  <div className="clients-data">
    <div className="container">
      <div
        className="row client-logo owl-carousel owl-theme"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="col-lg-3 item">
          <div className="clients-color">
            <img alt="clients" src="https://via.placeholder.com/278x128" />
          </div>
        </div>
        <div className="col-lg-3 item">
          <div className="clients-color">
            <img alt="clients" src="https://via.placeholder.com/278x128" />
          </div>
        </div>
        <div className="col-lg-3 item">
          <div className="clients-color">
            <img alt="clients" src="https://via.placeholder.com/278x128" />
          </div>
        </div>
        <div className="col-lg-3 item">
          <div className="clients-color">
            <img alt="clients" src="https://via.placeholder.com/278x128" />
          </div>
        </div>
        <div className="col-lg-3 item">
          <div className="clients-color">
            <img alt="clients" src="https://via.placeholder.com/278x128" />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    <FooterSection/>
    </div>
  )
}

export default Home_2
