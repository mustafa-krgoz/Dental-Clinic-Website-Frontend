import React, { useState, useRef } from 'react';
import { FiUpload, FiLoader, FiCheckCircle, FiAlertTriangle, FiX } from 'react-icons/fi';
import { FaTooth, FaClinicMedical, FaSmile } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/ai/CariesDetectionPage.css';
import aiHeaderImage from '../assets/images/ai-header.png'; // Yeni logo görseli

const CariesDetectionPage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
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
      setError('Lütfen sadece resim dosyaları yükleyin (JPEG, PNG).');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Dosya boyutu 5MB\'dan büyük olamaz.');
      return;
    }
    setError(null);
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
    setError(null);
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await fetch('http://localhost:5000/api/detect-caries', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Sunucu hatası oluştu');
      }
      const data = await response.json();
      setResult({
        result: data.has_caries ? 'Çürük Tespit Edildi' : 'Çürük Bulunamadı',
        confidence: data.confidence.toFixed(2),
        suggestedTreatment: data.has_caries ?
          'Dolgu tedavisi önerilir. En kısa sürede diş hekiminize başvurun.' :
          'Rutin kontrollerinize devam edebilirsiniz.'
      });
    } catch (error) {
      setError('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = () => navigate('/randevu');
  const triggerFileInput = () => fileInputRef.current.click();
  const resetForm = () => {
    setPreview(null);
    setImage(null);
    setResult(null);
    setError(null);
  };

  return (
    <>
      <Navbar />
      <div className="ai-detection-page">
        <div className="ai-container">
          <div className="ai-header">
            <div className="ai-logo">
              <img src={aiHeaderImage} alt="AI Diş Çürüğü Analizi" />
            </div>
            <h1>AI Destekli Diş Çürüğü Analizi</h1>
            <p className="ai-subtitle">
              Diş fotoğrafınızı yükleyin, yapay zeka %95 doğrulukla çürük olup olmadığını analiz etsin
            </p>
          </div>

          <div className="ai-detection-flow">
            <div className="ai-flow-step active">
              <div className="ai-step-number">1</div>
              <div className="ai-step-text">Resim Yükle</div>
            </div>
            <div className={`ai-flow-step ${image ? 'active' : ''}`}>
              <div className="ai-step-number">2</div>
              <div className="ai-step-text">Analiz Yap</div>
            </div>
            <div className={`ai-flow-step ${result ? 'active' : ''}`}>
              <div className="ai-step-number">3</div>
              <div className="ai-step-text">Sonuç Al</div>
            </div>
          </div>

          <div 
            className={`ai-upload-area ${dragActive ? 'active' : ''} ${preview ? 'has-preview' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={!preview ? triggerFileInput : undefined}
          >
            <input 
              type="file" 
              ref={fileInputRef}
              accept="image/*" 
              onChange={handleImageChange} 
              hidden
            />
            {!preview ? (
              <div className="ai-upload-content">
                <FiUpload className="ai-upload-icon" />
                <h3>Resminizi sürükleyip bırakın veya tıklayarak seçin</h3>
                <p>JPEG veya PNG formatında, maksimum 5MB</p>
              </div>
            ) : (
              <div className="ai-image-preview-container">
                <div className="ai-image-preview">
                  <img src={preview} alt="Yüklenen diş fotoğrafı" />
                </div>
                <button className="ai-clear-btn" onClick={resetForm}><FiX /></button>
              </div>
            )}
          </div>

          {error && (
            <div className="ai-error-message">
              <FiAlertTriangle className="ai-error-icon" />
              <span>{error}</span>
            </div>
          )}

          <div className="ai-action-buttons">
            {preview && !result && (
              <button 
                className={`ai-detect-btn ${loading ? 'loading' : ''}`}
                onClick={handleDetect}
                disabled={loading}
              >
                {loading ? (<><FiLoader className="ai-loading-spinner" /> Analiz Yapılıyor...</>) : 'Çürük Analizi Yap'}
              </button>
            )}
          </div>

          {result && (
            <div className={`ai-result-card ${result.result === 'Çürük Tespit Edildi' ? 'negative' : 'positive'}`}>
              <div className="ai-result-icon">
                {result.result === 'Çürük Tespit Edildi' ? <FiAlertTriangle /> : <FiCheckCircle />}
              </div>
              <div className="ai-result-content">
                <h3>{result.result}</h3>
                <div className="ai-confidence-meter">
                  <div className="ai-meter-labels">
                    <span>Düşük</span>
                    <span>Yüksek</span>
                  </div>
                  <div className="ai-meter-bar">
                    <div className="ai-meter-fill" style={{ width: `${result.confidence * 100}%` }}></div>
                  </div>
                </div>
                <p className="ai-confidence-value">Güven Skoru: %{(result.confidence * 100).toFixed(2)}</p>
                <div className="ai-treatment-suggestion">
                  <FaClinicMedical className="ai-clinic-icon" />
                  <span>{result.suggestedTreatment}</span>
                </div>
              </div>
              {result.result === 'Çürük Tespit Edildi' && (
                <button className="ai-appointment-btn" onClick={handleRedirect}>
                  Hemen Randevu Al
                </button>
              )}
              <button className="ai-new-analysis-btn" onClick={resetForm}>Yeni Analiz Yap</button>
            </div>
          )}

          <div className="ai-sample-images">
            <p>Örnek Fotoğraflar</p>
            <div className="ai-samples">
              <img src="../images/sample1.jpg" alt="Örnek diş 1" />
              <img src="../images/sample2.jpg" alt="Örnek diş 2" />
            </div>
          </div>

          <div className="ai-features">
            <div className="ai-feature-card">
              <div className="ai-feature-icon"><FaTooth /></div>
              <h4>Yüksek Doğruluk</h4>
              <p>Gelişmiş AI algoritmaları ile %95'e varan doğruluk oranı</p>
            </div>
            <div className="ai-feature-card">
              <div className="ai-feature-icon"><FaSmile /></div>
              <h4>Hızlı Sonuç</h4>
              <p>Yüklediğiniz resmi 10 saniyeden kısa sürede analiz ediyoruz</p>
            </div>
            <div className="ai-feature-card">
              <div className="ai-feature-icon"><FaClinicMedical /></div>
              <h4>Öneriler</h4>
              <p>Sonuçlara göre kişiye özel bakım önerileri sunuyoruz</p>
            </div>
                <div className="ai-info-section">
                <h3>Nasıl Daha İyi Fotoğraf Çekebilirsiniz?</h3>
                <ul>
                <li>Dişlerinizi göstermek için ağzınızı genişçe açın</li>
                <li>Yeterli ışık altında çekim yapın</li>
                <li>Odaklanmayı kolaylaştırmak için arka planı sade tutun</li>
                <li>Mümkünse flaş kullanmayın</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CariesDetectionPage;