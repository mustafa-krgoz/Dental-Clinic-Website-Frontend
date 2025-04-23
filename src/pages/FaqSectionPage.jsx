import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/faq/FaqSectionPage.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "Randevumu nasıl oluşturabilirim?",
    answer: "Ana sayfadaki 'Online Randevu' butonuna tıklayarak, doktor ve tarih seçimiyle kolayca randevunuzu oluşturabilirsiniz."
  },
  {
    question: "Yapay zeka ile çürük tespiti nasıl çalışır?",
    answer: "Sistemimize yüklediğiniz diş röntgeni, yapay zeka algoritmaları tarafından analiz edilerek olası çürük bölgeleri belirlenir."
  },
  {
    question: "Randevumu nasıl iptal edebilirim?",
    answer: "Randevu onay mailindeki bağlantıyı kullanarak ya da kliniğimizi arayarak iptal işlemi gerçekleştirebilirsiniz."
  },
  {
    question: "Hangi diş tedavileri sunuluyor?",
    answer: "İmplant, ortodonti, diş beyazlatma, kanal tedavisi, dolgu, protez gibi pek çok hizmet sunulmaktadır."
  },
  {
    question: "Diş beyazlatma işlemi güvenli mi?",
    answer: "Evet, kliniğimizde uygulanan diş beyazlatma işlemleri uzman gözetiminde, güvenli materyallerle yapılmaktadır."
  },
  {
    question: "Çocuklar için özel diş tedavileri mevcut mu?",
    answer: "Evet, çocuk diş hekimliği (Pedodonti) alanında uzman doktorlarımız hizmet vermektedir."
  },
  {
    question: "Diş teli tedavisi ne kadar sürer?",
    answer: "Genellikle 12-24 ay arasında sürer. Süre, hastanın ağız yapısına ve tedaviye uyumuna göre değişebilir."
  },
  {
    question: "İmplant işlemi ağrılı mıdır?",
    answer: "İşlem lokal anesteziyle yapılır, hasta işlem sırasında ağrı hissetmez. Sonrasında hafif ağrılar olabilir."
  },
  {
    question: "Online röntgen gönderimi nasıl yapılır?",
    answer: "Randevu ekranında 'Röntgen Yükle' seçeneğini kullanarak dosyanızı sisteme kolayca ekleyebilirsiniz."
  },
  {
    question: "Kanal tedavisi kaç seansta tamamlanır?",
    answer: "Genellikle tek seansta tamamlanabilir. Ancak bazı durumlarda 2-3 seans sürebilir."
  }
];

const FaqSectionPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="faq-page">
        <div className="faq-container">
          <h1 className="faq-title">Sıkça Sorulan Sorular</h1>
          <p className="faq-subtitle">Size en çok sorulan soruları aşağıda bulabilirsiniz</p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqSectionPage;