import React from 'react';

function OurProcess() {
  return (
    <section id="our-process" className="OurProcess">
      <div className="container">
        <h2>OUR SERVICES</h2>
        <h1 className="OurProcess__title">
          Wemofy, Where Design, Development, and Machine Learning converge to create
          transformative solutions for businesses.
        </h1>
        <p className="OurProcess__text">
          We are a team of top talent delivering enterprise solutions globally. We evolve with the advancement in
          technology because we believe in making our technology as your innovation.
        </p>

        <div className="OurProcess__boxes">
          <div className="OurProcess__box">
            <div className="OurProcess__box-icon">
              <img src="images/icon-mobile.svg" alt="mobile" />
            </div>
            <h3 className="OurProcess__box-number">150+</h3>
            <p className="OurProcess__box-text">Domestic Clients</p>
          </div>

          <div className="OurProcess__box">
            <div className="OurProcess__box-icon">
              <img src="images/icon-www.svg" alt="www" />
            </div>
            <h3 className="OurProcess__box-number">280+</h3>
            <p className="OurProcess__box-text">Project Completed</p>
          </div>

          <div className="OurProcess__box">
            <div className="OurProcess__box-icon">
              <img src="images/icon-cart.svg" alt="cart" />
            </div>
            <h3 className="OurProcess__box-number">75+</h3>
            <p className="OurProcess__box-text">International Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;