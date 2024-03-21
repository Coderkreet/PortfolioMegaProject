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


const HaderSecound = () => {
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
  const [Skill, setSkill] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();

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


  
  

  const ArticalDetails = [
    {
        name: 'List of Brands',
       title :'Digital Web'    },
    {
        name: 'Creative Studio',
       title :'Website Design & Development'    },
    {
        name: 'Mobile Development',
       title :'Digital Web'    },
    {
        name: 'Grid Mockupp',
       title :'Motion'    },
    {
        name: 'Grid Mockupp',
       title :'Motion'    },
]


  return (

<div>
<div className="row align-items-center">
      <div
        className="col-lg-6 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <ul className="age home-three">
          <li>
            <h6>
              Age:<span>29</span>
            </h6>
          </li>
          <li>
            <h6>
              Residence:<span>USA</span>
            </h6>
          </li>
          <li>
            <h6>
              Address:<span>88 Some Street, Some Town</span>
            </h6>
          </li>
          <li>
            <h6>
              E-mail:<span>email@example.com</span>
            </h6>
          </li>
          <li>
            <h6>
              Phone:<span>+0123 123 456 789</span>
            </h6>
          </li>
          <li>
            <h6>
              Freelance:<span>Available</span>
            </h6>
          </li>
        </ul>
      </div>
      <div
        className="col-lg-6 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div className="about-img-full">
          <img alt="about-img" src="https://via.placeholder.com/628x410" />
        </div>
      </div>
    
      {
Skill.map((data)=>(

  <div
        className="col-lg-3 col-md-6 col-sm-6"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="home-one-progress home-3-pro">
          <div className="count-time">
            <h2
              className="timer count-title count-number"
              data-to={50}
              data-speed={2000}
            >
              {data.percentage}
            </h2>
            <span>%</span>
          </div>
          <h5>{data.name}</h5>
          <div className="meter cadetblue">
            <span data-progress={50} style={{ width: `${data.percentage}%` }} />
          </div>
        </div>
      </div>
))

}
  
    </div>
</div>

  );
}

export default HaderSecound;
