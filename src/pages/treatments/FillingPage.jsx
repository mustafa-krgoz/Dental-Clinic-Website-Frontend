import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/FillingPage.css';

import fillingImage from '../../assets/images/filling.png';

const FillingPage = () => {
  return (
    <>
      <Navbar />
      <div className="filling-page">
        <section className="filling-hero">
          <div className="filling-hero-text">
            <h1>Diş Dolgusu</h1>
            <p>Çürük veya kırık dişlerin estetik ve işlevsel olarak onarılması için etkili çözümler.</p>
          </div>
          <div className="filling-hero-image">
            <img src={fillingImage} alt="Diş Dolgusu Görseli" />
          </div>
        </section>

        <section className="filling-info container">
          <h2>Diş Dolgusu Nedir?</h2>
          <p>
            Diş dolgusu, çürük ya da kırık dişlerin temizlenip oluşan boşluğun özel dolgu malzemeleriyle doldurulması işlemidir.
            Böylece hem ağrı giderilir hem de dişin doğal yapısı korunur.
          </p>

          <h2>Hangi Durumlarda Dolgu Yapılır?</h2>
          <ul>
            <li>Diş çürükleri</li>
            <li>Dişte travmaya bağlı kırıklar</li>
            <li>Abrasyon (aşınma) kaynaklı boşluklar</li>
            <li>Estetik amaçlı restorasyonlar</li>
          </ul>

          <h2>Kullanılan Dolgu Malzemeleri</h2>
          <ul>
            <li>Kompozit (Beyaz) Dolgu</li>
            <li>Amalgam (Gümüş) Dolgu</li>
            <li>Cam İyonomer Dolgu</li>
            <li>Porselen Dolgu (Inlay-Onlay)</li>
          </ul>

          <h2>Sık Sorulanlar</h2>
          <p><strong>Dolgu işlemi ağrılı mıdır?</strong> Lokal anestezi ile ağrısız bir şekilde gerçekleştirilir.</p>
          <p><strong>Dolgu ne kadar dayanır?</strong> Kullanılan malzemeye ve ağız bakımına bağlı olarak 5-15 yıl arasında değişebilir.</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FillingPage;