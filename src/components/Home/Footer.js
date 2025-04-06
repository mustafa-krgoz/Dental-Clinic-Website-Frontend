import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>DentCare</h3>
          <p>Ağız ve diş sağlığınız için modern ve güvenilir çözümler sunuyoruz.</p>
        </div>

        <div className="footer-col">
          <h3>İletişim</h3>
          <p><FaMapMarkerAlt /> İstanbul, Türkiye</p>
          <p><FaPhoneAlt /> +90 555 123 45 67</p>
          <p><FaEnvelope /> info@dentcare.com</p>
        </div>

        <div className="footer-col">
          <h3>Hızlı Erişim</h3>
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/randevu">Randevu Al</a></li>
            <li><a href="/doktorlar">Doktorlarımız</a></li>
            <li><a href="/sss">SSS</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Bizi Takip Edin</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DentCare. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;