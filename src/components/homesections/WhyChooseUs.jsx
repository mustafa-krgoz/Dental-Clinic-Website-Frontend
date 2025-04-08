import React from 'react';
import './WhyChooseUs.css';
import clinicImg from '../../assets/images/clinic.png';
import whiteImg from '../../assets/images/white.png';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="images-staggered">
        <img src={clinicImg} alt="Klinik" className="image top-img" />
        <img src={whiteImg} alt="Hasta" className="image bottom-img" />
      </div>
      <div className="text-content">
        <h4 className="subtitle">DENTCARE KLİNİĞİ</h4>
        <h2 className="highlighted-title">
          <span className="blue">Bizi</span>{' '}
          <span className="blue">Tercih Etmenizin</span><br />
          <span className="blue">En Doğru Zamanı</span>
        </h2>
        <p>
          Alanında uzman diş hekimlerimiz ve modern teknolojimizle, size en güvenilir tedavi deneyimini sunuyoruz.
          Gülüş tasarımından implant uygulamalarına kadar her konuda yanınızdayız.
        </p>
        <p>
          Kişiye özel planlamalar, konforlu bir ortam ve güleryüzlü hizmet anlayışımızla,
          sadece tedavi değil; aynı zamanda keyifli bir deneyim yaşatmayı hedefliyoruz.
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;