import React from 'react';
import './Navbar.css';
import { FaTooth, FaHome, FaUserMd, FaRegQuestionCircle, FaPhone } from 'react-icons/fa';
import { MdOutlineMedicalServices, MdPeople } from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineRobot } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaTooth size={26} style={{ marginRight: '8px', color: '#333' }} />
        <span>Dent<span style={{ color: '#f4c542' }}>Care</span></span>
      </div>

      <div className="nav-links">
        <a href="/" className="nav-link"><FaHome /> Ana Sayfa</a>
        <a href="/about" className="nav-link"><MdPeople /> Hakkımızda</a>

        <div className="dropdown">
          <a href="#!" className="nav-link"><MdOutlineMedicalServices /> Diş Tedavileri ▾</a>
          <div className="dropdown-menu">
            <a href="/implant">İmplant</a>
            <a href="/ortodonti">Ortodonti</a>
            <a href="/estetik">Estetik Diş Hekimliği</a>
          </div>
        </div>

        <a href="/ai" className="nav-link"><AiOutlineRobot /> AI Çürük Tespiti</a>
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
