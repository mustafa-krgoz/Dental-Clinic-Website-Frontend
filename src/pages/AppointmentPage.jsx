import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/appointment/AppointmentPage.css';
import { FiArrowRight, FiArrowLeft, FiCheck, FiCalendar, FiClock } from 'react-icons/fi';
import { 
  FaUserMd, FaTooth, FaSmile, FaChild, FaXRay, FaTeeth, FaTeethOpen, FaStethoscope
} from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';
import { createAppointment } from '../api/appointmentApi';

const iconMap = {
  "Muayene": <FaStethoscope size={36} />,
  "Ağız ve Çene Cerrahisi": <FaXRay size={36} />,
  "Diş Eti (Periodontoloji)": <GiToothbrush size={36} />,
  "Pedodonti (Çocuk Diş Hekimliği)": <FaChild size={36} />,
  "Ortodonti": <FaTeeth size={36} />,
  "Estetik Diş Hekimliği": <FaSmile size={36} />,
  "Restoratif Diş Tedavisi": <FaTooth size={36} />,
  "Protetik Diş Tedavisi (Protez)": <FaTeethOpen size={36} />,
  "Endodonti (Kanal Tedavisi)": <FaUserMd size={36} />
};

const treatments = [
  { name: "Muayene", description: "Genel diş muayenesi ve kontrol" },
  { name: "Ağız ve Çene Cerrahisi", description: "20'lik diş çekimi ve cerrahi işlemler" },
  { name: "Diş Eti (Periodontoloji)", description: "Diş eti hastalıkları tedavisi" },
  { name: "Pedodonti (Çocuk Diş Hekimliği)", description: "Çocuklara özel diş tedavileri" },
  { name: "Ortodonti", description: "Diş teli ve çene düzensizlikleri" },
  { name: "Estetik Diş Hekimliği", description: "Gülüş tasarımı ve beyazlatma" },
  { name: "Restoratif Diş Tedavisi", description: "Çürük tedavisi ve diş dolguları" },
  { name: "Protetik Diş Tedavisi (Protez)", description: "Diş protezleri ve sabit/çıkarılabilir uygulamalar" },
  { name: "Endodonti (Kanal Tedavisi)", description: "Kanal tedavisi ve diş kökü işlemleri" }
];

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmet Yılmaz",
    specialty: "Ortodonti",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    schedule: {
      "2025-05-16": ["10:00", "11:30", "14:00", "15:30"]
    }
  },
  {
    id: 2,
    name: "Dr. Ayşe Demir",
    specialty: "Pedodonti (Çocuk Diş Hekimliği)",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    schedule: {
      "2025-05-17": ["09:30", "11:00", "14:30", "16:00"]
    }
  },
  {
    id: 3,
    name: "Dr. Mehmet Kaya",
    specialty: "Ağız ve Çene Cerrahisi",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    schedule: {
      "2025-05-16": ["09:00", "11:00", "14:00"]
    }
  },
  {
    id: 4,
    name: "Dr. Elif Koç",
    specialty: "Diş Eti (Periodontoloji)",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    schedule: {
      "2025-05-18": ["09:00", "10:30", "13:00"]
    }
  },
  {
    id: 5,
    name: "Dr. Burak Aslan",
    specialty: "Restoratif Diş Tedavisi",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    schedule: {
      "2025-05-19": ["10:00", "11:30", "14:00"]
    }
  },
  {
    id: 6,
    name: "Dr. Zeynep Öztürk",
    specialty: "Protetik Diş Tedavisi (Protez)",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    schedule: {
      "2025-05-20": ["09:00", "12:00", "15:00"]
    }
  },
  {
    id: 7,
    name: "Dr. Ali Şahin",
    specialty: "Endodonti (Kanal Tedavisi)",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    schedule: {
      "2025-05-21": ["08:30", "10:00", "13:30"]
    }
  },
  {
    id: 8,
    name: "Dr. Merve Yıldız",
    specialty: "Estetik Diş Hekimliği",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    schedule: {
      "2025-05-22": ["09:00", "11:00", "14:00"]
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
    firstName: '',
    lastName: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const appointmentDate = `${selectedDate}T${selectedTime}`;
  
    const appointmentData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phone,
      email: formData.email,
      note: formData.note,
      doctorName: selectedDoctor.name,
      department: selectedTreatment.name,
      appointmentDate,
      status: "BEKLEMEDE"
    };
  
    try {
      await createAppointment(appointmentData);
      alert("🎉 Randevunuz başarıyla oluşturuldu!");
    } catch (error) {
      console.error("Randevu API hatası:", error);
      alert("🚨 Randevu oluşturulurken bir hata oluştu.");
    }
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
                          {iconMap[treatment.name]}
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
              <form className="info-step" onSubmit={handleSubmit} id="appointment-form">
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
                  <label htmlFor="firstName">Ad</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Soyad</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
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
              <button className="submit-btn" type="submit" form="appointment-form">
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