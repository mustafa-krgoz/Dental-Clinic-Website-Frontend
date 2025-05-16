import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/appointment/AppointmentPage.css';
import { FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi';

const treatments = [
  {
    name: "Muayene",
    icon: "🩺",
    description: "Genel diş muayenesi ve kontrol"
  },
  {
    name: "Ağız ve Çene Cerrahisi",
    icon: "⚕️",
    description: "20'lik diş çekimi ve cerrahi işlemler"
  },
  {
    name: "Diş Eti (Periodontoloji)",
    icon: "🦷",
    description: "Diş eti hastalıkları tedavisi"
  },
  {
    name: "Pedodonti (Çocuk Diş Hekimi)",
    icon: "👶",
    description: "Çocuklara özel diş tedavileri"
  },
  {
    name: "Ortodonti",
    icon: "😁",
    description: "Diş teli ve çene düzensizlikleri"
  },
  {
    name: "Estetik Diş Hekimliği",
    icon: "✨",
    description: "Gülüş tasarımı ve beyazlatma"
  }
];

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmet Yılmaz",
    specialty: "Ortodonti",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    available: ["Pazartesi", "Çarşamba", "Cuma"]
  },
  {
    id: 2,
    name: "Dr. Ayşe Demir",
    specialty: "Pedodonti",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    available: ["Salı", "Perşembe", "Cumartesi"]
  },
  {
    id: 3,
    name: "Dr. Mehmet Kaya",
    specialty: "Ağız ve Çene Cerrahisi",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    available: ["Pazartesi", "Salı", "Perşembe"]
  }
];

const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    note: ''
  });

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
    setStep(2);
  };

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada randevu gönderme işlemi yapılacak
    alert('Randevunuz başarıyla oluşturuldu!');
  };

  return (
    <>
      <Navbar />
      <div className="appointment-page">
        <div className="appointment-container">
          <div className="appointment-header">
            <h1>Online Randevu Sistemi</h1>
            <p>3 kolay adımda randevunuzu oluşturun</p>
            
            <div className="step-progress">
              <div className={`step ${step >= 1 ? 'active' : ''}`}>
                <div className="step-circle">{step > 1 ? <FiCheck /> : 1}</div>
                <div className="step-label">Tedavi Seçimi</div>
              </div>
              <div className={`step-connector ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}>
                <div className="step-circle">{step > 2 ? <FiCheck /> : 2}</div>
                <div className="step-label">Doktor Seçimi</div>
              </div>
              <div className={`step-connector ${step >= 3 ? 'active' : ''}`}></div>
              <div className={`step ${step >= 3 ? 'active' : ''}`}>
                <div className="step-circle">3</div>
                <div className="step-label">Bilgileriniz</div>
              </div>
            </div>
          </div>

          <div className="appointment-content">
            {step === 1 && (
              <div className="treatment-step">
                <h2>Hangi Tedaviyi Almak İstiyorsunuz?</h2>
                <p>Lütfen almak istediğiniz tedaviyi seçiniz</p>
                
                <div className="treatment-options">
                  {treatments.map((treatment, index) => (
                    <div 
                      key={index}
                      className={`treatment-card ${selectedTreatment?.name === treatment.name ? 'selected' : ''}`}
                      onClick={() => handleSelectTreatment(treatment)}
                    >
                      <div className="treatment-icon">{treatment.icon}</div>
                      <h3>{treatment.name}</h3>
                      <p>{treatment.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="doctor-step">
                <h2>Tercih Ettiğiniz Doktoru Seçin</h2>
                <p>{selectedTreatment.name} tedavisi için uygun doktorlarımız</p>
                
                <div className="doctor-options">
                  {doctors.filter(d => d.specialty === selectedTreatment.name || selectedTreatment.name === "Muayene").map(doctor => (
                    <div 
                      key={doctor.id}
                      className={`doctor-card ${selectedDoctor?.id === doctor.id ? 'selected' : ''}`}
                      onClick={() => handleSelectDoctor(doctor)}
                    >
                      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                      <div className="doctor-info">
                        <h3>{doctor.name}</h3>
                        <p className="specialty">{doctor.specialty}</p>
                        <p className="availability">
                          <strong>Uygun olduğu günler:</strong> {doctor.available.join(', ')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <form className="info-step" onSubmit={handleSubmit}>
                <h2>Randevu Bilgileriniz</h2>
                <p>Lütfen iletişim bilgilerinizi giriniz</p>
                
                <div className="appointment-summary">
                  <div className="summary-item">
                    <span>Tedavi:</span>
                    <strong>{selectedTreatment.name}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Doktor:</span>
                    <strong>{selectedDoctor?.name || 'Belirtilmedi'}</strong>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">Tercih Ettiğiniz Tarih</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="note">Ek Not (Opsiyonel)</label>
                  <textarea 
                    id="note" 
                    name="note" 
                    value={formData.note}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
              </form>
            )}
          </div>

          <div className="appointment-footer">
            {step > 1 && (
              <button className="back-btn" onClick={handleBack}>
                <FiArrowLeft /> Geri
              </button>
            )}
            
            {step < 3 ? (
              <button 
                className="next-btn" 
                onClick={handleNext}
                disabled={(step === 2 && !selectedDoctor) || (step === 1 && !selectedTreatment)}
              >
                İleri <FiArrowRight />
              </button>
            ) : (
              <button 
                className="submit-btn"
                type="submit"
                form="appointment-form"
              >
                Randevu Oluştur
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppointmentPage;