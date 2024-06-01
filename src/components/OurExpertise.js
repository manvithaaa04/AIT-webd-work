import React from 'react';
import { FaBrain, FaLanguage, FaEye, FaChartLine, FaNetworkWired, FaRobot, FaCogs, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';
import './OurExpertise.css';

function OurExpertise() {
  return (
    <section id="our-expertise" className="OurExpertise">
      <h2>Our Expertise</h2>
      <br></br><br></br>
      <div className="expertise-container">
        <div className="expertise-item">
          <FaBrain className="expertise-icon" />
          <h3>Machine Learning</h3>
          <p>Automate business processes and perform advanced data analytics with ML development services.</p>
        </div>
        <div className="expertise-item">
          <FaLanguage className="expertise-icon" />
          <h3>Natural Language Processing</h3>
          <p>Develop algorithms to extract meaning from data and provide unsupervised Machine Learning experiences.</p>
        </div>
        <div className="expertise-item">
          <FaEye className="expertise-icon" />
          <h3>Computer Vision</h3>
          <p>Enable machines to interpret and make decisions based on visual data with our computer vision solutions.</p>
        </div>
        <div className="expertise-item">
          <FaChartLine className="expertise-icon" />
          <h3>Predictive Analytics</h3>
          <p>Leverage historical data to predict future outcomes and trends, helping you make informed decisions.</p>
        </div>
        <div className="expertise-item">
          <FaNetworkWired className="expertise-icon" />
          <h3>Deep Learning</h3>
          <p>Utilize advanced neural networks to solve complex problems and achieve state-of-the-art results.</p>
        </div>
        <div className="expertise-item">
          <FaRobot className="expertise-icon" />
          <h3>Robotic Process Automation</h3>
          <p>Streamline operations by automating repetitive tasks with our RPA solutions.</p>
        </div>
        <div className="expertise-item">
          <FaCogs className="expertise-icon" />
          <h3>AI Integration</h3>
          <p>Seamlessly integrate AI technologies into your existing systems to enhance functionality and performance.</p>
        </div>
        <div className="expertise-item">
          <FaShieldAlt className="expertise-icon" />
          <h3>AI Security</h3>
          <p>Implement AI-driven security solutions to protect your data and infrastructure from threats.</p>
        </div>
        <div className="expertise-item">
          <FaMobileAlt className="expertise-icon" />
          <h3>AI in Mobile Apps</h3>
          <p>Enhance your mobile applications with AI features for better user engagement and experience.</p>
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;
