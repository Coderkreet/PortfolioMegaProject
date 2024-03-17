import React, { useEffect, useState } from 'react'
import  sine  from "./img/sine.png";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import Aos from 'aos';
const About_Section = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [skill, setSkill] = useState([]);
 
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
     
        
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>
      <section className="about gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                        <div className="about-mee">
                            <h2>About Me</h2>
                            <p>I like creating cool design projects.</p>
                            <ul className="social-media-icon">
                                <li>
                                    <a href="pdf/orix.pdf" className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s" target="_blank">
                                        <i className="fa-solid fa-download"></i>Download CV
                                    </a>
                                </li>
                                <li><a className="f magic-hover magic-hover__square" href="javascript:void(0)"><i className="fa-brands fa-facebook-f"></i><FaFacebookF/></a></li>
                                <li><a className="in magic-hover magic-hover__square" href="javascript:void(0)"><i className="fa-brands fa-instagram"></i><FaInstagram/></a></li>
                                <li><a className="t magic-hover magic-hover__square" href="javascript:void(0)"><i className="fa-brands fa-twitter"></i> <FaTwitter/></a></li>
                            </ul>
                            <ul className="age">
                                <li><h6>Age:<span>29</span></h6></li>
                                <li><h6>Residence:<span>USA</span></h6></li>
                                <li><h6>Address:<span>{data.address}</span></h6></li>
                                <li><h6>E-mail:<span>portfolio3@gmail.com</span></h6></li>
                                <li><h6>Phone:<span>{data.phoneNumber}</span></h6></li>
                                <li><h6>Freelance:<span>Available</span></h6></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
                        <div className="progress-data">
                            <p>{data.description}</p>
                            <img alt="sine" src={sine} />
                            <div className="progress-bara-data">
                                <div className="row">
                                    

                                <div className="row">
            {skill.map((bar, index) => (
                <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                    <div className="home-one-progress">
                        <div className="count-time">
                            <h2 className="timer count-title count-number" to={bar.percentage} data-speed="2000">{bar.percentage}</h2><span>%</span>
                        </div>
                        <h5>{bar.name}</h5>
                        <div className="meter cadetblue">
                            <span data-progress={bar.percentage} style={{ width:`${bar.percentage}` }}></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About_Section
