import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPencilRuler, faFileAlt, faCode, faCheckCircle, faCloudUploadAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import './OurProcess.css';

function OurProcess() {
  const [visibleNumber, setVisibleNumber] = useState(null);

  const handleClick = (number) => {
    setVisibleNumber(number);
  };

  return (
    <section id="our-process" className="OurProcess">
      <div className="container">
        <div className="OurProcess__header">
          <h2>Development Process We Follow</h2>
          <p className="OurProcess__intro">
            Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template.
          </p>
        </div>

        <div className="OurProcess__steps">
          <div className="OurProcess__step" onClick={() => handleClick(1)}>
            <div className="OurProcess__step-icon">
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <h3>Requirement Gathering</h3>
            <p>We engage closely with you to understand your needs, objectives, and desired outcomes.</p>
            {visibleNumber === 1 && <div className="OurProcess__step-visible-number">1</div>}
          </div>

          <div className="OurProcess__step" onClick={() => handleClick(2)}>
            <div className="OurProcess__step-icon">
              <FontAwesomeIcon icon={faPencilRuler} />
            </div>
            <h3>Design</h3>
            <p>Our skilled design team creates prototypes that showcase the envisioned look, feel, and functionality of the final product.</p>
            {visibleNumber === 2 && <div className="OurProcess__step-visible-number">2</div>}
          </div>

          <div className="OurProcess__step" onClick={() => handleClick(3)}>
            <div className="OurProcess__step-icon">
              <FontAwesomeIcon icon={faFileAlt} />
            </div>
            <h3>Prototype</h3>
            <p>Prototypes serve as a visual representation, allowing for feedback and iterations to refine the design before proceeding to development.</p>
            {visibleNumber === 3 && <div className="OurProcess__step-visible-number">3</div>}
          </div>

          <div className="OurProcess__step" onClick={() => handleClick(4)}>
            <div className="OurProcess__step-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>Development</h3>
            <p>During the development phase, our experienced developers bring the design concepts to life.</p>
            {visibleNumber === 4 && <div className="OurProcess__step-visible-number">4</div>}
          </div>

          <div className="OurProcess__step" onClick={() => handleClick(5)}>
            <div className="OurProcess__step-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h3>Quality Assurance</h3>
            <p>Our dedicated quality assurance team rigorously tests the developed software or application.</p>
            {visibleNumber === 5 && <div className="OurProcess__step-visible-number">5</div>}
          </div>

          <div className="OurProcess__step" onClick={() => handleClick(6)}>
            <div className="OurProcess__step-icon">
              <FontAwesomeIcon icon={faCloudUploadAlt} />
            </div>
            <h3>Deployment</h3>
            <p>Once the software or application passes the quality assurance phase, we prepare for deployment.</p>
            {visibleNumber === 6 && <div className="OurProcess__step-visible-number">6</div>}
          </div>

          <div className="OurProcess__step" onClick={() => handleClick(7)}>
            <div className="OurProcess__step-icon">
              <FontAwesomeIcon icon={faLifeRing} />
            </div>
            <h3>Support & Maintenance</h3>
            <p>We prioritize open communication, collaboration, and client involvement.</p>
            {visibleNumber === 7 && <div className="OurProcess__step-visible-number">7</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
