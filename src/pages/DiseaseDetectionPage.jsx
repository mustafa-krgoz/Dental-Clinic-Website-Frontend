// DiseaseDetectionPage.jsx
import React, { useState, useRef } from 'react';
import { FiUpload, FiLoader, FiCheckCircle, FiAlertTriangle, FiX } from 'react-icons/fi';
import { FaTooth, FaClinicMedical, FaSmile } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/ai/DiseaseDetectionPage.css';
import aiHeaderImage from '../assets/images/ai-header.png';

const DiseaseDetectionPage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const recommendationMap = {
    'Diş Çürüğü': {
      suggestion: 'Dolgu tedavisi önerilir. Çürük ilerlemeden tedavi edilmelidir.',
      department: 'Restoratif Diş Tedavisi'
    },
    'Diş Eksikliği': {
      suggestion: 'İmplant veya köprü tedavisi önerilir. Eksik dişler çiğneme fonksiyonunu etkiler.',
      department: 'Protez / İmplantoloji'
    },
    'Diş Eti İltihabı': {
      suggestion: 'Periodontal tedavi (diş eti bakımı) önerilir.',
      department: 'Periodontoloji'
    },
    'Diş Taşı': {
      suggestion: 'Diş taşı temizliği önerilir.',
      department: 'Periodontoloji'
    }
  };

  const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg'];

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
    if (!allowedFormats.includes(file.type)) {
      setError('Lütfen PNG veya JPG formatında bir resim yükleyin.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Dosya boyutu 5MB\'dan büyük olamaz.');
      return;
    }
    setError(null);
    setResults([]);
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
      await new Promise(resolve => setTimeout(resolve, 2000));

      const mockDiseases = [
        'Diş Çürüğü',
        'Diş Eksikliği',
        'Diş Eti İltihabı',
        'Diş Taşı'
      ];

      const mockResults = mockDiseases.map(disease => ({
        name: disease,
        confidence: Math.random() * 0.5 + 0.3
      })).sort((a, b) => b.confidence - a.confidence);

      setResults(mockResults);
    } catch (error) {
      setError('Analiz sırasında bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();
  const resetForm = () => {
    setPreview(null);
    setImage(null);
    setResults([]);
    setError(null);
  };

  const topDisease = results.length > 0 ? results.reduce((max, d) => d.confidence > max.confidence ? d : max) : null;
  const handleRedirect = () => {
    const dept = recommendationMap[topDisease?.name]?.department || 'Genel Diş Muayenesi';
    navigate(`/randevu?tedavi=${encodeURIComponent(topDisease?.name || '')}&bolum=${encodeURIComponent(dept)}`);
  };

  return (
    <>
      <Navbar />
      <div className="disease-detection-page">
        <div className="disease-container">
          <div className="disease-header">
            <div className="disease-logo">
              <img src={aiHeaderImage} alt="AI Diş Hastalıkları Analizi" />
            </div>
            <h1>AI Destekli Diş Hastalıkları Tespiti</h1>
            <p className="disease-subtitle">
              Diş fotoğrafınızı yükleyin, yapay zeka 4 hastalığı analiz etsin. <br />
              <strong>Not:</strong> Yalnızca <strong>160x160</strong> boyutunda, <strong>JPG, JPEG veya PNG</strong> formatında dosyalar desteklenmektedir.
            </p>

            <div className="disease-features">
              <div className="feature-card">
                <FaTooth className="feature-icon" />
                <h3>4 Hastalık Tespiti</h3>
                <p>Diş çürüğü, eksikliği, iltihabı ve diş taşı</p>
              </div>
              <div className="feature-card">
                <FaClinicMedical className="feature-icon" />
                <h3>Hızlı Sonuç</h3>
                <p>Saniyeler içinde analiz sonucu alın</p>
              </div>
              <div className="feature-card">
                <FaSmile className="feature-icon" />
                <h3>Özelleştirilmiş Öneri</h3>
                <p>Tespit edilen duruma göre yönlendirme alın</p>
              </div>
            </div>
          </div>

          <div className={`disease-upload-area ${dragActive ? 'active' : ''} ${preview ? 'has-preview' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}>
            <input type="file" ref={fileInputRef} accept="image/png, image/jpeg, image/jpg" hidden onChange={handleImageChange} />

            {!preview ? (
              <div className="upload-content" onClick={triggerFileInput}>
                <div className="upload-icon">
                  <FiUpload size={48} />
                </div>
                <h3>Diş Fotoğrafınızı Yükleyin</h3>
                <p>160x160 boyutunda JPG, JPEG veya PNG formatında bir görsel yükleyin</p>
              </div>
            ) : (
              <div className="disease-image-preview">
                <img src={preview} alt="Yüklenen diş fotoğrafı" />
                <button className="disease-clear-btn" onClick={resetForm}><FiX size={20} /></button>
              </div>
            )}
          </div>

          {error && (
            <div className="disease-error">
              <FiAlertTriangle className="error-icon" />
              <span>{error}</span>
            </div>
          )}

          {preview && !results.length && (
            <div className="action-buttons">
              <button onClick={handleDetect} disabled={loading} className={`disease-detect-btn ${loading ? 'loading' : ''}`}>
                {loading ? (<><FiLoader className="spinner" /><span>Analiz Yapılıyor...</span></>) : (<span>Analiz Yap</span>)}
              </button>
            </div>
          )}

          {results.length > 0 && (
            <div className="disease-result-container">
              <h2 className="results-title">Analiz Sonuçları</h2>
              <p className="results-subtitle">Tespit edilen hastalıklar ve oranları:</p>
              <div className="disease-result-list">
                {results.map((res, index) => (
                  <div key={index} className="disease-result-item">
                    <span className="disease-disease-name">{res.name}</span>
                    <div className="disease-meter-container">
                      <div className="disease-meter-bar">
                        <div className="disease-meter-fill" style={{ width: `${res.confidence * 100}%` }}></div>
                      </div>
                      <span className="disease-confidence">%{(res.confidence * 100).toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
              {topDisease && (
                <div className="disease-treatment">
                  <div className="treatment-header">
                    <FiCheckCircle className="treatment-icon" />
                    <h3>En Yüksek Olasılıkla: <strong>{topDisease.name}</strong></h3>
                  </div>
                  <div className="treatment-content">
                    <p>{recommendationMap[topDisease.name].suggestion}</p>
                    <p><strong>Önerilen Bölüm:</strong> {recommendationMap[topDisease.name].department}</p>
                    <button onClick={handleRedirect} className="treatment-button">Randevu Al</button>
                  </div>
                </div>
              )}
              <div className="reset-container">
                <button onClick={resetForm} className="disease-reset-btn">Yeni Analiz Yap</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiseaseDetectionPage;