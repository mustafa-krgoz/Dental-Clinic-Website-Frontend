import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/ImplantPage.css';
import implantImage from '../../assets/images/implant.png';
import beforeAfterImage from '../../assets/images/before-after.png';

import { FaTooth, FaClock, FaShieldAlt, FaCheckCircle, FaUserMd } from 'react-icons/fa';

const ImplantPage = () => {
  return (
    <>
      <Navbar />
      <div className="implant-page">
        {/* What is Implant Section */}
        <section className="section implant-definition">
          <div className="container">
            <div className="section-header">
              <h2>Diş İmplantı Nedir?</h2>
              <p className="section-subtitle">Doğal dişinizi aratmayacak kalıcı çözüm</p>
            </div>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  Diş implantı, eksik dişlerin fonksiyon ve estetiğini geri kazandırmak için çene kemiğine yerleştirilen titanyum vidalardır. 
                  Doğal diş kökünün yerini alarak üzerine yapılacak protezlere sağlam bir temel oluşturur.
                </p>
                <div className="feature-list">
                  <div className="feature-item">
                    <FaShieldAlt className="feature-icon" />
                    <div>
                      <h4>Uzun Ömürlü</h4>
                      <p>Doğru bakım ile ömür boyu kullanılabilir</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <FaTooth className="feature-icon" />
                    <div>
                      <h4>Doğal Görünüm</h4>
                      <p>Gerçek dişlerinizden ayırt edilemez</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <FaClock className="feature-icon" />
                    <div>
                      <h4>Hızlı İyileşme</h4>
                      <p>Modern tekniklerle kısa sürede iyileşme</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-image">
                <img src={implantImage} alt="Diş İmplantı Yapısı" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Implant Section */}
        <section className="section implant-benefits">
          <div className="container">
            <div className="section-header">
              <h2>Neden İmplant Tercih Etmelisiniz?</h2>
              <p className="section-subtitle">Geleneksel yöntemlere göre avantajları</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">1</div>
                <h3>Kemik Kaybını Önler</h3>
                <p>Diş kaybı sonrası oluşan kemik erimesini engeller ve çene yapınızı korur</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">2</div>
                <h3>Komşu Dişlere Zarar Vermez</h3>
                <p>Köprü protezlerin aksine sağlam dişlerinizi kesmeye gerek yoktur</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">3</div>
                <h3>Tam Çiğneme Fonksiyonu</h3>
                <p>Doğal dişleriniz gibi rahatça çiğneme yapabilirsiniz</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">4</div>
                <h3>Estetik Görünüm</h3>
                <p>Kişiye özel tasarlanan kronlarla doğal diş görünümü sağlar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Implant Types Section */}
        <section className="section implant-types">
          <div className="container">
            <div className="section-header">
              <h2>İmplant Çeşitleri</h2>
              <p className="section-subtitle">İhtiyacınıza uygun farklı implant seçenekleri</p>
            </div>
            <div className="type-list full-width">
              <div className="type-item">
                <h3>Standart İmplantlar</h3>
                <p>Çene kemiğine yerleştirilen geleneksel titanyum vidalar. Uzun yıllardır kullanılan, başarı oranı yüksek ve yaygın seçenektir.</p>
              </div>
              <div className="type-item">
                <h3>Bazal İmplantlar</h3>
                <p>Kemik yetersizliği durumlarında tercih edilen, kortikal kemik bölgesine yerleşen ve hızlı yükleme imkanı sunan implantlardır.</p>
              </div>
              <div className="type-item">
                <h3>Zirkonyum İmplantlar</h3>
                <p>Metal içermeyen, estetik ve biyouyumlu yapısıyla özellikle ön bölge estetiğinde tercih edilir.</p>
              </div>
              <div className="type-item">
                <h3>All-on-4 / All-on-6</h3>
                <p>Tam dişsizlik durumlarında 4 veya 6 implant ile sabit bir protez çözümü sunar. Estetik ve konforu bir araya getirir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before After Section */}
        <section className="section before-after">
          <div className="container">
            <div className="section-header">
              <h2>İmplant Sonuçları</h2>
              <p className="section-subtitle">Tedavi öncesi ve sonrası görseller</p>
            </div>
            <div className="ba-image-container wide">
              <img src={beforeAfterImage} alt="İmplant Öncesi ve Sonrası" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section implant-faq">
          <div className="container">
            <div className="section-header">
              <h2>Sık Sorulan Sorular</h2>
              <p className="section-subtitle">İmplant hakkında merak edilenler</p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>İmplant ağrılı bir işlem midir?</h3>
                <p>İmplant uygulaması lokal anestezi altında yapıldığı için işlem sırasında ağrı hissedilmez. İşlem sonrası hafif ağrı olabilir ancak bu ağrı ağrı kesicilerle kontrol altına alınabilir.</p>
              </div>
              <div className="faq-item">
                <h3>İmplant ömrü ne kadardır?</h3>
                <p>Düzenli ağız bakımı ve hekim kontrolleriyle implantlar ömür boyu kullanılabilir. İyi bakılan implantların 30 yıldan fazla kullanıldığı vakalar mevcuttur.</p>
              </div>
              <div className="faq-item">
                <h3>Herkes implant yaptırabilir mi?</h3>
                <p>Genel sağlık durumu uygun olan, kontrol altında sistemik hastalığı bulunmayan ve yeterli kemik yapısına sahip herkes implant yaptırabilir. Kemik yetersizliği durumlarında ek işlemler gerekebilir.</p>
              </div>
              <div className="faq-item">
                <h3>İmplant sonrası iyileşme süresi ne kadardır?</h3>
                <p>İmplantın kemikle bütünleşmesi (osseointegrasyon) genellikle 2-6 ay sürer. Ancak bazı özel tekniklerle aynı gün geçici protez takılabilir.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ImplantPage;