import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/LaminaVeneerPage.css';

import laminaImage from '../../assets/images/lamina.png'; // lamina kaplama görseli

const LaminaVeneerPage = () => {
  return (
    <>
      <Navbar />
      <div className="lamina-page">
        <section className="lamina-hero">
          <div className="lamina-hero-text">
            <h1>Lamina Kaplama</h1>
            <p>
              İnce porselen yapraklarla daha beyaz, düzgün ve estetik bir gülümseme.
            </p>
          </div>
          <div className="lamina-hero-image">
            <img src={laminaImage} alt="Lamina Kaplama" />
          </div>
        </section>

        <section className="lamina-info">
          <div className="lamina-container">
            <h2>Lamina Kaplama Nedir?</h2>
            <p>
              Lamina kaplama, dişlerin sadece ön yüzeyine uygulanan, son derece ince porselen yapraklardır.
              Genellikle dişlerin şeklini, rengini veya dizilimini estetik olarak iyileştirmek amacıyla kullanılır.
            </p>

            <h2>Avantajları</h2>
            <ul>
              <li>Doğal ve estetik görünüm</li>
              <li>Minimum diş aşındırması</li>
              <li>Renk değişimlerine karşı direnç</li>
              <li>Uzun ömürlü kullanım</li>
            </ul>

            <h2>Kimler İçin Uygundur?</h2>
            <p>
              Renklenmiş, kırık, aralıklı veya şekil bozukluğu olan ön dişlere sahip bireyler için uygundur.
              Ayrıca gülüş tasarımı isteyen kişilerde sıklıkla tercih edilir.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LaminaVeneerPage;