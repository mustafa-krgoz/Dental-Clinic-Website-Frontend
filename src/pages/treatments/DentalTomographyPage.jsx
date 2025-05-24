import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/DentalTomographyPage.css';

import tomographyImage from '../../assets/images/tomography.png';

const DentalTomographyPage = () => {
  return (
    <>
      <Navbar />
      <div className="tomography-page">
        <section className="tomography-hero">
          <div className="tomography-hero-text">
            <h1>Diş Tomografisi</h1>
            <p>
              Diş sağlığına dair detaylı ve doğru teşhis için gelişmiş görüntüleme teknolojisi.
            </p>
          </div>
          <div className="tomography-hero-image">
            <img src={tomographyImage} alt="Diş Tomografisi" />
          </div>
        </section>

        <section className="tomography-info">
          <div className="tomography-container">
            <h2>Diş Tomografisi Nedir?</h2>
            <p>
              Diş tomografisi, üç boyutlu görüntüler sunarak diş hekimlerine detaylı bilgi sağlar.
              Kemik yapısı, sinirlerin konumu ve dişlerin durumu hakkında net sonuçlar verir.
            </p>

            <h2>Hangi Durumlarda Kullanılır?</h2>
            <ul>
              <li>İmplant planlaması</li>
              <li>Gömülü dişlerin analizi</li>
              <li>Çene kistleri ve tümörlerin değerlendirilmesi</li>
              <li>Kanal tedavisi öncesi detaylı inceleme</li>
            </ul>

            <h2>Avantajları</h2>
            <p>
              Kısa sürede yüksek çözünürlüklü sonuçlar verir. Hekime hızlı ve doğru karar verme imkanı sunar.
              Tedavi sürecini daha etkili hale getirir.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DentalTomographyPage;