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

  const suggestionMap = {
    'Diş Taşı': 'Diş taşı temizliği önerilir. Profesyonel temizlik için diş hekiminize başvurun.',
    'Çürük ve Diş Eti': 'Dolgu ve diş eti tedavisi önerilir. Erken müdahale için randevu alın.',
    'Diş Çürüğü': 'Dolgu tedavisi önerilir. Çürük ilerlemeden tedavi edilmelidir.',
    'Diş Eti İltihabı': 'Periodontal tedavi (diş eti bakımı) önerilir. Diş etlerinizde iltihap tespit edildi.',
    'Diş Eksikliği': 'İmplant veya köprü tedavisi için hekiminize başvurun. Eksik dişler çiğneme fonksiyonunu etkiler.',
    'Ağız Yarası': 'Aft tedavisi ve ağız hijyeni tavsiye edilir. Yaranız 2 haftadan uzun sürerse mutlaka hekime görünün.',
    'Diş Renklenmesi': 'Diş beyazlatma işlemi uygulanabilir. Profesyonel temizlik de renklenmeyi azaltabilir.'
  };

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
      setError('Dosya boyutu 5MB\'dan büyük olamaz. Lütfen daha küçük bir dosya seçin.');
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
      // Simulate API call with mock data for demonstration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response - in real app, use the actual API call:
      // const response = await fetch('http://localhost:5000/api/detect-disease', {
      //   method: 'POST',
      //   body: formData
      // });
      // if (!response.ok) throw new Error('Sunucu hatası oluştu');
      // const data = await response.json();
      
      // Mock data for demonstration
      const mockDiseases = [
        'Diş Taşı',
        'Çürük ve Diş Eti',
        'Diş Çürüğü',
        'Diş Eti İltihabı',
        'Diş Eksikliği',
        'Ağız Yarası',
        'Diş Renklenmesi'
      ];
      
      const mockResults = mockDiseases.map(disease => ({
        name: disease,
        confidence: Math.random() * 0.5 + 0.3 // Random confidence between 0.3 and 0.8
      })).sort((a, b) => b.confidence - a.confidence);
      
      setResults(mockResults);
    } catch (error) {
      setError('Analiz sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      console.error('Detection error:', error);
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
  const handleRedirect = () => navigate(`/randevu?tedavi=${encodeURIComponent(topDisease?.name || 'Diş Muayenesi')}`);

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
              Diş fotoğrafınızı yükleyin, yapay zeka 7 farklı hastalığı analiz etsin ve size öneriler sunsun.
            </p>
            
            <div className="disease-features">
              <div className="feature-card">
                <FaTooth className="feature-icon" />
                <h3>7 Hastalık Tespiti</h3>
                <p>Çürük, diş taşı, iltihap ve daha fazlasını tanıyabilir</p>
              </div>
              <div className="feature-card">
                <FaClinicMedical className="feature-icon" />
                <h3>Anında Sonuç</h3>
                <p>Saniyeler içinde analiz sonuçlarını görüntüleyin</p>
              </div>
              <div className="feature-card">
                <FaSmile className="feature-icon" />
                <h3>Uzman Önerileri</h3>
                <p>Hastalığa özel tedavi önerileri alın</p>
              </div>
            </div>
          </div>

          <div 
            className={`disease-upload-area ${dragActive ? 'active' : ''} ${preview ? 'has-preview' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              accept="image/*" 
              hidden 
              onChange={handleImageChange} 
            />
            
            {!preview ? (
              <div className="upload-content" onClick={triggerFileInput}>
                <div className="upload-icon">
                  <FiUpload size={48} />
                </div>
                <h3>Diş Fotoğrafınızı Yükleyin</h3>
                <p>Görselinizi sürükleyip bırakın veya tıklayarak seçin</p>
                <div className="upload-requirements">
                  <span>JPEG veya PNG formatında</span>
                  <span>Maksimum 5MB boyutunda</span>
                </div>
              </div>
            ) : (
              <div className="disease-image-preview">
                <img src={preview} alt="Yüklenen diş fotoğrafı önizlemesi" />
                <button className="disease-clear-btn" onClick={resetForm}>
                  <FiX size={20} />
                </button>
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
              <button 
                onClick={handleDetect} 
                disabled={loading} 
                className={`disease-detect-btn ${loading ? 'loading' : ''}`}
              >
                {loading ? (
                  <>
                    <FiLoader className="spinner" />
                    <span>Analiz Yapılıyor...</span>
                  </>
                ) : (
                  <span>Analiz Yap</span>
                )}
              </button>
            </div>
          )}

          {results.length > 0 && (
            <div className="disease-result-container">
              <h2 className="results-title">Analiz Sonuçları</h2>
              <p className="results-subtitle">Yapay zeka tarafından tespit edilen hastalıklar ve olasılık oranları:</p>
              
              <div className="disease-result-list">
                {results.map((res, index) => (
                  <div key={index} className="disease-result-item">
                    <span className="disease-disease-name">
                      {res.name}
                    </span>
                    <div className="disease-meter-container">
                      <div className="disease-meter-bar">
                        <div 
                          className="disease-meter-fill" 
                          style={{ width: `${res.confidence * 100}%` }}
                        ></div>
                      </div>
                      <span className="disease-confidence">
                        %{(res.confidence * 100).toFixed(1)}
                      </span>
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
                    <p>{suggestionMap[topDisease.name]}</p>
                    <button 
                      onClick={handleRedirect}
                      className="treatment-button"
                    >
                      Randevu Al
                    </button>
                  </div>
                </div>
              )}

              <div className="reset-container">
                <button 
                  onClick={resetForm} 
                  className="disease-reset-btn"
                >
                  Yeni Analiz Yap
                </button>
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