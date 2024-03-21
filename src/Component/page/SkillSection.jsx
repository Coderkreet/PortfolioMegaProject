import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaLocationArrow, FaSpinner } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import  dots  from "../img/dots.png";


const SkillSection = () => {
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
<div className="hading" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300" style={{marginTop :"3.5rem"}}>
          <img alt="dots" src={dots}  />
          <h2 style={{marginTop :"2rem"}}> My Skill </h2>
        </div>
  
        <div className="progress-bara-data">
<div className="row align-items-center">
    
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
</div>

  );
}

export default SkillSection;
