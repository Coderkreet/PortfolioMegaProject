import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import  dots  from "./img/dots.png";

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const jsonData = await response.json();

          setServices(jsonData.user.services)
    
        
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
      <section className="services gap no-top">
      <Container>
        <div className="hading" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <img alt="dots" src={dots} />
          <p>What We Do</p>
          <h2>Our Services</h2>
        </div>
        <Row>
          {
            services.map((bar , index) =>(
 <Col xl={4} lg={6} md={6} sm={12} data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <div className="service-data">
            <img src={bar.image.url} style={{height :"250px" , width:"250px"}  } alt=""/>  
              <h5><a className="magic-hover magic-hover__square" href="services-details.html">{bar.name}</a></h5>
              <p>{bar.desc}</p>
              <p style={{color : "green" }}>{bar.charge}</p>
            </div>
          </Col>

            ))}
        
     

          {/* Repeat for other columns */}
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default ServicesSection
