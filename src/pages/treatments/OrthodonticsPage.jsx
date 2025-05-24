import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/OrthodonticsPage.css';

import orthodonticsImage from '../../assets/images/orthodontics.png';

const OrthodonticsPage = () => {
  return (
    <>
      <Navbar />
      <div className="orthodontics-page">
        <section className="orthodontics-hero">
          <div className="orthodontics-hero-text">
            <h1>Ortodonti Tedavisi</h1>
            <p>Daha düzgün, estetik ve sağlıklı bir gülümseme için modern ortodontik çözümler.</p>
          </div>
          <div className="orthodontics-hero-image">
            <img src={orthodonticsImage} alt="Ortodonti Tedavisi" />
          </div>
        </section>

        <section className="orthodontics-info">
          <div className="container">
            <h2>Ortodonti Nedir?</h2>
            <p>
              Ortodonti, dişlerin ve çenelerin doğru konumlandırılmasını sağlayarak sağlıklı bir ısırma, net konuşma ve estetik görünüm elde edilmesine yardımcı olan diş hekimliği dalıdır. 
            </p>

            <h2>Ortodontik Tedavi Gerektiren Durumlar Nelerdir?</h2>
            <ul>
              <li>Çapraşık dişler</li>
              <li>Alt ve üst çenenin düzgün kapanmaması (Maloklüzyon)</li>
              <li>Aralıklı dişler</li>
              <li>Alt ya da üst çenenin ileride veya geride olması</li>
              <li>Diş gıcırdatma kaynaklı problemler</li>
            </ul>

            <h2>Uygulanan Ortodonti Yöntemleri</h2>
            <ul>
              <li>Metal Braketler (Geleneksel)</li>
              <li>Seramik Braketler (Estetik görünüm)</li>
              <li>Şeffaf Plaklar (Invisalign)</li>
              <li>Lingual Ortodonti (İç yüzey braketleri)</li>
            </ul>

            <h2>Ortodonti Tedavisi Hakkında Sık Sorulanlar</h2>
            <p><strong>Ortodontik tedavi kaç yaşında yapılmalı?</strong> Ortodontik tedavi her yaşta uygulanabilir ancak ideal olarak çocukluk ve gençlik döneminde başlaması daha etkilidir.</p>
            <p><strong>Tedavi süresi ne kadardır?</strong> Tedavi genellikle 6 ay ile 2 yıl arasında değişir. Duruma göre daha kısa veya uzun olabilir.</p>
            <p><strong>Ortodontik tedavi ağrılı mı?</strong> İlk günlerde biraz rahatsızlık hissedebilirsiniz ancak ağrılar kısa sürede geçer.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OrthodonticsPage;