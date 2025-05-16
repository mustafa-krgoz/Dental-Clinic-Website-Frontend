import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/appointment/AppointmentPage.css';

const treatments = [
  "Muayene",
  "Ağız ve Çene Cerrahisi",
  "Diş Eti (Periodontoloji)",
  "Pedodonti (Çocuk Diş Hekimi)",
  "Ortodonti",
  "Estetik Diş Hekimliği"
];

const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
    setStep(2);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <>
      <Navbar />
      <div className="appointment-page">
        <div className="appointment-header">
          <h1>Online Randevu</h1>
          <p>Adım adım kolayca randevunuzu oluşturun</p>
          <div className="step-indicator">
            <button className={step === 1 ? 'active' : ''} onClick={() => setStep(1)}>1. Tedavi</button>
            <button className={step === 2 ? 'active' : ''} onClick={() => setStep(2)}>2. Doktor</button>
            <button className={step === 3 ? 'active' : ''} onClick={() => setStep(3)}>3. Gönder</button>
          </div>
        </div>

        <div className="appointment-content">
          {step === 1 && (
            <>
              <h2>Bir tedavi seçin:</h2>
              <div className="treatment-options">
                {treatments.map((treatment, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectTreatment(treatment)}
                    className={selectedTreatment === treatment ? 'selected' : ''}
                  >
                    {treatment}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Doktor seçimi</h2>
              <p>Buraya doktor seçimi adımı gelecek (devam ediyoruz)...</p>
            </>
          )}

          {step === 3 && (
            <>
              <h2>Randevu Özeti</h2>
              <p>Tedavi: <strong>{selectedTreatment}</strong></p>
              <p>Buraya kullanıcı bilgileri ve gönder butonu gelecek.</p>
            </>
          )}
        </div>

        <div className="appointment-footer">
          {step > 1 && <button className="back-btn" onClick={handleBack}>Geri</button>}
          {step < 3 && <button className="next-btn" onClick={handleNext}>İleri</button>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppointmentPage;