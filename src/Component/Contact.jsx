import React from 'react'
import { FaEnvelope, FaPhone, FaSearchLocation } from 'react-icons/fa'
import FooterSection from './FooterSection'

const Contact = () => {
  return (
    <div>
      <section
  id="particles-js"
  className="blog-detail pattern gap"
  style={{ backgroundImage: "url(https://via.placeholder.com/1920x530)" }}
>
  <div className="container">
    <div className="blog-detail-data gap no-bottom">
      <h2 data-aos="fade-up" data-aos-delay={200} data-aos-duration={300}>
        Contact Us
      </h2>
      <ul data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
        <li>
          <a className="magic-hover magic-hover__square" href="index.html">
            <i className="fa-solid fa-house" />
            home
          </a>
        </li>
        <li>
          <a className="magic-hover magic-hover__square" href="#">
            <span>/</span> Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="address gap">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="service-data">
          <div className="svg-img">
           <FaPhone/>
          </div>
          <h5>Phone Number</h5>
          <a
            className="magic-hover magic-hover__square"
            href="callto:(123)4567890"
          >
            +(123) 456 7890
          </a>
          <br />
          <a
            className="magic-hover magic-hover__square"
            href="callto:(123)4567890"
          >
            +(123) 456 7890
          </a>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div className="service-data">
          <div className="svg-img">
             <FaEnvelope/>
          </div>
          <h5>Email Address</h5>
          <a
            className="magic-hover magic-hover__square"
            href="mailto:winsfolio@gmail.com"
          >
            winsfolio@gmail.com
          </a>
          <br />
          <a
            className="magic-hover magic-hover__square"
            href="mailto:winsfolio@gmail.com"
          >
            winsfolio@gmail.com
          </a>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-delay={400}
        data-aos-duration={500}
      >
        <div className="service-data">
          <div className="svg-img">
           <FaSearchLocation/>
          </div>
          <h5>Office Location</h5>
          <p>123 New York E Block 12670, Street 2101 USA</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
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
    <div className="row">
      <div
        className="offset-xl-1 col-xl-10 col-lg-12"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div
          className="your-name contact"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={300}
        >
          <form className="one">
            <input type="text" name="YourName" placeholder="Your Name *" />
            <div className="row">
              <div className="col-lg-6">
                <input type="text" name="Email" placeholder="Your Email *" />
              </div>
              <div className="col-lg-6">
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
            <textarea defaultValue={"Your Message *"} />
            <button className="magic-hover magic-hover__square button button--moema button--text-thick button--text-upper button--size-s">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <div
      className="contact-map"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={300}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689446.104646556!2d28.705460424349365!3d48.83127549941125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2s!4v1661009847728!5m2!1sen!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

<div className="clients-data">
  <div className="container">
    <div
      className="row client-logo owl-carousel owl-theme"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={300}
    >
      <div className="col-lg-3 item">
        <div className="clients-color">
          <img alt="clients" src="https://via.placeholder.com/278x128" />
        </div>
      </div>
      <div className="col-lg-3 item">
        <div className="clients-color">
          <img alt="clients" src="https://via.placeholder.com/278x128" />
        </div>
      </div>
      <div className="col-lg-3 item">
        <div className="clients-color">
          <img alt="clients" src="https://via.placeholder.com/278x128" />
        </div>
      </div>
      <div className="col-lg-3 item">
        <div className="clients-color">
          <img alt="clients" src="https://via.placeholder.com/278x128" />
        </div>
      </div>
      <div className="col-lg-3 item">
        <div className="clients-color">
          <img alt="clients" src="https://via.placeholder.com/278x128" />
        </div>
      </div>
    </div>
  </div>
</div>
<FooterSection/>

    </div>
  )
}

export default Contact
