// src/pages/AboutPage.jsx
import React from 'react';
import '../styles/about/AboutPage.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

const AboutPage = () => {
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
          <div className="team-grid">
            <div className="team-card">
              <div className="doctor-image doc1"></div>
              <h3>Dr. Ahmet Yılmaz</h3>
              <p>Ortodonti Uzmanı</p>
              <span>15 yıllık deneyim</span>
            </div>
            <div className="team-card">
              <div className="doctor-image doc2"></div>
              <h3>Dr. Ayşe Demir</h3>
              <p>Pedodonti Uzmanı</p>
              <span>10 yıllık deneyim</span>
            </div>
            <div className="team-card">
              <div className="doctor-image doc3"></div>
              <h3>Dr. Mehmet Kaya</h3>
              <p>İmplantoloji Uzmanı</p>
              <span>12 yıllık deneyim</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Randevunuzu Hemen Alın</h2>
          <p>Sağlıklı bir gülüş için ilk adımı atın</p>
          <button className="cta-button">Online Randevu</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;