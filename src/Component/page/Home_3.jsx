import React, { useEffect, useState } from 'react'
import "../css/SkillBar.css"


const Home_3 = () => {


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


    // progress bar
  

    
      useEffect(() => {
        const meters = document.querySelectorAll('.meter span');
    
        meters.forEach(meter => {
          const progress = meter.getAttribute('data-progress');
          meter.style.width = progress + '%';
        });
      }, []);
  return (
    <div>
    <div className="progress-bara-data">
      <div className="row">
        {
          skill.map((dataa)=>(

<div className="col-lg-6 col-md-6 col-sm-6">
          <div className="home-one-progress">
            <div className="count-time">
              <h2 className="timer count-title count-number" data-to="50" data-speed="2000">{dataa.percentage}</h2><span>%</span>
            </div>
            <h5>{dataa.name}</h5>
            <div className="meter cadetblue">
              <span data-progress={dataa.percentage}></span>
            </div>
          </div>
        </div>

          ))
        }

        
      </div>
    </div>
  </div>

  )
}


export default Home_3
