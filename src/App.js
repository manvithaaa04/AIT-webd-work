import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import WhyChooseUs from './components/WhyChooseUs';
import OurExpertise from './components/OurExpertise';
import OurProcess from './components/OurProcess';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br></br><br></br>
      <MainSection />
      <WhyChooseUs />
      <Scroll />
      <OurExpertise />
      <OurProcess />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
