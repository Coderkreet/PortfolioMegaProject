import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaLocationArrow } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import  dots  from "./img/dots.png";

const REsumeSection = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timeline, setTimeline] = useState([]);
    const extractYearAndMonth = (dateString) => {
        const regex = /(\d{4}-\d{2})/; // Match the pattern "yyyy-mm"
        const match = dateString.match(regex);
        if (match) {
          return match[0]; // Return the matched string (year and month)
        } else {
          return "Invalid Date";
        }
      }

// data fatch


const fetchData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
   
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


  return (
    <div>
         <section className="my-resume gap">
      <Container>
        <div className="hading" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <img alt="dots" src={dots}/>
          <p>Professional Experience</p>
          <h2>My Resume</h2>
        </div>
        <Row>
          <Col lg={6} md={12} sm={12} data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <div className="resume-data">
              <div className="headings resume">
                <h3>Education</h3>
              </div>
              <div className="education">
                <h5>2012 to 2014</h5>
                <p>Bachelor Degree</p>
                <div className="studies">
                  <h6>University of Studies</h6>
                  <p>Lorem ipsum indolor st amet, cmetc
                                                    ur adips locing elit, sedi dinm indolo
                                                    sum indolor st ailmes.</p>
                </div>
              </div>
              <div className="education">
                <h5>2010 to 2012</h5>
                <p>Master Degree</p>
                <div className="studies">
                  <h6>University of South Education</h6>
                  <p>Lorem ipsum indolor st amet, cmetc
                                                    ur adips locing elit, sedi dinm indolo
                                                    sum indolor st ailmes.</p>
                </div>
              </div>
              <div className="education end">
                <h5>2008 to 2010</h5>
                <p>Advanced Post Graduate</p>
                <div className="studies">
                  <h6>University of South Education</h6>
                  <p>Lorem ipsum indolor st amet, cmetc
                                                    ur adips locing elit, sedi dinm indolo
                                                    sum indolor st ailmes.</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12} data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
            <div className="resume-data">
              <div className="headings resume">
                <h3>Experience</h3>
              </div>
              {
              timeline.map((data )=>(
               

        <div className="education">
                <h5>{ extractYearAndMonth(data.startDate)} to <span>{ extractYearAndMonth(data.endDate)}</span></h5>
                <p>{data.jobTitle}</p>
                <div className="studies">
                  <h6>{data.company_name}</h6>
                  <p>{data.summary}</p>
                  <p><FaLocationArrow/> Location : {data.jobLocation}</p>
                </div>
              </div>

              ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default REsumeSection
