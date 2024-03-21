import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
// import '..owl.carousel.min.css';
import "./css/anitabs.css"
import "./css/style.css"
import "./css/color.css"
import "./css/responsive.css"
import "./css/nice-select.css"
import "./css/perfect-scrollbar.css"
// import "./css/quinn.css"
// import "./css/simple-line-icons.css"
import "./css/style-dark.css"



import OrixLogo from "./img/orix-logo.png"
import OrixLogoblak from "./img/black-logo.png"
import { Link } from 'react-router-dom';
import { FaBars, FaDownload } from 'react-icons/fa';

const Header = () => {
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
        <header className="two three slideup" id="stickyHeader">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2">
                        <div className="logo-icon">
                            <Link className="magic-hover magic-hover__square" to="/">
                                <img className="light" src={OrixLogo} alt="logo" />
                                <img className="drak" src={OrixLogoblak} alt="logo" />
                            </Link>
                            <Link to="javascript:void(0)" className="bar-menu magic-hover magic-hover__square">
                                <i className="fa-solid fa-bars" onClick={toggleMenu} ><FaBars/></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="menu-bar">
                        <nav>
                        
            <ul>
                <li className="menu-item-has-children">
                    <Link className="magic-hover magic-hover__square" to="#">Home</Link>
                    <ul>
                       <li><Link className="magic-hover magic-hover__square" to="/">Home 1</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/Home_2">Home 2</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/Home_3">Home 3</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/Home_4">Home 4 ( Light )</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to=" ">Home 4 ( Dark )</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/test">test</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link className="magic-hover magic-hover__square" to="#">Services</Link>
                    <ul>
                        <li><Link className="magic-hover magic-hover__square" to="/Services">Services</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/Services_Details">Services Details</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link className="magic-hover magic-hover__square" to="#">Portfolio</Link>
                    <ul>
                        <li><Link className="magic-hover magic-hover__square" to="/Portfolio_1">Portfolio 1</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/Portfolio_2">Portfolio 2</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/Portfolio_3">Portfolio 3</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link className="magic-hover magic-hover__square" to="#">Blog</Link>
                    <ul>
                        <li><Link className="magic-hover magic-hover__square" to="/OurBlog">Our Blog</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/BlogDetails_1">Blog Details 1</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/BlogDetails_2">Blog Details 2</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link className="magic-hover magic-hover__square" to="#">Pages</Link>
                    <ul>
                        <li><Link className="magic-hover magic-hover__square" to="/About">About</Link></li>
                        <li><Link className="magic-hover magic-hover__square" to="/PricingPlans">Pricing Plans</Link></li>
                    </ul>
                </li>
                <li><Link className="magic-hover magic-hover__square" to="/Contact">Contact</Link></li>
            </ul>
        </nav>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="extras">
                            <Link to="javascript:void(0)" id="desktop-menu" className="magic-hover magic-hover__square menu-btn">
                                <i className="fa-solid fa-bars"> <FaBars/></i>
                            </Link>
                            <Link to="pdf/orix.pdf" className="magic-hover magic-hover__square button download button--moema button--text-thick button--text-upper button--size-s" target="_blank">
                                <i className="fa-solid fa-download"></i>Download CV
                            </Link>
                        </div>
                    </div>
                    <div className="menu-wrap">
                        <div className="menu-inner ps ps--active-x ps--active-y">
                            {/* Menu content */}
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
    );
};

export default Header;
