import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/appointment/AppointmentPage.css';
import { FiArrowRight, FiArrowLeft, FiCheck, FiCalendar, FiClock } from 'react-icons/fi';

const treatments = [
  {
    name: "Muayene",
    icon: "/icons/stethoscope.svg",
    description: "Genel diş muayenesi ve kontrol"
  },
  {
    name: "Ağız ve Çene Cerrahisi",
    icon: "/icons/surgery.svg",
    description: "20'lik diş çekimi ve cerrahi işlemler"
  },
  {
    name: "Diş Eti (Periodontoloji)",
    icon: "/icons/tooth.svg",
    description: "Diş eti hastalıkları tedavisi"
  },
  {
    name: "Pedodonti (Çocuk Diş Hekimi)",
    icon: "/icons/baby.svg",
    description: "Çocuklara özel diş tedavileri"
  },
  {
    name: "Ortodonti",
    icon: "/icons/braces.svg",
    description: "Diş teli ve çene düzensizlikleri"
  },
  {
    name: "Estetik Diş Hekimliği",
    icon: "/icons/esthetic.svg",
    description: "Gülüş tasarımı ve beyazlatma"
  }
];

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmet Yılmaz",
    specialty: "Ortodonti",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    schedule: {
      "2025-05-16": ["10:00", "11:30", "14:00", "15:30"],
      "2025-05-19": ["09:00", "10:30", "13:00", "14:30"],
      "2025-05-20": ["11:00", "13:30", "15:00", "16:30"]
    }
  },
  {
    id: 2,
    name: "Dr. Ayşe Demir",
    specialty: "Pedodonti",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    schedule: {
      "2025-05-17": ["09:30", "11:00", "14:30", "16:00"],
      "2025-05-19": ["10:00", "12:00", "15:00"],
      "2025-05-21": ["09:00", "11:30", "14:00"]
    }
  },
  {
    id: 3,
    name: "Dr. Mehmet Kaya",
    specialty: "Ağız ve Çene Cerrahisi",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    schedule: {
      "2025-05-16": ["09:00", "11:00", "14:00"],
      "2025-05-18": ["10:30", "13:00", "15:30"],
      "2025-05-20": ["09:30", "11:30", "14:30"]
    }
  }
];

const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: ''
  });

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
    setStep(2);
  };

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
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
    const appointmentData = {
      treatment: selectedTreatment.name,
      doctor: selectedDoctor.name,
      date: selectedDate,
      time: selectedTime,
      ...formData
    };
    console.log('Randevu bilgileri:', appointmentData);
    alert('Randevunuz başarıyla oluşturuldu!');
  };

  const Calendar = ({ doctor }) => {
    const availableDates = Object.keys(doctor.schedule);
    
    return (
      <div className="calendar-container">
        <div className="calendar-header">
          <FiCalendar className="calendar-icon" />
          <h4>Uygun Tarihler</h4>
        </div>
        <div className="date-grid">
          {availableDates.map(date => {
            const dateObj = new Date(date);
            const dayName = dateObj.toLocaleDateString('tr-TR', { weekday: 'long' });
            const formattedDate = dateObj.toLocaleDateString('tr-TR', { 
              day: 'numeric', 
              month: 'long',
              year: 'numeric'
            });
            
            return (
              <div 
                key={date}
                className={`date-card ${selectedDate === date ? 'selected' : ''}`}
                onClick={() => handleSelectDate(date)}
              >
                <div className="date-day">{dayName}</div>
                <div className="date-number">{formattedDate}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const TimeSlotPicker = ({ doctor }) => {
    if (!selectedDate) return null;
    
    const availableTimes = doctor.schedule[selectedDate] || [];
    
    return (
      <div className="time-slot-container">
        <div className="time-slot-header">
          <FiClock className="clock-icon" />
          <h4>Uygun Saatler</h4>
        </div>
        <div className="time-grid">
          {availableTimes.map(time => (
            <button
              key={time}
              className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    );
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
                <div className="step-label">Doktor & Tarih</div>
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
                      <div className="treatment-icon">
                        <img src={treatment.icon} alt={treatment.name} />
                      </div>
                      <h3>{treatment.name}</h3>
                      <p>{treatment.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="doctor-step">
                <h2>Doktor ve Randevu Saati Seçimi</h2>
                <p>{selectedTreatment.name} tedavisi için uygun doktorlarımız</p>
                
                <div className="doctor-selection-container">
                  <div className="doctor-list">
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
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {selectedDoctor && (
                    <div className="schedule-selection">
                      <Calendar doctor={selectedDoctor} />
                      <TimeSlotPicker doctor={selectedDoctor} />
                    </div>
                  )}
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
                  <div className="summary-item">
                    <span>Tarih:</span>
                    <strong>
                      {selectedDate && new Date(selectedDate).toLocaleDateString('tr-TR', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long',
                        year: 'numeric'
                      })}
                    </strong>
                  </div>
                  <div className="summary-item">
                    <span>Saat:</span>
                    <strong>{selectedTime || 'Belirtilmedi'}</strong>
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
                  <label htmlFor="note">Ek Not (Opsiyonel)</label>
                  <textarea 
                    id="note" 
                    name="note" 
                    value={formData.note}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Randevu ile ilgili özel notlarınız..."
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
                disabled={
                  (step === 1 && !selectedTreatment) || 
                  (step === 2 && (!selectedDoctor || !selectedDate || !selectedTime))
                }
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