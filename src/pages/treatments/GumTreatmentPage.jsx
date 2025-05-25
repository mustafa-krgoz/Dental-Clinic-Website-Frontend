import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/GumTreatmentPage.css';

import gumImage from '../../assets/images/gum.png';

const GumTreatmentPage = () => {
  return (
    <>
      <Navbar />
      <div className="gum-page">
        <section className="gum-hero">
          <div className="gum-hero-text">
            <h1>Diş Eti Tedavisi</h1>
            <p>
              Sağlıklı diş etleri, sağlıklı bir ağız yapısının temelidir. Erken teşhis ve tedavi ile dişlerinizi koruyun.
            </p>
          </div>
          <div className="gum-hero-image">
            <img src={gumImage} alt="Diş Eti Tedavisi" />
          </div>
        </section>

        <section className="gum-info">
          <div className="gum-container">
            <h2>Diş Eti Tedavisi Nedir?</h2>
            <p>
              Diş eti tedavisi, diş eti hastalıklarının teşhis edilip tedavi edilmesini kapsar. 
              İltihap, kanama, çekilme gibi sorunlar diş kaybına neden olmadan önce müdahale edilmelidir.
            </p>

            <h2>Sık Görülen Belirtiler</h2>
            <ul>
              <li>Diş eti kanaması ve hassasiyet</li>
              <li>Kırmızı, şişmiş diş etleri</li>
              <li>Ağız kokusu</li>
              <li>Dişlerde sallanma</li>
            </ul>

            <h2>Tedavi Yöntemleri</h2>
            <p>
              Tedavi; diş taşı temizliği, küretaj (kök yüzeyi düzleştirme), antibiyotik uygulamaları
              ve gerekirse cerrahi müdahaleleri içerir. Tedavi sonrası düzenli bakım önemlidir.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GumTreatmentPage;