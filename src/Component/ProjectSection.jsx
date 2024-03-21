import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaLocationArrow, FaSpinner } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import  dots  from "./img/dots.png";


const ProjectSection = () => {
 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [project, setProject] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();

      setProject(jsonData.user.projects)
     
    
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

    
    <section className="my-project hom3 gap">
  <div className="container">
    <div
      className="hading"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={300}
    >
      <img alt="dots" src={dots} />
      <p>Collection of my project</p>
      <h2>Work Showcase</h2>
    </div>
    <div className="portfolios">
      <div className="filters portfolio-controllers-container">
        <div
          className=" portfolio-controllers wow fadeLeft button-group js-radio-button-group"
          data-wow-duration="1s"
          data-wow-delay=".1s"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-duration={400}
          data-filter-group="color"
        >
         
      
      
        </div>
      </div>
      <div
        className="grid row align-items-center"
        data-aos="fade-up"
        data-aos-delay={400}
        data-aos-duration={500}
      >
     
{

project.map((data)=>(

  <div className="col-lg-4 Design Development">
          <div className="portfolio-detail">
            <div className="portfolio-img hover06">
              <figure>
                <img
                  alt="profile img"
                  src={data.image.url}    //366x271
                />
              </figure>
              <a className="magic-hover magic-hover__square" href="#">
                {data.title}
              </a>
              <p>Website Design &amp; Development</p>
              <p>Use : {data.techStack} </p>
              
            </div>
          </div>
         </div>

))

}

      

      </div>
    </div>
    <div className="load-button">
      <a
        href="#"
        className="button button--moema button--text-thick button--text-upper button--size-s"
      >
        <i className="fa-solid fa-spinner" > <FaSpinner/></i> Load More
      </a>
    </div>
  </div>
</section>

  );
}

export default ProjectSection;
