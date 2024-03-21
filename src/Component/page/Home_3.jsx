import React from 'react'
import FooterSection from '../FooterSection'
import HomeImg3 from '../img/home-img-3.png'
import  dots  from "../img/dots.png";
import  quote_1  from "../img/quote-1.png";
import { FaEnvelope, FaFacebook, FaLocationArrow, FaPhone, FaSpinner, FaTwitter } from 'react-icons/fa';
import ProjectSection from '../ProjectSection';
import HaderSecound from '../HaderSecound';
import SkillSection from './SkillSection';
import Services from './Services';
import ServicesSection from '../ServicesSection';
import About_Section from '../About_Section';


const Home_3 = () => {
  return (
    <div>
      <section
  className="hero-two-section gap no-bottom"
  style={{ backgroundImage: "url(https://via.placeholder.com/1920x832)" }}
>
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-lg-5"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="hello-im">
          <h3 style={{top :"-5px"}}>A</h3>
          <span>Hello I’M</span>
          <h2>Allison Parker</h2>
          <h6>Web Designer &amp; Photographer</h6>
          <a className="magic-hover magic-hover__square" href="">
            infoname@domain.com
          </a>
          <p>36 East 8th Street, New York, NY 10003, United States</p>
          <ul className="social-media-footer head">
            <li>
              <a className="magic-hover magic-hover__square" href="#">
                <i className="fa-brands fa-facebook-f fb" ><FaFacebook/></i>
              </a>
            </li>
            <li>
              <a className="magic-hover magic-hover__square" href="#">
                <i className="fa-brands fa-twitter tw" > <FaTwitter/></i>
              </a>
            </li>
            <li>
              <a className="magic-hover magic-hover__square" href="#">
                <i className="fa-brands fa-vimeo-v vi" ><FaTwitter/> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-lg-6"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="home-img">
          <img alt="man" src={HomeImg3} />
        </div>
      </div>
    </div>
  </div>
</section>

{/* <section className="about gap">
  <div className="container">
    <div
      className="hading"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={300}
    >
      <img alt="dots" src={dots} />
      <p>Who i am</p>
      <h2>About My Resume</h2>
    </div>
   <SkillSection/>
  </div>
</section> */}

<About_Section/>
<ServicesSection/>

<section class="reviews">
	<div class="container">
		<div class="hading" data-aos="fade-up"  data-aos-delay="200" data-aos-duration="300">
			<img alt="dots" src={dots}/>
			<p>Testimonials</p>
			<h2>Client’s Reviews</h2>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up"  data-aos-delay="200" data-aos-duration="300">
						<div class="edison">
							<p>We help our clients from the definition of 
									their strategy to the realization of their digital 
									ecosystem. At the heart of our approach is 
									the constant search for the juncture between 
									aesthetic.</p>
									<div class="quote-img">
										<img alt="quote" src={quote_1}/>
										<div>
											<h4>Edison Cavani</h4><span>
											Product Management at Spotify</span>
										</div>
										</div>
						</div>
			</div>
			<div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up"  data-aos-delay="300" data-aos-duration="400">
						<div class="edison">
							<p>We help our clients from the definition of 
									their strategy to the realization of their digital 
									ecosystem. At the heart of our approach is 
									the constant search for the juncture between 
									aesthetic.</p>
									<div class="quote-img">
										<img alt="quote" src={quote_1}/>
										<div>
											<h4>Edison Cavani</h4><span>
											Product Management at Spotify</span>
										</div>
										</div>
						</div>
			</div>
		</div>
	</div>
</section>

<ProjectSection/>

<section id="contact-one" className="from-you gap no-top">
  <div className="container">
    <div
      className="hading"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={300}
    >
      <p>Have Question Contact Us?</p>
      <h2>Love to Hear From You, Get in Touch!</h2>
    </div>
    <div className="row align-items-center">
      <div
        className="col-lg-4 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="e-mail">
          <div className="icon-box">
            <i className="fa-solid fa-envelope" ><FaEnvelope/> </i>
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
            <i className="fa-solid fa-phone" ><FaPhone/></i>
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
            <i className="fa-solid fa-location-dot" > <FaLocationArrow/></i>
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
      <div
        className="col-lg-8 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div
          className="your-name"
          style={{ backgroundImage: "url(./img/blur-1.png)" }}
        >
          <form className="one">
            <input type="text" name="YourName" placeholder="Your Name *" />
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <input type="text" name="Email" placeholder="Your Email *" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <input type="text" name="Phone" placeholder="Phone No *" />
              </div>
            </div>
            <select className="nice-select Advice">
              <option>Select Topic</option>
              <option>Select Topic 1</option>
              <option>Select Topic 2</option>
              <option>Select Topic 3</option>
              <option>Select Topic 4</option>
            </select>
            <textarea placeholder="Your Message *" defaultValue={""} />
            <button className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<FooterSection/>
    </div>
  )
}

export default Home_3
