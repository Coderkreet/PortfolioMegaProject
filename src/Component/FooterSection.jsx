import React from 'react';

import "./css/anitabs.css"
import "./css/style.css"
import "./css/color.css"
import "./css/responsive.css"
import "./css/nice-select.css"
import "./css/perfect-scrollbar.css"

import orixLogo from './img/logo.png';
import { FaFacebookF, FaLinkedin, FaTwitter, FaVimeo } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <div>
      <footer className="gap footimg">
        <div className="container">
          <div className="footer-data" style={{ height: "100px",  paddingBottom:"250px"}}> {/* Adjust the height here */}
            <img alt="logo" src={orixLogo} style={{ height: "100px" }}  /> {/* Use the imported logo */}
            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi accumsan ipsuy a odio tincdunt ilmauctor Class aptent taciti sociosqu ads Etiam.</p>
            <ul className="social-media-footer">
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-facebook-f fb"><FaFacebookF /></i>Facebook</a></li>
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-twitter tw"><FaTwitter /></i> Twitter</a></li>
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-vimeo-v vi"><FaVimeo /></i> Vimeo</a></li>
              <li><a className="magic-hover magic-hover__square" href="#"><i className="fa-brands fa-linkedin-in in"><FaLinkedin /></i>Linked In</a></li>
            </ul>
            <h6>© 2022 CV Resume<i className="fa-solid fa-heart"></i>By Winsfolio, All Rights Reserved</h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
