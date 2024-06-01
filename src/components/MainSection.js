import React from 'react';
import './MainSection.css';
import aiImage from './aitai.jpg';

function MainSection() {
  return (
    <section id="main-section" className="MainSection">
        <div className="container">
      <div className="content">
        <h1>Artificial Intelligence <br /> & Machine Learning</h1>
        <p>We revolutionize businesses with expertly crafted solutions, blending design, development, and machine learning to drive innovation and success.</p>
        <br></br><br></br><button>Contact Us </button>
      </div>
      <div className="image-container">
        <img src={aiImage} alt="AI and ML illustration" />
      </div>
      </div>
    </section>
  );
}

export default MainSection;
