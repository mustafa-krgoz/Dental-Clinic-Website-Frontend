// src/components/home/HomePage.js
import React from 'react';
import Navbar from '../components/layouts/Navbar';
import HeroSection from '../components/homesections/HeroSection';
import TreatmentSection from '../components/homesections/TreatmentSection';
import PatientReviews from '../components/homesections/PatientReview';
import FaqSection from '../components/homesections/FaqSection';
import Footer from '../components/layouts/Footer';
import WhyChooseUs from '../components/homesections/WhyChooseUs';

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