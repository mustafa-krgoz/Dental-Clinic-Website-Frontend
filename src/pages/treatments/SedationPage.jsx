import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/SedationPage.css';

import sedationImage from '../../assets/images/sedation-treatment.png';

const SedationPage = () => {
  return (
    <>
      <Navbar />
      <div className="sedation-page">
        <section className="sedation-hero">
          <div className="hero-text">
            <h1>Sedasyon ile Diş Tedavisi</h1>
            <p>Rahat ve endişesiz diş tedavileri için modern yöntemler.</p>
          </div>
          <div className="hero-image">
            <img src={sedationImage} alt="Sedasyon ile Diş Tedavisi" />
          </div>
        </section>

        <section className="sedation-info">
          <div className="container">
            <h2>Sedasyon Nedir?</h2>
            <p>
              Sedasyon, diş tedavileri sırasında oluşabilecek ağrı, stres ve kaygıyı ortadan kaldırmak için kullanılan rahatlatıcı bir yöntemdir.
              Hasta tedavi boyunca bilinci açık ancak tamamen sakin ve konforlu hisseder.
            </p>

            <h2>Kimlere Uygulanabilir?</h2>
            <ul>
              <li>Diş hekimi korkusu olan hastalar</li>
              <li>Uzun sürecek diş operasyonları geçirecek hastalar</li>
              <li>Özel ihtiyaçları olan çocuklar ve yetişkinler</li>
              <li>Refleksleri yüksek hastalar (öğürme refleksi vs.)</li>
            </ul>

            <h2>Sedasyon Türleri</h2>
            <ul>
              <li>Oral Sedasyon (Ağız yoluyla alınan)</li>
              <li>İnhalasyon Sedasyonu (Gaz ile uygulanan)</li>
              <li>Intravenöz (IV) Sedasyon (Damardan uygulanan)</li>
            </ul>

            <h2>Sıkça Sorulanlar</h2>
            <p><strong>Sedasyonun herhangi bir yan etkisi var mı?</strong> Uzman hekim tarafından uygulandığında son derece güvenlidir ve minimal yan etkisi bulunur.</p>
            <p><strong>Sedasyondan sonra günlük hayatıma dönebilir miyim?</strong> Sedasyonun türüne göre işlem sonrası dinlenmeniz gerekebilir. IV sedasyon sonrası dinlenmeniz önerilir.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SedationPage;