import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/AestheticDentistryPage.css';

import aestheticImage from '../../assets/images/aesthetic.png'; // estetik görselini buraya koyarsın

const AestheticDentistryPage = () => {
  return (
    <>
      <Navbar />
      <div className="aesthetic-page">
        <section className="aesthetic-hero">
          <div className="aesthetic-hero-text">
            <h1>Estetik Diş Hekimliği</h1>
            <p>
              Gülüşünüzü güzelleştiren, doğal ve sağlıklı diş estetiği uygulamaları.
            </p>
          </div>
          <div className="aesthetic-hero-image">
            <img src={aestheticImage} alt="Estetik Diş Hekimliği" />
          </div>
        </section>

        <section className="aesthetic-info">
          <div className="aesthetic-container">
            <h2>Estetik Diş Hekimliği Nedir?</h2>
            <p>
              Estetik diş hekimliği, kişiye özel gülüş tasarımı ile hem estetik hem de fonksiyonel bir ağız yapısı kazandırmayı hedefler.
              Dişlerin rengi, şekli, dizilimi ve diş eti yapısı dikkate alınarak uygulamalar yapılır.
            </p>

            <h2>Uygulama Alanları</h2>
            <ul>
              <li>Dijital gülüş tasarımı</li>
              <li>Diş beyazlatma</li>
              <li>Porselen / zirkonyum lamina kaplamalar</li>
              <li>Diş eti seviyelendirme (pembe estetik)</li>
              <li>Diş arası boşluk kapatma (bonding)</li>
            </ul>

            <h2>Avantajları</h2>
            <p>
              Estetik diş uygulamaları kişinin özgüvenini artırır, daha genç ve sağlıklı bir görünüm sağlar.
              Aynı zamanda dişlerin işlevselliği de göz önünde bulundurularak planlanır.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AestheticDentistryPage;