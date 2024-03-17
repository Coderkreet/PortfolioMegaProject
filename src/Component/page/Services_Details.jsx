import React, { useEffect } from 'react'
import FooterSection from '../FooterSection'

import AOS from "aos";
import "aos/dist/aos.css";


const Services_Details = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <section data-aos="fade-up" id="particles-js" className="blog-detail pattern gap ServiceImg" style={{  }}>
      <div className="container">
        <div className="blog-detail-data gap no-bottom">
          <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">Services Details</h2>
          <ul data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
            <li><a className="magic-hover magic-hover__square" href="index.html"><i className="fa-solid fa-house"></i>home</a></li>
            <li><a className="magic-hover magic-hover__square" href="#"><span>/</span> Services Details</a></li>
          </ul>
        </div>
      </div>
    </section>

{/* bolg */}
<section data-aos="fade-up" className="blog-details-one services-detail">
      <div className="container">
        <div className="row gap no-bottom">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <div className="photography">
              <h3>Stunning Design</h3>
              <p>
                Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmes
                esymagnam maores.magnam maores. Lorem ipm dolor amet, consec
                y Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilm
                tetur magm maiores.Ipsa dolor sit ilmesy Lorem ipm dolor amet, cons
                ectetur magm maiores.Ipsa dolor sit ilmesymagnam maores.magnam
                ipm dolor amet, consectetur maores.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
            <div className="photography">
              <h3>Service Benefits</h3>
              <ul className="time-number aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                <li className="no-top">Motivation and encouragement from time to time</li>
                <li>1000 motivational quotes in the database</li>
                <li>If you don’t need either of these at the moment, you certainly have friends</li>
                <li>You and help uplift your day.</li>
                <li>Provide a motivational quote for you as you place your head on the pillow</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="img-data our">
              <img alt="services" src="https://via.placeholder.com/1296x617" />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="photography">
              <h4>Service Moto</h4>
              <p>
                lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash
                Caramels chocolatsweet roll tart. lotsie roll dragée b onbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice oat a
                ake biscuit jesms tiramisu jelly dash Caramelsn t. Chupa chups loream sesame snaps jelly tiramiipsum a olor sit amet souffl liquorice oat cake biscuit jesms
                ls chocolatsweet roll tart. lotsie roll dragée b onbon croisnt. Chupa chups l tiramis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section  data-aos="fade-up" className="provide-section gap no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="provide services-list">
              <h3>What We Provide</h3>
              <ul>
                <li><i className="fa-solid fa-check"></i>Motivation and encouragement from time to time</li>
                <li><i className="fa-solid fa-check"></i>Pride in our works and excellences</li>
                <li><i className="fa-solid fa-check"></i>Don’t need either of these at the moment, you certainly have friends</li>
                <li><i className="fa-solid fa-check"></i>Culture of mutual trust and respect</li>
                <li><i className="fa-solid fa-check"></i>Provide a motivational quote for you as you place your head</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="profile-provide-img hover06">
              <figure>
                <img alt="profile" src="https://via.placeholder.com/636x389" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterSection/>
    </div>
  )
}

export default Services_Details
