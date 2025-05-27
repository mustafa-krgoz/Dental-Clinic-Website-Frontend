import React, { useState, useEffect, useRef } from 'react';
import '../../styles/layout/Navbar.css';
import { FaTooth, FaHome, FaUserMd, FaRegQuestionCircle, FaPhone } from 'react-icons/fa';
import { MdOutlineMedicalServices, MdPeople } from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineRobot } from 'react-icons/ai';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <FaTooth size={26} style={{ marginRight: '8px', color: '#333' }} />
        <span>Dent<span style={{ color: '#f4c542' }}>Care</span></span>
      </div>

      <div className="nav-links">
        <a href="/" className="nav-link"><FaHome /> Ana Sayfa</a>
        <a href="/about" className="nav-link"><MdPeople /> Hakkımızda</a>

        <div className="dropdown" ref={dropdownRef}>
          <a href="#" className="nav-link" onClick={toggleDropdown}><MdOutlineMedicalServices /> Diş Tedavileri ▾</a>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/implant">İmplant</a>
              <a href="/ortodonti">Ortodonti</a>
              <a href="/estetik">Estetik Diş Hekimliği</a>
              <a href="/cocuk-dis">Çocuk Diş Hekimliği</a>
              <a href="/dolgu">Diş Dolgusu</a>
              <a href="/temizlik">Diş Taşı Temizliği</a>
              <a href="/beyazlatma">Diş Beyazlatma</a>
              <a href="/tomografi">Diş Tomografisi</a>
              <a href="/dis-eti">Diş Eti Tedavisi</a>
              <a href="/sedasyon">Sedasyon ile Diş Tedavisi</a>
              <a href="/zirkonyum">Zirkonyum Kaplama</a>
              <a href="/lamina">Lamina Kaplama</a>
            </div>
          )}
        </div>

        <a href="/ai" className="nav-link"><AiOutlineRobot /> AI Diş Hastalığı Analizi</a>
        <a href="/doktorlar" className="nav-link"><FaUserMd /> Doktorlarımız</a>
        <a href="/blog" className="nav-link"><BsChatDots /> Blog</a>
        <a href="/sss" className="nav-link"><FaRegQuestionCircle /> SSS</a>
        <a href="/iletisim" className="nav-link"><FaPhone /> İletişim</a>
      </div>

      <a href="/randevu" className="navbar-randevu-btn">Online Randevu</a>
    </nav>
  );
}

export default Navbar;
