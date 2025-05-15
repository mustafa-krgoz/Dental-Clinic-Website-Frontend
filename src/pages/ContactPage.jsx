import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/contact/ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h2>Bizimle İletişime Geçin</h2>
            <p>Her türlü soru, görüş veya öneriniz için bize ulaşabilirsiniz.</p>
          </div>

          <div className="contact-grid">
            {/* Form Bölümü */}
            <form className="contact-form">
              <h3>İletişim Formu</h3>
              <input type="text" placeholder="Ad Soyad" required />
              <input type="email" placeholder="E-posta Adresi" required />
              <textarea placeholder="Mesajınız..." required></textarea>
              <button type="submit">Gönder</button>
            </form>

            {/* Bilgi Bölümü */}
            <div className="contact-info">
              <h3>İletişim Bilgilerimiz</h3>
              <div>
                <FaMapMarkerAlt />
                <span>İstanbul, Türkiye</span>
              </div>
              <div>
                <FaPhoneAlt />
                <span>+90 555 123 45 67</span>
              </div>
              <div>
                <FaEnvelope />
                <span>info@dentcare.com</span>
              </div>
              <div className="working-hours">
                <strong>Çalışma Saatleri:</strong> Pazartesi - Cumartesi: 09:00 - 18:00<br />
                Pazar: Kapalı
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;