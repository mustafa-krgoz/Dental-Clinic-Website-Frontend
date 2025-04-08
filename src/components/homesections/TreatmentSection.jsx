import React, { useState } from 'react';
import './TreatmentSection.css';
import {
  FaTooth,
  FaTeethOpen,
  FaSmile,
  FaChild,
  FaXRay,
} from 'react-icons/fa';
import {
  GiToothbrush,
  GiTooth,
  GiMouthWatering,
  GiLipstick,  
} from 'react-icons/gi';
import { MdOutlineCleaningServices, MdOutlineLocalPharmacy } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const treatments = [
  {
    icon: <FaTooth size={36} />,
    title: 'İmplant Tedavisi',
    description: 'Eksik dişlerin yerini alan kalıcı, dayanıklı yapay diş kökleri.',
  },
  {
    icon: <FaTeethOpen size={36} />,
    title: 'Ortodonti',
    description: 'Diş çapraşıklıkları ve çene bozukluklarının tedavisi.',
  },
  {
    icon: <FaSmile size={36} />,
    title: 'Estetik Diş Hekimliği',
    description: 'Gülüş tasarımı ve beyazlatma gibi estetik uygulamalar.',
  },
  {
    icon: <FaChild size={36} />,
    title: 'Çocuk Diş Hekimliği',
    description: 'Çocuklara özel diş tedavisi ve düzenli muayene hizmetleri.',
  },
  {
    icon: <GiTooth size={36} />,
    title: 'Diş Dolgusu',
    description: 'Çürük temizliği sonrası dişin dolguyla tamamlanması.',
  },
  {
    icon: <MdOutlineCleaningServices size={36} />,
    title: 'Diş Taşı Temizliği',
    description: 'Diş taşı ve plakların temizlenmesiyle sağlıklı dişler.',
  },
  {
    icon: <GiToothbrush size={36} />,
    title: 'Diş Beyazlatma',
    description: 'Dişlerin daha beyaz görünmesi için estetik uygulamalar.',
  },
  {
    icon: <FaXRay size={36} />,
    title: 'Diş Tomografisi',
    description: 'Diş yapısının detaylı görüntülenmesini sağlayan ileri görüntüleme.',
  },
  {
    icon: <GiTooth size={36} />,
    title: 'Diş Eti Tedavisi',
    description: 'Diş eti iltihabı ve hastalıklarının tedavisi.',
  },
  {
    icon: <MdOutlineLocalPharmacy size={36} />,
    title: 'Sedasyon ile Diş Tedavisi',
    description: 'Kaygı düzeyi yüksek hastalar için rahatlatıcı tedavi yöntemi.',
  },
  {
    icon: <GiMouthWatering size={36} />,
    title: 'Zirkonyum Kaplama',
    description: 'Estetik ve dayanıklı zirkonyum esaslı diş kaplama.',
  },
  {
    icon: <GiLipstick size={36} />,
    title: 'Lamina Kaplama',
    description: 'İnce yaprak porselenler ile dişlerin ön yüzeylerinin estetik olarak kaplanması.',
  }
];

function TreatmentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < treatments.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleTreatments = treatments.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="treatment-section">
      <h2 className="section-title">Tedavilerimiz</h2>

      <div className="treatment-carousel">
        <button className="arrow left" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>

        <div className="treatment-cards">
          {visibleTreatments.map((treatment, index) => (
            <div key={index} className="treatment-card">
              <div className="icon">{treatment.icon}</div>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default TreatmentSection;