import React, { useEffect, useState } from 'react';
import { FaAlignRight, FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter, FaVimeo } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css"
import { Link } from 'react-router-dom';

//img
import  sine  from "./img/sine.png";
import  dots  from "./img/dots.png";
import  quote_1  from "./img/quote-1.png";
import orixLogo from './img/logo.png'
import { Container, Row, Col, Carousel } from 'react-bootstrap'; // Assuming you are using Bootstrap for layout
import FooterSection from './FooterSection';
import REsumeSection from './REsumeSection';
import ServicesSection from './ServicesSection';
import About_Section from './About_Section';
import ProjectSection from './ProjectSection';
// import { FaSpinner } from 'react-icons/fa';

const HeroSection = () => {

  const extractYearAndMonth = (dateString) => {
    const regex = /(\d{4}-\d{2})/; // Match the pattern "yyyy-mm"
    const match = dateString.match(regex);
    if (match) {
      return match[0]; // Return the matched string (year and month)
    } else {
      return "Invalid Date";
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState([]);
  const [services, setServices] = useState([]);
  const [timeline, setTimeline] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData.user.about);
      setSkill(jsonData.user.skills)
      setServices(jsonData.user.services)
      setTimeline(jsonData.user.timeline)
    
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  console.log(timeline)

  
  
  // const progressBarsData = [
    //     { label: 'Graphic Design', percentage: 50 },
    //     { label: 'Development', percentage: 75 },
    //     { label: 'Marketing Ideas', percentage: 38 },
    //     { label: 'Web Management', percentage: 63 }
    // ];
    // const progressBarsData = skill;
    // console.log(services);

    useEffect(() => {
      AOS.init();
    }, []);
   
    return (
        <div>

      {/* hero Section */}
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                        <div className="user-data">
                            <h2>Hello I Am</h2>
                            <h1>{data.name}</h1>
                            <p>{data.title}</p>
                            <a href="javascript:void(0)" className="lightbox-toggle magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Start Consulting</a>
                            <span>Available for Freelance</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                        <div className="hero-section-img">
                            <img style={ {width : "530px", height:"530px"}} alt="hero-girl-img" src={data.avatar?.url} />
                            <div className="happy-satisfied">
                                <h2>10K</h2>
                                <p>Happy Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

{/* about section */}
<About_Section/>


{/* services */}

<ServicesSection/>



    {/*resume  */}
<REsumeSection/>

    {/* project */}
<ProjectSection/>

    {/* satisfied */}
    <section className="satisfied gap" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="customers gap">
              <h2>1M+ Satisfied Customers</h2>
              <p>Vestibulum vitae lorim tellus nec dui dictum lorim ac, place uilm rat Lorse ipsom</p>
            </div>
          </Col>
          <Col lg={7}>
            <Carousel className="custome owl-carousel owl-theme">
              <Carousel.Item>
                <div className="edison">
                  <p>We help our clients from the definition of their strategy to the realization of their digital ecosystem. At the heart of our approach is the constant search for the juncture between aesthetic.</p>
                  <div className="quote-img">
                    <img alt="quote" src={quote_1} />
                    <div>
                      <h4>Edison Cavani</h4>
                      <span>Product Management at Spotify</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="edison">
                  <p>We help our clients from the definition of their strategy to the realization of their digital ecosystem. At the heart of our approach is the search for the juncture between aesthetic.</p>
                  <div className="quote-img">
                    <img alt="quote" src={quote_1} />
                    <div>
                      <h4>thomas smith</h4>
                      <span>Product Management at Spotify</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="edison">
                  <p>We help our clients from the definition of their strategy to the realization of their digital ecosystem. At the heart of our approach is the constant search for the juncture between aesthetic.</p>
                  <div className="quote-img">
                    <img alt="quote" src="img/quote-1.png" />
                    <div>
                      <h4>willimes mazkar</h4>
                      <span>Product Management at Spotify</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>


    {/* Artical */}
    <section className="recent-articles gap">
            <Container>
                <div className="hading" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                    <img alt="dots" src={dots} />
                    <p>News & Blog</p>
                    <h2>Recent Articles</h2>
                </div>
                <Row>
                    <Col xl={4} lg={6} md={12} sm={12} data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                        <div className="blog-data">
                            <img alt="blog img" src="https://via.placeholder.com/390x269" />
                            <div className="message-icon"><i className="fa-solid fa-message"></i><span>12</span></div>
                            <h6>December 5, 2023 <span>|</span> John Smith</h6>
                            <h4><a className="magic-hover magic-hover__square" href="#">Interview Photographer Mark Seliger</a></h4>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach.</p>
                            <a className="magic-hover magic-hover__square" href="#"><i className="fa-solid fa-angle-right"><FaArrowRight/></i></a>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12} data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
                        <div className="blog-data">
                            <img alt="blog img" src="https://via.placeholder.com/390x269" />
                            <div className="message-icon"><i className="fa-solid fa-message"></i><span>22</span></div>
                            <h6>December 5, 2023 <span>|</span> John Smith</h6>
                            <h4><a className="magic-hover magic-hover__square" href="#">Professionals with a Global Mindset</a></h4>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach.</p>
                            <a className="magic-hover magic-hover__square" href="#"><i className="fa-solid fa-angle-right"><FaArrowRight/></i></a>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={12} sm={12} data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
                        <div className="blog-data">
                            <img alt="blog img" src="https://via.placeholder.com/390x269" />
                            <div className="message-icon"><i className="fa-solid fa-message"></i><span>12</span></div>
                            <h6>December 5, 2023 <span>|</span> John Smith</h6>
                            <h4><a className="magic-hover magic-hover__square" href="#">Reimagine, Restructure and Renew Business</a></h4>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach.</p>
                            <a className="magic-hover magic-hover__square" href="#"><i className="fa-solid fa-angle-right"><FaArrowRight/></i></a>
                        </div>
                    </Col>
                </Row>
                <div className="load-button" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                    <button href="#" className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">View All News</button>
                </div>
            </Container>
        </section>

        {/* form */}

        <section className="from-you gap no-top">
            <div className="container">
                <div className="hading" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                    <p>Have Question Contact Us?</p>
                    <h2>Love to Hear From You, Get in Touch!</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                        <div className="e-mail">
                            <div className="icon-box"><i className="fa-solid fa-envelope"> <FaEnvelope/></i></div>
                            <div>
                                <h6>Phone No</h6>
                                <a className="magic-hover magic-hover__square" href="mailto:username@domain.com">username@domain.com</a>
                            </div>
                        </div>
                        <div className="e-mail">
                            <div className="icon-box"><i className="fa-solid fa-phone"><FaPhone/></i></div>
                            <div>
                                <h6>Email Address</h6>
                                <a className="magic-hover magic-hover__square" href="callto:+(123)4567890">+(123) 456 7890</a>
                            </div>
                        </div>
                        <div className="e-mail">
                            <div className="icon-box"><i className="fa-solid fa-location-dot"><FaLocationArrow/></i></div>
                            <div>
                                <h6>Location</h6>
                                <a className="magic-hover magic-hover__square" href="javascript:void(0)">Block Street No 2101 USA</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
                        <div className="your-name blureImg">
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
                                <textarea placeholder="Your Message *"></textarea>
                                <button className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* footer */}
   <FooterSection/>

        </div>
    );
};

export default HeroSection;
