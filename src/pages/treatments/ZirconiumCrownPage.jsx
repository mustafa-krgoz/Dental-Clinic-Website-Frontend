import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/ZirconiumCrownPage.css';

import zirconiumImage from '../../assets/images/zirconium.png'; // Görselin adı: zirconium.png

const ZirconiumCrownPage = () => {
  return (
    <>
      <Navbar />
      <div className="zirconium-page">
        <section className="zirconium-hero">
          <div className="zirconium-hero-text">
            <h1>Zirkonyum Kaplama</h1>
            <p>
              Estetik, dayanıklı ve doğal görünümlü diş kaplama çözümü.
            </p>
          </div>
          <div className="zirconium-hero-image">
            <img src={zirconiumImage} alt="Zirkonyum Kaplama" />
          </div>
        </section>

        <section className="zirconium-info">
          <div className="zirconium-container">
            <h2>Zirkonyum Kaplama Nedir?</h2>
            <p>
              Zirkonyum kaplama, doğal diş renginde, ışık geçirgenliğine sahip ve metal içermeyen
              bir diş kaplama türüdür. Estetik diş hekimliğinde sıkça tercih edilir.
            </p>

            <h2>Avantajları Nelerdir?</h2>
            <ul>
              <li>Doğal diş görünümüne çok yakındır</li>
              <li>Diş eti uyumu yüksektir</li>
              <li>Metalsiz olduğu için alerjik değildir</li>
              <li>Uzun ömürlü ve dayanıklıdır</li>
              <li>Renk değişimine karşı dirençlidir</li>
            </ul>

            <h2>Hangi Durumlarda Tercih Edilir?</h2>
            <p>
              Ön dişlerde estetik amaçlı, renklenmiş ve aşırı madde kaybı olan dişlerde, kanal tedavili dişlerde
              ve gülüş tasarımı uygulamalarında yaygın olarak kullanılır.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ZirconiumCrownPage;