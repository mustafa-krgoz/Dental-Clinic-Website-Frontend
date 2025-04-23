import React from 'react';
import '../styles/doctors/Doctors.css';
import { FaTooth, FaSmile, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GiTooth } from 'react-icons/gi';
import { MdChildCare } from 'react-icons/md';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

// ✅ Görselleri içe aktar
import doctor1 from '../assets/images/doktor1.png';
import doctor2 from '../assets/images/doktor2.png';
import doctor3 from '../assets/images/doktor3.png';

const DoctorsPage = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmet Yılmaz",
      specialty: "Ortodonti Uzmanı",
      experience: "15 yıllık deneyim",
      image: doctor1,
      features: [
        "5000+ başarılı tedavi",
        "Avrupa Ortodonti Derneği Üyesi",
        "Şeffaf plak uzmanı"
      ],
      rating: 4.9
    },
    {
      id: 2,
      name: "Dr.Mehmet Kaya",
      specialty: "Pedodonti Uzmanı",
      experience: "20 yıllık deneyim",
      image: doctor2,
      features: [
        "Çocuk psikolojisi eğitimi",
        "Oyun terapisi sertifikalı",
        "3000+ mutlu çocuk hasta"
      ],
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Ayşe Demir",
      specialty: "Protez Uzmanı",
      experience: "12 yıllık deneyim",
      image: doctor3,
      features: [
        "Dijital implant planlama",
        "All-on-4 tekniği uzmanı",
        "4000+ başarılı implant"
      ],
      rating: 4.95
    }
  ];

  const specialties = [
    { icon: <GiTooth size={24} />, title: "Ortodonti", description: "Diş ve çene bozukluklarının tedavisi" },
    { icon: <MdChildCare size={24} />, title: "Pedodonti", description: "Çocuk diş sağlığı uzmanlığı" },
    { icon: <FaTooth size={24} />, title: "İmplantoloji", description: "Eksik dişlerin kalıcı çözümü" },
    { icon: <FaSmile size={24} />, title: "Estetik Diş Hekimliği", description: "Mükemmel gülüş tasarımı" }
  ];

  return (
    <>
      <Navbar />
      <div className="doctors-page">
        {/* Hero Section */}
        <section className="doctors-hero">
          <div className="container">
            <h1>Uzman Diş Hekimlerimiz</h1>
            <p>Alanında uzman hekim kadromuzla sağlıklı gülüşler için hizmetinizdeyiz</p>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="doctors-section">
          <div className="container">
            <div className="section-header">
              <h2>Ekibimiz</h2>
              <p>Deneyimli ve uzman diş hekimlerimiz</p>
            </div>
            <div className="doctors-grid">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                  <div className="card-image">
                    <img src={doctor.image} alt={doctor.name} loading="lazy" />
                    <div className="rating-badge">
                      <FaStar className="star-icon" />
                      <span>{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{doctor.name}</h3>
                    <p className="specialty">{doctor.specialty}</p>
                    <p className="experience">{doctor.experience}</p>
                    <ul className="features-list">
                      {doctor.features.map((feature, index) => (
                        <li key={index}>
                          <IoMdCheckmarkCircleOutline className="feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="appointment-btn">
                      <FaCalendarAlt className="btn-icon" />
                      Randevu Al
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="specialties-section">
          <div className="container">
            <div className="section-header">
              <h2>Uzmanlık Alanlarımız</h2>
              <p>Hizmet verdiğimiz tedavi alanları</p>
            </div>
            <div className="specialties-grid">
              {specialties.map((specialty, index) => (
                <div key={index} className="specialty-card">
                  <div className="icon-wrapper">{specialty.icon}</div>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DoctorsPage;