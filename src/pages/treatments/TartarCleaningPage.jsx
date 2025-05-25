import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/TartarCleaningPage.css';

import tartarImage from '../../assets/images/tartar.png'; // diş taşı temizliği görseli

const TartarCleaningPage = () => {
  return (
    <>
      <Navbar />
      <div className="tartar-page">
        <section className="tartar-hero">
          <div className="tartar-hero-text">
            <h1>Diş Taşı Temizliği</h1>
            <p>
              Diş eti sağlığı için düzenli diş taşı temizliği ile plak ve tartarlardan kurtulun.
            </p>
          </div>
          <div className="tartar-hero-image">
            <img src={tartarImage} alt="Diş Taşı Temizliği" />
          </div>
        </section>

        <section className="tartar-info">
          <div className="tartar-container">
            <h2>Diş Taşı Temizliği Nedir?</h2>
            <p>
              Diş taşı temizliği, diş yüzeylerinde biriken sertleşmiş plakların özel ultrasonik cihazlarla
              temizlenmesi işlemidir. Bu işlem, diş eti hastalıklarının önlenmesi ve ağız sağlığının korunması için gereklidir.
            </p>

            <h2>Kimler Yaptırmalı?</h2>
            <ul>
              <li>Ağız kokusu yaşayanlar</li>
              <li>Diş eti kanaması olanlar</li>
              <li>Diş eti çekilmesi riski taşıyanlar</li>
              <li>Sigara kullanan bireyler</li>
              <li>6 ayda bir rutin kontrol isteyen herkes</li>
            </ul>

            <h2>Faydaları</h2>
            <p>
              Temiz ve sağlıklı diş etleri, estetik bir gülüş ve taze bir nefes için en etkili çözümlerden biridir.
              Ayrıca ileri seviye diş eti hastalıklarının önüne geçilmesini sağlar.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TartarCleaningPage;