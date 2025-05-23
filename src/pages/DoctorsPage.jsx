import React from 'react';
import { FaTooth, FaSmile, FaGraduationCap, FaAward } from 'react-icons/fa';
import { GiTooth, GiToothbrush, GiHealthNormal } from 'react-icons/gi';
import { MdChildCare, MdWork } from 'react-icons/md';
import { RiMentalHealthLine, RiTeamLine } from 'react-icons/ri';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/doctors/DoctorsPage.css';

import doctor1 from '../assets/images/doktor1.png';
import doctor2 from '../assets/images/doktor2.png';
import doctor3 from '../assets/images/doktor3.png';

const DoctorsPage = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmet Yılmaz",
      specialty: "Ortodonti Uzmanı",
      experience: "15 Yıllık Deneyim",
      image: doctor1,
      education: "İstanbul Üniversitesi Diş Hekimliği Fakültesi",
      features: [
        "5000+ başarılı tedavi",
        "Avrupa Ortodonti Derneği Üyesi",
        "Şeffaf plak uzmanı",
        "Lingual ortodonti sertifikası"
      ],
      achievements: [
        "2023 En İyi Ortodonti Uzmanı Ödülü",
        "Invisalign Platinum Provider"
      ]
    },
    {
      id: 2,
      name: "Dr. Mehmet Kaya",
      specialty: "Pedodonti Uzmanı",
      experience: "20 Yıllık Deneyim",
      image: doctor2,
      education: "Ankara Üniversitesi Diş Hekimliği Fakültesi",
      features: [
        "Çocuk psikolojisi eğitimi",
        "Oyun terapisi sertifikalı",
        "3000+ mutlu çocuk hasta",
        "Sedasyon uzmanı"
      ],
      achievements: [
        "Pediatrik Diş Hekimliği Derneği Başkanı",
        "Çocuk Dostu Klinik Sertifikası"
      ]
    },
    {
      id: 3,
      name: "Dr. Ayşe Demir",
      specialty: "Protez Uzmanı",
      experience: "12 Yıllık Deneyim",
      image: doctor3,
      education: "Ege Üniversitesi Diş Hekimliği Fakültesi",
      features: [
        "Dijital implant planlama",
        "All-on-4 tekniği uzmanı",
        "4000+ başarılı implant",
        "Zirkonyum kaplama uzmanı"
      ],
      achievements: [
        "Dijital Diş Hekimliği Ödülü 2022",
        "ITI Implantology Fellow"
      ]
    }
  ];

  const specialties = [
    { icon: <GiTooth size={28} />, title: "Ortodonti", description: "Diş ve çene bozukluklarının tedavisi", bgColor: "rgba(85, 110, 255, 0.1)" },
    { icon: <MdChildCare size={28} />, title: "Pedodonti", description: "Çocuk diş sağlığı uzmanlığı", bgColor: "rgba(253, 193, 0, 0.1)" },
    { icon: <FaTooth size={28} />, title: "İmplantoloji", description: "Eksik dişlerin kalıcı çözümü", bgColor: "rgba(16, 185, 129, 0.1)" },
    { icon: <FaSmile size={28} />, title: "Estetik Diş Hekimliği", description: "Mükemmel gülüş tasarımı", bgColor: "rgba(236, 72, 153, 0.1)" },
    { icon: <RiMentalHealthLine size={28} />, title: "Diş Hekimliği Anksiyetesi", description: "Korkusuz diş tedavisi", bgColor: "rgba(139, 92, 246, 0.1)" },
    { icon: <GiToothbrush size={28} />, title: "Periodontoloji", description: "Diş eti hastalıkları tedavisi", bgColor: "rgba(6, 182, 212, 0.1)" }
  ];

  return (
    <>
      <Navbar />
      <div className="doctors-page">
        <section className="team-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Uzman Ekibimiz</h2>
              <p className="section-subtitle">Deneyimli ve alanında uzman diş hekimlerimiz</p>
            </div>

            <div className="team-grid">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                  <div className="doctor-image-top">
                    <img src={doctor.image} alt={doctor.name} className="doctor-image-prominent" />
                  </div>

                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p className="specialty">{doctor.specialty}</p>

                    <div className="doctor-details">
                      <div className="detail-item">
                        <MdWork className="detail-icon" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="detail-item">
                        <FaGraduationCap className="detail-icon" />
                        <span>{doctor.education}</span>
                      </div>
                    </div>

                    <div className="expertise-section">
                      <h4>Uzmanlık Alanları</h4>
                      <ul className="expertise-list">
                        {doctor.features.map((feature, index) => (
                          <li key={index}>
                            <span className="check-icon">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {doctor.achievements.length > 0 && (
                      <div className="achievements-section">
                        <h4>Başarılar ve Sertifikalar</h4>
                        <ul className="achievements-list">
                          {doctor.achievements.map((achievement, index) => (
                            <li key={index}>
                              <FaAward className="award-icon" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="specialties-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Uzmanlık Alanlarımız</h2>
              <p className="section-subtitle">Hizmet verdiğimiz diş tedavi branşları</p>
            </div>

            <div className="specialties-grid">
              {specialties.map((specialty, index) => (
                <div key={index} className="specialty-card" style={{ backgroundColor: specialty.bgColor }}>
                  <div className="specialty-icon" style={{ color: specialty.bgColor.replace('0.1)', '1)') }}>
                    {specialty.icon}
                  </div>
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