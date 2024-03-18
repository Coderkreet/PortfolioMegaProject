import React from 'react'
import Button from 'react-bootstrap/Button';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import HeroSection from './Component/HeroSection';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';


// css file 
import "./Component/css/anitabs.css"
import "./Component/css/style.css"
import "./Component/css/color.css"
import "./Component/css/responsive.css"
import "./Component/css/nice-select.css"
import "./Component/css/perfect-scrollbar.css"

import About from './Component/page/About';
import Services from './Component/page/Services';
import Home_2 from './Component/page/Home_2';
import Home_3 from './Component/page/Home_3';
import Services_Details from './Component/page/Services_Details';
import Portfolio_1 from './Component/page/Portfolio_1';
import Portfolio_2 from './Component/page/Portfolio_2';
import Portfolio_3 from './Component/page/Portfolio_3';
import BlogDetails_1 from './Component/page/BlogDetails_1';
import BlogDetails_2 from './Component/page/BlogDetails_2';
import OurBlog from './Component/page/OurBlog';
import PricingPlans from './Component/PricingPlans';
import Contact from './Component/Contact';
import Testimonials from './Component/Testimonials';
const App = () => {
  const router = createBrowserRouter([
    {
    
      path :"/",
      element : <>   <Header/> <HeroSection/> </>
      
    },
    {
      path : "/test",
      element : <Testimonials/>
    },
    {
      path :"/home_2",
      element : <>     <Home_2/> </>
    },
    {
      path :"/home_3",
      element : <>   <Header/> <Home_3/>   </>
    },
    {
      path :"/Services",
      element : <>   <Header/> <Services/>   </>
    },
    {
      path :"/About",
      element : <>   <Header/> <About/>  </>
    }
    ,
    {
      path :"/Portfolio_1",
      element : <>   <Header/> <Portfolio_1/>  </>
    }
    ,
    {
      path :"/Portfolio_2",
      element : <>   <Header/> <Portfolio_2/>  </>
    }
    ,
    {
      path :"/Portfolio_3",
      element : <>   <Header/> <Portfolio_3/>  </>
    }
    ,
    {
      path :"/BlogDetails_1",
      element : <>   <Header/> <BlogDetails_1/>  </>
    }
    ,
    {
      path :"/OurBlog",
      element : <>   <Header/> <OurBlog/>  </>
    }
    ,
    {
      path :"/BlogDetails_2",
      element : <>   <Header/> <BlogDetails_2/>  </>
    }
    ,
    {
      path :"/PricingPlans",
      element : <>   <Header/> <PricingPlans/>  </>
    }
    ,
    {
      path :"/Services_Details",
      element : <>   <Header/> <Services_Details/>  </>
    }
    ,
    {
      path :"/Contact",
      element : <>   <Header/> <Contact/>  </>
    }
    
    ])

  return (



    <div  className='hello'>
    
      <RouterProvider router={router} />
    </div>
  )
}

export default App
