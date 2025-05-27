// HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/home/HeroSection.css';
import toothImg from '../../assets/images/tooth.png';
import clinicImg from '../../assets/images/clinic.png';
import whiteImg from '../../assets/images/white.png';

const HeroSection = () => {
  const slides = [
    {
      image: toothImg,
      title: "Ağrısız Diş Tedavileri",
      description: "Son teknoloji lazer tedavileri ile ağrısız ve konforlu diş tedavileri"
    },
    {
      image: clinicImg,
      title: "Modern Klinik Ortamı",
      description: "Hijyen standartlarında ödüllü kliniklerimizde güvenle tedavi olun"
    },
    {
      image: whiteImg,
      title: "Beyazlatma Teknolojileri",
      description: "Profesyonel diş beyazlatma ile 3 ton daha beyaz dişler"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAppointmentClick = () => {
    navigate('/randevu');
  };

  return (
    <div className="hero-section">
      <div className="text-content">
        <h1>
          Güzel Gülüşlerin Sırrı <span>Burada!</span>
        </h1>
        <p>Modern diş hekimliği teknolojileri ile estetik ve sağlıklı gülüşlere kavuşun.</p>
        <button className="randevu-button" onClick={handleAppointmentClick}>
          Online Randevu Al
        </button>
      </div>

      <div className="hero-carousel-container">
        <button className="arrow left" onClick={prevSlide}>&lt;</button>
        <div className="hero-carousel">
          <div className="slide-wrapper">
            <img src={slides[currentIndex].image} alt="Diş görseli" />
            <div className="slide-caption">
              <h3>{slides[currentIndex].title}</h3>
              <p>{slides[currentIndex].description}</p>
            </div>
          </div>
        </div>
        <button className="arrow right" onClick={nextSlide}>&gt;</button>
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;