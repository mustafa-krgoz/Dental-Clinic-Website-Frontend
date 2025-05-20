import React, { useState, useRef } from 'react';
import { FiUpload, FiLoader, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { FaTooth, FaClinicMedical, FaTeeth, FaTeethOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/ai/CariesDetectionPage.css';

const CariesDetectionPage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    if (!file.type.match('image.*')) {
      alert('Lütfen sadece resim dosyaları yükleyin (JPEG, PNG).');
      return;
    }
    
    setResult(null);
    setImage(file);
    
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDetect = async () => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', image);

    try {
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1500));
      const demoResult = {
        result: Math.random() > 0.5 ? 'Çürük Tespit Edildi' : 'Çürük Bulunamadı',
        confidence: (Math.random() * 0.5 + 0.5).toFixed(2),
        suggestedTreatment: Math.random() > 0.5 ? 'Dolgu tedavisi önerilir' : 'Rutin kontrole devam edin'
      };
      
      setResult(demoResult);
    } catch (error) {
      alert('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = () => {
    navigate('/randevu');
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Navbar />
      <div className="ai-detection-page">
        <div className="ai-container">
          <div className="ai-header">
            <div className="ai-logo">
              <FaTeeth className="tooth-icon" />
              <FaTeethOpen className="tooth-icon open" />
              <div className="pulse-effect"></div>
            </div>
            <h1>AI Diş Çürüğü Analizi</h1>
            <p className="subtitle">Diş fotoğrafını net bir şekilde yükleyin, yapay zeka çürük olup olmadığını saniyeler içinde tespit etsin</p>
          </div>

          <div 
            className={`upload-area ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={triggerFileInput}
          >
            <input 
              type="file" 
              ref={fileInputRef}
              accept="image/*" 
              onChange={handleImageChange} 
              hidden
            />
            <div className="upload-content">
              <FiUpload className="upload-icon" />
              <h3>Resminizi sürükleyip bırakın veya tıklayarak seçin</h3>
              <p>JPEG, PNG formatlarını destekliyoruz</p>
            </div>
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Yüklenen diş röntgeni" />
              <button 
                className="clear-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreview(null);
                  setImage(null);
                  setResult(null);
                }}
              >
                ×
              </button>
            </div>
          )}

          <button 
            className={`detect-btn ${!image || loading ? 'disabled' : ''}`}
            onClick={handleDetect}
            disabled={!image || loading}
          >
            {loading ? (
              <>
                <FiLoader className="loading-spinner" /> Analiz Yapılıyor...
              </>
            ) : (
              'Çürük Analizi Yap'
            )}
          </button>

          {result && (
            <div className={`result-card ${result.result === 'Çürük Tespit Edildi' ? 'negative' : 'positive'}`}>
              <div className="result-icon">
                {result.result === 'Çürük Tespit Edildi' ? <FiAlertTriangle /> : <FiCheckCircle />}
              </div>
              <div className="result-content">
                <h3>{result.result}</h3>
                <div className="confidence-meter">
                  <div 
                    className="confidence-fill" 
                    style={{ width: `${result.confidence * 100}%` }}
                  ></div>
                </div>
                <p>Güven Skoru: %{(result.confidence * 100).toFixed(2)}</p>
                {result.suggestedTreatment && (
                  <div className="treatment-suggestion">
                    <FaClinicMedical />
                    <span>{result.suggestedTreatment}</span>
                  </div>
                )}
              </div>
              {result.result === 'Çürük Tespit Edildi' && (
                <button className="appointment-btn" onClick={handleRedirect}>
                  Hemen Randevu Al
                </button>
              )}
            </div>
          )}

          <div className="ai-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaTooth />
              </div>
              <h4>Doğru Tespit</h4>
              <p>AI teknolojisi ile %95 doğruluk oranında çürük tespiti</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FiCheckCircle />
              </div>
              <h4>Hızlı Sonuç</h4>
              <p>Yüklediğiniz resmi saniyeler içinde analiz ediyoruz</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaClinicMedical />
              </div>
              <h4>Uzman Desteği</h4>
              <p>Çürük tespitinde uzman diş hekimlerimizden destek</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CariesDetectionPage;