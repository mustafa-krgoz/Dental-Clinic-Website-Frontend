// src/components/home/HomePage.js
import React from 'react';
import Navbar from '../layout/Navbar';
import HeroSection from '../layout/HeroSection';
import TreatmentSection from './TreatmentSection';
import PatientReviews from './PatientReview';
import FaqSection from './FaqSection';
import Footer from './Footer';
import WhyChooseUs from './WhyChooseUs';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TreatmentSection />
      <WhyChooseUs />
      <PatientReviews />
      <FaqSection />
      <Footer />
    </>
  );
}

export default HomePage;