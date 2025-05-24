import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/TeethWhiteningPage.css';

import whiteningImage from '../../assets/images/teeth-whitening.png';

const TeethWhiteningPage = () => {
  return (
    <>
      <Navbar />
      <div className="teeth-whitening-page">
        {/* Hero Section */}
        <section className="teeth-whitening-hero">
          <div className="teeth-whitening-hero-text">
            <h1>Diş Beyazlatma</h1>
            <p>Daha beyaz, parlak ve estetik bir gülümseme için modern çözümler.</p>
          </div>
          <div className="teeth-whitening-hero-image">
            <img src={whiteningImage} alt="Diş Beyazlatma Görseli" />
          </div>
        </section>

        {/* Description Section */}
        <section className="teeth-whitening-info">
          <div className="container">
            <h2>Diş Beyazlatma Nedir?</h2>
            <p>
              Diş beyazlatma; zamanla renk değiştiren veya lekelenen dişlerin özel tekniklerle birkaç ton daha açık
              hale getirilmesi işlemidir. Günümüzde kullanılan modern yöntemlerle güvenli ve etkili sonuçlar elde
              edilebilmektedir.
            </p>

            <h2>Kimler İçin Uygundur?</h2>
            <p>
              Dişlerinde sararma, kahve/çay lekeleri veya sigara kaynaklı renk değişimi yaşayan bireyler için uygundur.
              Ancak işlem öncesinde hekim kontrolü gereklidir.
            </p>

            <h2>Klinikte Uygulanan Yöntemler</h2>
            <ul>
              <li>Ofis Tipi Beyazlatma (Lazer destekli)</li>
              <li>Ev Tipi Beyazlatma (Kişiye özel plaklarla)</li>
              <li>Kombine Beyazlatma (Ofis + Ev tipi)</li>
            </ul>

            <h2>Sıkça Sorulanlar</h2>
            <p><strong>Diş beyazlatma zararlı mı?</strong> Uygulama doğru şekilde yapıldığında dişlere zarar vermez.</p>
            <p><strong>Etkisi ne kadar sürer?</strong> Kişisel bakım alışkanlıklarına bağlı olarak 6-12 ay arasında etkisi devam eder.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeethWhiteningPage;