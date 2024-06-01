import React from 'react';
import './WhyChooseUs.css';
import Icon1 from './technology.png';
import Icon2 from './technology1.png';
import Icon3 from './rating.png';
import Icon5 from './quality-assurance.png';
import Icon6 from './data-security.png';
import Icon7 from './agile.png';

const WhyChooseUs = () => {
  const cards = [
    { icon: Icon1, title: 'Expert Team', text: 'Highly skilled professionals' },
    { icon: Icon2, title: 'Innovative Solutions', text: 'Cutting-edge technology' },
    { icon: Icon3, title: 'Customer Focused', text: 'Tailored to your needs' },
    { icon: Icon7, title: 'Agile Methodology', text: 'Flexible and efficient processes' },
    { icon: Icon5, title: 'Quality Assurance', text: 'Top-notch quality control' },
    { icon: Icon6, title: 'Data Security', text: 'Your data is safe with us' },
    
    
  
  ];

  return (
    <section id="why-choose-us" className="WhyChooseUs">
      <h2>Why Choose Us</h2>
      <div className="card-container">
        
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <div className="text">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
