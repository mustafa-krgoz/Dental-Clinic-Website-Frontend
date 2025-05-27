// src/pages/AboutPage.jsx
import React, { useRef } from 'react';
import '../styles/about/AboutPage.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import toothImg from '../assets/images/tooth.png';
import clinicImg from '../assets/images/clinic.png';
import whiteImg from '../assets/images/white.png';

const doctors = [
  {
    name: 'Dr. Ahmet Yılmaz',
    specialty: 'Ortodonti Uzmanı',
    experience: '15 yıllık deneyim',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Dr. Ayşe Demir',
    specialty: 'Pedodonti Uzmanı',
    experience: '10 yıllık deneyim',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Dr. Mehmet Kaya',
    specialty: 'Ağız ve Çene Cerrahı',
    experience: '12 yıllık deneyim',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Dr. Elif Korkmaz',
    specialty: 'Endodonti Uzmanı',
    experience: '9 yıllık deneyim',
    image: toothImg
  },
  {
    name: 'Dr. Burak Şahin',
    specialty: 'Restoratif Diş Tedavisi',
    experience: '8 yıllık deneyim',
    image: clinicImg
  },
  {
    name: 'Dr. Derya Yıldız',
    specialty: 'Estetik Diş Hekimi',
    experience: '11 yıllık deneyim',
    image: whiteImg
  }
];

const AboutPage = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      <Navbar />

      <section className="about-hero">
        <div className="container">
          <h1>DentCare Hakkında</h1>
          <p>Sağlıklı gülüşler için 20 yıllık deneyim</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Misyonumuz</h2>
            <p>
              DentCare olarak ağız ve diş sağlığınızı önemsiyoruz. Uzman hekim kadromuz ve modern
              teknolojimizle en iyi hizmeti sunmayı hedefliyoruz. Her hastamıza özel tedavi planları
              oluşturarak bireysel ihtiyaçları karşılıyoruz.
            </p>
          </div>
          <div className="mission-image"></div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container">
          <div className="vision-image"></div>
          <div className="vision-content">
            <h2>Vizyonumuz</h2>
            <p>
              Diş sağlığında lider ve öncü bir klinik olmak, en yeni tedavi yöntemlerini uygulamak ve
              hastalarımızın yaşam kalitesini artırmak temel vizyonumuzdur. DentCare olarak gülümsemenin
              gücüne inanıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🧼</div>
              <h3>Hijyen</h3>
              <p>En üst seviyede sterilizasyon ve hijyen standartları</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Kalite</h3>
              <p>Son teknoloji ekipmanlar ve kaliteli malzemeler</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👨‍⚕️</div>
              <h3>Uzmanlık</h3>
              <p>Alanında uzman deneyimli diş hekimleri</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Hasta Memnuniyeti</h3>
              <p>Hastalarımızın konforu ve memnuniyeti önceliğimiz</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Uzman Ekibimiz</h2>
          <button className="slider-arrow left" onClick={scrollLeft}>
            <FiChevronLeft />
          </button>
          <div className="team-slider" ref={sliderRef}>
            {doctors.map((doctor, index) => (
              <div key={index} className="team-card">
                <div
                  className="doctor-image"
                  style={{ backgroundImage: `url(${doctor.image})` }}
                ></div>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <span>{doctor.experience}</span>
              </div>
            ))}
          </div>
          <button className="slider-arrow right" onClick={scrollRight}>
            <FiChevronRight />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;