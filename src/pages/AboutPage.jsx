import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/about/AboutPage.css';
import aboutImg1 from '../assets/images/white.png';
import aboutImg2 from '../assets/images/tooth.png';

function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="about-hero">
        <h1>Hakkımızda</h1>
        <p>DentCare olarak ağız ve diş sağlığınızı önemsiyoruz. Uzman hekim kadromuz ve modern teknolojimizle en iyi hizmeti sunmayı hedefliyoruz.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Kaliteli Tedavi ve Güler Yüz</h2>
          <p>
            Kliniğimiz, son teknoloji cihazlarla donatılmıştır ve her biri alanında uzman hekimlerden oluşan kadromuzla hizmet vermektedir. Hijyen, güvenilirlik ve hasta memnuniyeti bizim için en önemli önceliklerdendir.
          </p>
          <p>
            Tedavi süreciniz boyunca sizinle birlikte planlama yapar, her adımı açıklayarak ilerleriz. Size en uygun tedavi planını belirleyip, konforlu bir ortamda uygulamayı hedefleriz.
          </p>
        </div>

        <div className="about-images">
          <img src={aboutImg1} alt="Kliniğimiz" />
          <img src={aboutImg2} alt="Tedavi anı" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage;