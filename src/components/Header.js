import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './logo.jpeg';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = scrollPosition > 50 ? 'Header small' : 'Header';

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>AIntelligence Technologies</span>
        </div>
        <nav>
          <ul>
            <li><a href="#main-section">Home</a></li>
            <li><a href="#why-choose-us">Why choose us</a></li>
            <li><a href="#our-expertise">Our Expertise</a></li>
            <li><a href="#our-process">Our Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="request-quote">Request</button>
      </div>
    </header>
  );
}

export default Header;
