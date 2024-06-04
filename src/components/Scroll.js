// src/WemofyPage.js

import React from 'react';
import './Scroll.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image1 from './aitscroll1.jpg'

const Scroll = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
    autoplay: true, 
    autoplaySpeed: 3000
  };

  return (
    <div className="wemofy-container">
      <Slider {...settings}>
        <div className="slide">
          <div className="content">
            <div className="text">
              <h1>Artificial Intelligence in Healthcare</h1>
              <p>AI is revolutionizing the healthcare industry by providing better diagnostics, personalized treatments, and more efficient patient care. With AI-powered tools, doctors can make more informed decisions and improve patient outcomes.</p>
            </div>
           
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="text">
              <h1>Machine Learning in Finance</h1>
              <p>Machine learning algorithms are transforming the finance sector by enhancing fraud detection, risk management, and personalized banking services. These technologies help financial institutions to stay competitive and secure in a rapidly evolving market.</p>
            </div>
            
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="text">
              <h1>AI and ML in Education</h1>
              <p>AI and ML are paving the way for personalized learning experiences. Adaptive learning systems can analyze student performance and provide tailored content to enhance learning outcomes, making education more accessible and effective.</p>
            </div>
            
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Scroll;
