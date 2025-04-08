import React, { useState, useEffect } from 'react';
import '../../styles/home/HeroSection.css';
import toothImg from '../../assets/images/tooth.png';
import clinicImg from '../../assets/images/clinic.png';
import whiteImg from '../../assets/images/white.png';

const HeroSection = () => {
  const images = [toothImg, clinicImg, whiteImg];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="text-content">
        <h1>
          Güzel Gülüşlerin Sırrı <span>Burada!</span>
        </h1>
        <p>Modern diş hekimliği teknolojileri ile estetik ve sağlıklı gülüşlere kavuşun.</p>
        <button className="randevu-button">Online Randevu Al</button>
      </div>

      <div className="hero-carousel">
        <button className="arrow left" onClick={prevSlide}>&lt;</button>
        <img src={images[currentIndex]} alt="Diş görseli" />
        <button className="arrow right" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default HeroSection;