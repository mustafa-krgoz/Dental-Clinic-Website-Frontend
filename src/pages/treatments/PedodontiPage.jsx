import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import '../../styles/treatments/PedodontiPage.css';
import kidToothImage from '../../assets/images/kids-toothcare.png'; // uygun görselini buraya ekle

const PedodontiPage = () => {
  return (
    <>
      <Navbar />
      <div className="pedodonti-page">
        <section className="pedodonti-hero">
          <div className="pedodonti-hero-text">
            <h1>Çocuk Diş Hekimliği (Pedodonti)</h1>
            <p>Çocuklara özel hassasiyetle tasarlanmış tedavilerle sağlıklı gülüşler kazandırıyoruz.</p>
          </div>
          <div className="pedodonti-hero-image">
            <img src={kidToothImage} alt="Çocuk Diş Tedavisi" />
          </div>
        </section>

        <section className="pedodonti-info container">
          <h2>Pedodonti Nedir?</h2>
          <p>Pedodonti, 0-13 yaş arası çocukların süt ve daimi dişlerinin sağlığını korumaya ve oluşabilecek sorunları tedavi etmeye yönelik diş hekimliği dalıdır.</p>

          <h2>Neden Önemlidir?</h2>
          <ul>
            <li>Çocukların diş gelişimini doğru yönlendirmek için erken teşhis çok önemlidir.</li>
            <li>Diş hekimi korkusunu azaltmak için özel pedodonti yaklaşımları gereklidir.</li>
            <li>Çürük oluşumunu önleyici koruyucu uygulamalar (fissür örtücü, flor uygulaması) büyük fark yaratır.</li>
          </ul>

          <h2>Hizmetlerimiz</h2>
          <p>Kliniğimizde sunduğumuz çocuklara özel tedavi seçenekleri şunlardır:</p>
          <ul>
            <li>Çürük önleyici flor uygulamaları</li>
            <li>Süt dişi dolgusu ve çekimi</li>
            <li>Yer tutucu uygulamaları</li>
            <li>Çocuklara özel ortodontik yönlendirmeler</li>
            <li>Oyunla tedavi uyumu geliştirme</li>
          </ul>

          <h2>Ailelere Tavsiyeler</h2>
          <p>Çocuklarınızın diş sağlığı için:</p>
          <ul>
            <li>İlk diş muayenesini 1 yaşından önce yaptırın</li>
            <li>2 yaşından itibaren düzenli kontrolleri ihmal etmeyin</li>
            <li>Şekerli gıdaların tüketimini sınırlandırın</li>
            <li>Her akşam yatmadan önce diş fırçalama alışkanlığı kazandırın</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PedodontiPage;